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

        this.handleEdit = this.handleEdit.bind(this);

        this.handleSave = this.handleSave.bind(this);

        this.handleCancel = this.handleCancel.bind(this);

        this.handleClear = this.handleClear.bind(this);

        this.handleChange = this.handleChange.bind(this);

    }

    handleEdit() {
        this.original = {...this.state.values};

        this.setState({editing: true});
    }

    handleSave() {
        const {values} = {...this.state};

        this.setState({editing: false, values: values})

        this.helper.setState(this.state.keyName, this.state.values);
    }

    handleCancel() {
        this.setState({editing: false, values: this.original}, () => {
            this.helper.setState(this.state.keyName, this.state.values);

            this.original = null;
        });

    }

    handleClear() {
        const newValues = {...this.state.values};

        Object.keys(newValues).forEach((key) => {
            if (typeof newValues[key] === 'boolean') newValues[key] = false;
            else newValues[key] = '';
        })

        this.setState({values: newValues},
            () => {
                this.helper.setState(this.state.keyName, this.state.values);
            });


    }

    handleChange(e, field) {
        const value = this.helper.getEventValue(e);

        this.helper.onChange(this, value, e, field, this.helper.setState)
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
                        <button onClick={() => this.handleSave()}>Save</button>

                        <button onClick={() => this.handleCancel()}>Cancel</button>

                        <button onClick={() => this.handleClear()}>Clear</button>

                        {React.createElement(this.edit, {
                            fields: this.state.fields,
                            values: this.state.values,
                            handleChange: this.handleChange,
                            helper: this.helper,
                        })}
                    </>
                    :
                    <>
                        <button onClick={() => this.handleEdit()}>{this.state.fields.btnName}</button>

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
