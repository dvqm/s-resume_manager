import React from "react";

export class EditExpertise extends React.Component {
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
                    <span>{this.props.fields.scope}</span>
                    <input type="text"
                           placeholder={this.props.fields.placeholder}
                           value={this.props.section.scopeTitle}
                           onChange={(e) => this.handleChange(this.key, 'scopeTitle', e, this.id)}
                    />
                </label>


                <label>
                    <span>{this.props.fields.labels}</span>
                    <textarea cols="40" rows="8"
                              placeholder={this.props.fields.tip}
                              value={this.props.section.labels}
                              onChange={(e) => this.handleChange(this.key, 'labels', e, this.id)}
                    ></textarea>
                </label>

            </>
        )
    }
}

export class ViewExpertise extends React.Component {
    labelsParse(labelsStr) {
        return labelsStr.split(', ');
    }

    render() {
        const labels = this.labelsParse(this.props.section.labels);

        return (
            <>
                <h3>{this.props.section.scopeTitle}</h3>
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
