import React from "react";

class Article extends React.Component {
    constructor(props) {
        super(props);

        this.edit = props.edit;

        this.view = props.view;

        this.state = {
            keyName: props.keyName,
            fields: props.article.fields,
            values: props.article.values,
            editing: false,
        }

        this.helper = props.helper;

        this.handle = this.handlers(this);
    }

    handlers(context) {
        return {
            edit() {
                context.original = {...context.state.values};

                context.setState({editing: true});
            },

            save() {
                const {values} = {...context.state};

                context.setState({editing: false, values: values})

                context.helper.setState(context.state.keyName, context.state.values);
            },

            cancel() {
                context.setState({editing: false, values: context.original}, () => {
                    context.helper.setState(context.state.keyName, context.state.values);

                    context.original = null;
                });

            },

            clear() {
                const newValues = {...context.state.values};

                Object.keys(newValues).forEach((key) => {
                    if (typeof newValues[key] === 'boolean') newValues[key] = false;
                    else newValues[key] = '';
                })

                context.setState({values: newValues},
                    () => {
                        context.helper.setState(context.state.keyName, context.state.values);
                    });


            },

            change(e, field) {
                const value = context.helper.getEventValue(e);

                context.helper.onChange(context, value, e, field, context.helper.setState)
            },
        }
    }

    render() {
        return (
            <article>
                {this.state.fields.title
                    ? <>
                        <h2>{this.state.fields.title}</h2>
                        <hr/>
                    </>
                    : ''
                }

                {this.state.editing ?
                    <>
                        <button onClick={() => this.handle.save()}>Save</button>

                        <button onClick={() => this.handle.cancel()}>Cancel</button>

                        <button onClick={() => this.handle.clear()}>Clear</button>

                        {React.createElement(this.edit, {
                            fields: this.state.fields,
                            values: this.state.values,
                            handleChange: this.handle.change,
                            helper: this.helper,
                        })}
                    </>
                    :
                    <>
                        <button onClick={() => this.handle.edit()}>{this.state.fields.btnName}</button>

                        {React.createElement(this.view, {
                            fields: this.state.fields,
                            values: this.state.values,
                        })}
                    </>
                }
            </article>
        )
    }
}

export default Article;
