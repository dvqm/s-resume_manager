import React from "react";
import {TextField, Typography} from "@mui/material";

export class EditSummary extends React.Component {
    constructor(props) {
        super(props);

        this.key = props.keyName;

        this.handleChange = props.helper.onChange;

    }


    render() {
        return (
            <TextField
                label={this.props.static.summary}
                minRows={10}
                fullWidth
                size="small"
                multiline
                value={this.props.dynamic.summary}
                onChange={(e) => this.handleChange(this.key, 'summary', e)}
            />
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
