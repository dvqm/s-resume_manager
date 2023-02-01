import React from "react";

export class EditAdditional extends React.Component {
    constructor(props) {
        super(props);

        this.fields = props.fields;

        this.section = props.section;

        this.handleChange = props.handleChange;
    }

    render() {
        return (
            <>
                <label>
                    <span>{this.fields.name}</span>
                    <input type="text"
                           value={this.section.name}
                           onChange={(e) => this.handleChange(e, this.section.id, 'name')}
                    />
                </label>


                <label>
                    <span>{this.fields.description}</span>
                    <textarea cols="40" rows="8"
                              value={this.section.description}
                              onChange={(e) => this.handleChange(e, this.section.id, 'description')}
                    ></textarea>
                </label>

            </>
        )
    }
}

export class ViewAdditional extends React.Component {
    constructor(props) {
        super(props);

        this.nextId = 0;

        this.fields = props.fields;

        this.section = props.section;

        this.handleEdit = props.handleEdit;
    }

    render() {
        return (
            <>
                <h3>{this.section.name}</h3>
                <pre>{this.section.description}</pre>
            </>
        )
    }
}
