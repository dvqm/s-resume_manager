import React from "react";

export class EditSummary extends React.Component {
    constructor(props) {
        super(props);

        this.fields = props.fields;

        this.state = {values: props.values};

        this.upperHandleChange = props.handleChange;

        this.helper = props.helper;

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, field) {
        const value = this.helper.getEventValue(e);

        this.helper.onChange(this, value, e, field, this.upperHandleChange)
    }


    componentDidUpdate(prevProps) {
        if (prevProps.values !== this.props.values) {
            this.setState({values: this.props.values});
        }
    }


    render() {
        return (
            <label>
                <span>{this.fields.summary}</span>
                <textarea cols="30" rows="10"
                          value={this.state.values.summary}
                          onChange={(e) => this.handleChange(e, 'summary')}
                ></textarea>
            </label>
        )
    }
}

export class ViewSummary extends React.Component {
    constructor(props) {
        super(props);

        this.fields = props.fields;

        this.values = props.values;
    }

    render() {
        return (
            <pre>{this.values.summary}</pre>
        )
    }
}
