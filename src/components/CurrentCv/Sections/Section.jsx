import React from 'react';

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.edit = props.edit;

        this.view = props.view;

        this.state = {
            keyName: props.keyName,
            default: props.state.default,
            originalArticles: [],
        };

        this.helper = props.helper;

        this.handle = this.handlers(this);
    }

    handlers(context) {
        return {
            add() {
                const setId = (list) => {
                    if (list.length > 0) {
                        return Math.max(...list.map(x => x.id)) + 1;
                    } else {
                        return 1;
                    }
                };

                const newArticle = {
                    ...context.props.state.default,
                    id: setId(context.props.state.values),
                    init: true,
                }

                const section = [...context.props.state.values];

                section.push(newArticle);

                context.helper.setState(context.state.keyName, section);
            },

            edit(id) {
                const updateOriginalArticles = (newArticles) => {
                    const originalArticles = [...context.state.originalArticles]

                    const copyArticle = newArticles.find((article) => article.id === id);

                    const index = originalArticles.findIndex(article => article.id === id);
                    if (index !== -1) {
                        return [
                            ...originalArticles.slice(0, index),
                            {...originalArticles[index], ...copyArticle},
                            ...originalArticles.slice(index + 1)
                        ];
                    } else {
                        return [...originalArticles, {id, ...copyArticle}];
                    }
                }

                const newArticles = [...context.props.state.values];

                const originalArticles = updateOriginalArticles(newArticles);

                newArticles.map((article) => {
                    if (article.id === id) {
                        article.editing = true;

                        return article;
                    }

                    return article;
                });

                context.setState({...context.state, originalArticles: originalArticles},
                    () => context.helper.setState(context.state.keyName, newArticles)
                );
            },

            delete(e, id) {
                e.preventDefault();

                const newArticles = context.props.state.values.filter((article) => article.id !== id);

                context.helper.setState(context.state.keyName, newArticles);
            },

            save(e, id) {
                e.preventDefault();

                const newArticles = context.props.state.values.map((article) => {
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

                context.helper.setState(context.state.keyName, newArticles);
            },

            cancel(e, id) {
                e.preventDefault();

                let newArticles = [...context.props.state.values];

                newArticles = newArticles.map(article => {
                    if (article.id === id) {
                        article = context.state.originalArticles.find((article) => article.id === id);

                        article.editing = false;
                    }

                    return article;
                });

                context.helper.setState(context.state.keyName, newArticles);
            },
        }
    }

    render() {
        return (
            <section>
                <h2>{this.props.state.fields.title}</h2>
                <hr/>
                <button onClick={this.handle.add}>{this.props.state.fields.btnName}</button>
                {
                    this.props.state.values.length > 0 &&
                    this.props.state.values.map((section) => (
                            section.editing
                                ?
                                <form key={section.id} onSubmit={(e) => this.handle.save(e, section.id)}>

                                    {React.createElement(this.edit, {
                                        keyName: this.props.keyName,
                                        fields: this.props.state.fields,
                                        section: section,
                                        helper: this.props.helper,
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
                                        keyName: this.props.keyName,
                                        fields: this.props.state.fields,
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
