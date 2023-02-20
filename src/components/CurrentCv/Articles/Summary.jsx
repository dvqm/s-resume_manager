import React from "react";
import {FormControl, FormLabel, TextareaAutosize, Typography} from "@material-ui/core";

export class EditSummary extends React.Component {
    constructor(props) {
        super(props);

        this.key = props.keyName;

        this.handleChange = props.helper.onChange;

    }


    render() {
        return (
            <FormControl fullWidth>
                <FormLabel>{this.props.static.summary}</FormLabel>
                <TextareaAutosize
                    minRows={10}
                    value={this.props.dynamic.summary}
                    onChange={(e) => this.handleChange(this.key, 'summary', e)}
                />
            </FormControl>
        )
    }
}

export class ViewSummary extends React.Component {
    render() {
        return (
            <Typography variant="body1" component="pre">
                {this.props.dynamic.summary}
            </Typography>
        )
    }
}
