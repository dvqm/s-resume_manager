import React from "react";

class Article extends React.Component {
    constructor(props) {
        super(props);

        this.edit = props.edit;

        this.view = props.view;

        this.state = {
            keyName: props.keyName,
            editing: false,
            original: props.state.values,
        }

        this.helper = props.helper;

        this.handle = this.handlers(this);
    }

    handlers(context) {
        return {
            edit() {
                context.setState({
                    ...context.state,
                    original: context.props.state.values,
                    editing: true
                });
            },

            save(e) {
                e.preventDefault();

                context.setState({editing: false},
                    () => {
                        const values = {...context.props.state.values};

                        context.helper.setState(context.state.keyName, values);
                    });

            },

            cancel(e) {
                e.preventDefault();

                context.setState({editing: false, values: context.state.original}, () => {
                    context.helper.setState(context.state.keyName, context.state.values);
                });

            },

            clear(e) {
                e.preventDefault();

                context.setState({
                    ...context.state,
                    original: context.props.state.values,
                });

                const values = {...context.props.state.values};

                Object.keys(values).forEach((key) => {
                    if (typeof values[key] === 'boolean') values[key] = false;
                    else values[key] = '';
                })

                context.helper.setState(context.state.keyName, values);
            },
        }
    }

    render() {
        return (
            <>
                {this.props.state.fields.title &&
                    <>
                        <h2>{this.props.state.fields.title}</h2>
                        <hr/>
                    </>
                }

                {this.state.editing ?
                    <form onSubmit={(e) => this.handle.save(e)}>
                        <button type="submit">Save</button>

                        <button onClick={(e) => this.handle.cancel(e)}>Cancel</button>

                        <button onClick={(e) => this.handle.clear(e)}>Clear</button>

                        {React.createElement(this.edit, {
                            keyName: this.state.keyName,
                            fields: this.props.state.fields,
                            values: this.props.state.values,
                            helper: this.helper,
                        })}
                    </form>
                    :
                    <article>
                        <button onClick={() => this.handle.edit()}>{this.props.state.fields.btnName}</button>

                        {React.createElement(this.view, {
                            values: this.props.state.values,
                        })}
                    </article>
                }
            </>
        )
    }
}

export default Article;
