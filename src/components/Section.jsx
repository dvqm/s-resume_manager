import React from 'react';

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.nextId = 0;

        this.edit = props.edit;

        this.view = props.view;

        this.state = {
            fields: props.section.fields,
            default: props.section.default,
            list: props.section.list,
        };

        this.handleAdd = this.handleAdd.bind(this);

        this.handleEdit = this.handleEdit.bind(this);

        this.handleDelete = this.handleDelete.bind(this);

        this.handleSave = this.handleSave.bind(this);

        this.handleCancel = this.handleCancel.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }

    createId(list) {
        if (list.length > 0) {
            this.nextId = Math.max(...list.map(x => x.id)) + 1;
        } else {
            this.nextId = 1;
        }
        return this.nextId;
    }

    handleAdd() {
        const newArticle = {
            ...this.state.default,
            id: this.createId(this.state.list),
            init: true
        };

        this.setState(prevState => {
            const newArticles = [...prevState.list, newArticle]
            return {list: newArticles};
        });
    }

    handleEdit(id) {
        let newArticles = [...this.state.list];

        const item = newArticles.find(i => i.id === id);

        item.editing = true;

        this.setState({
            list: newArticles
        });

        this.originalArticle = {...item};
    }

    handleDelete(id) {
        const newArticles = this.state.list.filter((article) => article.id !== id);

        this.setState({
            list: newArticles
        });
    }

    handleSave(e, id) {
        e.preventDefault();

        const newArticles = this.state.list.map((article) => {
            if (article.id === id) {
                article.editing = false;

                if (article.init) delete article.init;
            }
            return article;
        });

        newArticles.sort((a, b) => {
            if (a.startDate < b.startDate) return -1;
            if (a.startDate > b.startDate) return 1;
            return 0;
        });

        this.setState({
            list: newArticles
        });

        this.originalArticle = null;
    }

    handleCancel(id) {
        let newArticles = [...this.state.list];

        newArticles = newArticles.map(article => {
            if (article.id === id) {
                article = this.originalArticle;

                article.editing = false;
            }
            return article;
        });

        this.setState({
            list: newArticles
        });
        this.originalArticle = null;
    }

    handleChange(e, id, field) {
        let newArticles = this.state.list.map((article) => {
            if (article.id === id) {
                if (e.target.type === 'checkbox') {
                    return { ...article, [field]: e.target.checked };
                } else {
                    return { ...article, [field]: e.target.value };
                }
            } else {
                return article;
            }
        });
        this.setState({ list: newArticles });
    }

    render() {
        return (
            <section>
                <button onClick={this.handleAdd}>{this.state.fields.btnName}</button>
                {
                    this.state.list.length > 0 &&
                    this.state.list.map((section) => (
                            section.editing
                                ?
                                <form key={section.id} onSubmit={(e) => this.handleSave(e, section.id)}>
                                    {section.id}
                                    {React.createElement(this.edit, {
                                        fields: this.state.fields,
                                        section: section,
                                        handleChange: this.handleChange,
                                    })}

                                    <button type="submit">Save</button>

                                    {section.init
                                        ? ''
                                        : <button onClick={() => this.handleCancel(section.id)}>Cancel</button>
                                    }
                                    <button onClick={() => this.handleDelete(section.id)}>Delete</button>
                                </form>
                                :
                                <article key={section.id}>
                                    {React.createElement(this.view, {
                                        fields: this.state.fields,
                                        section: section,
                                    })}

                                    <button onClick={() => this.handleEdit(section.id)}>Edit</button>
                                </article>
                        )
                    )
                }
            </section>
        );
    }
}

export default Section;
