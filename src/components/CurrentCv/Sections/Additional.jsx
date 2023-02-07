import React from "react";

export class EditAdditional extends React.Component {
    constructor(props) {
        super(props);

        this.key = props.keyName;

        this.id = props.section.id;

        this.handleChange = props.helper.onChange;
    }

    render() {
        return (
            <>
                <label>
                    <span>{this.props.fields.name}</span>
                    <input type="text"
                           value={this.props.section.name}
                           onChange={(e) => this.handleChange(this.key, 'name', e, this.id)}
                    />
                </label>


                <label>
                    <span>{this.props.fields.description}</span>
                    <textarea cols="40" rows="8"
                              value={this.props.section.description}
                              onChange={(e) => this.handleChange(this.key, 'description', e, this.id)}
                    ></textarea>
                </label>

            </>
        )
    }
}

export class ViewAdditional extends React.Component {
    render() {
        return (
            <>
                <h3>{this.props.section.name}</h3>
                <pre>{this.props.section.description}</pre>
            </>
        )
    }
}
