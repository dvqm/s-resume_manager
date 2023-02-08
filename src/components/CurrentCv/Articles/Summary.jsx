import React from "react";

export class EditSummary extends React.Component {
    constructor(props) {
        super(props);

        this.key = props.keyName;

        this.handleChange = props.helper.onChange;

    }


    render() {
        return (
            <label>
                <span>{this.props.static.summary}</span>
                <textarea cols="30" rows="10"
                          value={this.props.dynamic.summary}
                          onChange={(e) => this.handleChange(this.key, 'summary', e)}>
                </textarea>
            </label>
        )
    }
}

export class ViewSummary extends React.Component {
    render() {
        return (
            <pre>{this.props.dynamic.summary}</pre>
        )
    }
}
