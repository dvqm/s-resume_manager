import React from 'react';

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.edit = props.edit;

        this.view = props.view;

        this.state = {
            keyName: props.keyName,
            nextId: 0,
            fields: props.section.fields,
            default: props.section.default,
            values: props.section.values,
        };

        this.helper = props.helper;

        this.handle = this.handlers(this);
    }

    handlers(context) {
        return {
            add() {
                context.setState(prevState => {
                    return {
                        values: [...prevState.values, {
                            ...context.state.default,
                            id: context.helper.setId(context.state.values, context),
                            init: true
                        }]
                    };
                }, () => {
                    context.helper.setState(context.state.keyName, context.state.values);
                });
            },

            edit(id) {
                let newArticles = [...context.state.values];

                const item = newArticles.find(i => i.id === id);

                item.editing = true;

                context.setState({
                    values: newArticles
                });

                context.originalArticle = {...item};
            },

            delete(e, id) {
                e.preventDefault();

                const newArticles = context.state.values.filter((article) => article.id !== id);

                context.setState({
                        values: newArticles
                    }, () => {
                        context.helper.setState(context.state.keyName, context.state.values);
                    }
                );

            },

            save(e, id) {
                e.preventDefault();

                const newArticles = context.state.values.map((article) => {
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

                context.setState({
                    values: newArticles
                }, () => {
                    context.helper.setState(context.state.keyName, context.state.values);

                    context.originalArticle = null;
                });
            },

            cancel(e, id) {
                e.preventDefault();

                let newArticles = [...context.state.values];

                newArticles = newArticles.map(article => {
                    if (article.id === id) {
                        article = context.originalArticle;

                        article.editing = false;
                    }

                    return article;
                });

                context.setState({
                    values: newArticles
                }, () => {
                    context.helper.setState(context.state.keyName, context.state.values);

                    context.originalArticle = null;
                });
            },

            change(e, id, field) {
                context.setState(prevState => {
                    const newArticles = [...context.state.values].map((article) => {
                        if (article.id === id) {
                            article[field] = context.helper.getEventValue(e);

                            return article;
                        } else {
                            return article;
                        }
                    });
                    return {...prevState, values: newArticles}
                }, () => {
                    context.helper.setState(
                        context.state.keyName,
                        context.state.values,
                    );
                });
            },
        }
    }

    render() {
        return (
            <section>
                <h2>{this.state.fields.title}</h2>
                <hr/>
                <button onClick={this.handle.add}>{this.state.fields.btnName}</button>
                {
                    this.state.values.length > 0 &&
                    this.state.values.map((section) => (
                            section.editing
                                ?
                                <form key={section.id} onSubmit={(e) => this.handle.save(e, section.id)}>

                                    {React.createElement(this.edit, {
                                        fields: this.state.fields,
                                        section: section,
                                        handleChange: this.handle.change,
                                    })}

                                    <button type="submit">Save</button>

                                    {!section.init &&
                                        <button onClick={(e) => this.handle.cancel(e, section.id)}>Cancel</button>
                                    }
                                    <button onClick={(e) => this.handle.delete(e, section.id)}>Delete</button>
                                </form>
                                :
                                <article key={section.id}>
                                    {React.createElement(this.view, {
                                        fields: this.state.fields,
                                        section: section,
                                    })}

                                    <button onClick={() => this.handle.edit(section.id)}>Edit</button>
                                </article>
                        )
                    )
                }
            </section>
        );
    }
}

export default Section;