import React from "react";

export class EditExpertise extends React.Component {
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
                    <span>{this.fields.scope}</span>
                    <input type="text"
                           placeholder={this.fields.placeholder}
                           value={this.section.scopeTitle}
                           onChange={(e) => this.handleChange(e, this.section.id, 'scopeTitle')}
                    />
                </label>


                <label>
                    <span>{this.fields.labels}</span>
                    <textarea cols="40" rows="8"
                              placeholder={this.fields.tip}
                              value={this.section.labels}
                              onChange={(e) => this.handleChange(e, this.section.id, 'labels')}
                    ></textarea>
                </label>

            </>
        )
    }
}

export class ViewExpertise extends React.Component {
    constructor(props) {
        super(props);

        this.nextId = 0;

        this.fields = props.fields;

        this.section = props.section;

        this.handleEdit = props.handleEdit;
    }

    labelsParse(labelsStr) {
        return labelsStr.split(', ');
    }

    render() {
        const labels = this.labelsParse(this.section.labels);

        return (
            <>
                <h3>{this.section.scopeTitle}</h3>
                <ul>
                    {
                        labels.map((label, index) => {
                            return <li key={index}>{label}</li>
                        })
                    }
                </ul>
            </>
        )
    }
}
