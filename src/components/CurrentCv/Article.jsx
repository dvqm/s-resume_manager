import React from "react";
import Button from "@mui/material/Button";
import {FormGroup} from "@mui/material";

class Article extends React.Component {
    constructor(props) {
        super(props);

        this.edit = props.edit;

        this.view = props.view;

        this.state = {
            keyName: props.keyName,
            editing: false,
            original: props.dynamic,
        }

        this.helper = props.helper;

        this.handle = this.handlers(this);
    }

    handlers(context) {
        return {
            edit() {
                context.setState({
                    ...context.state,
                    original: context.props.dynamic,
                    editing: true
                });
            },

            save(e) {
                e.preventDefault();

                context.setState({editing: false},
                    () => {
                        const values = {...context.props.dynamic};

                        context.helper.setState(context.state.keyName, values);
                    });

            },

            cancel(e) {
                e.preventDefault();

                context.setState({editing: false}, () => {
                    context.helper.setState(context.state.keyName, context.state.original);
                });

            },

            clear(e) {
                e.preventDefault();

                context.setState({
                    ...context.state,
                    original: context.props.dynamic,
                });

                const values = {...context.props.dynamic};

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
                {this.props.static.title &&
                    <>
                        <h2>{this.props.static.title}</h2>
                        <hr/>
                    </>
                }

                {this.state.editing ?
                    <form onSubmit={(e) => this.handle.save(e)}>
                        <FormGroup>
                            <Button variant="outlined" color="secondary" size="small" type="submit">Save</Button>

                            <Button variant="outlined" color="secondary" size="small"
                                    onClick={(e) => this.handle.cancel(e)}>Cancel</Button>

                            <Button variant="outlined" color="secondary" size="small"
                                    onClick={(e) => this.handle.clear(e)}>Clear</Button>

                            {React.createElement(this.edit, {
                                keyName: this.state.keyName,
                                static: this.props.static,
                                dynamic: this.props.dynamic,
                                helper: this.helper,
                            })}
                        </FormGroup>
                    </form>
                    :
                    <article>
                        <Button variant="outlined" color="secondary" size="small"
                                onClick={() => this.handle.edit()}>{this.props.static.btnName}</Button>

                        {React.createElement(this.view, {
                            dynamic: this.props.dynamic,
                        })}
                    </article>
                }
            </>
        )
    }
}

export default Article;
