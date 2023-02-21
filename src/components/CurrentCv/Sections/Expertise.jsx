import React from "react";
import {List, ListItem, TextField, Typography} from "@mui/material";

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
                <TextField
                    type="text"
                    size="small"
                    placeholder={this.props.static.placeholder}
                    value={this.props.section.scopeTitle}
                    onChange={(e) => this.handleChange(this.key, 'scopeTitle', e, this.id)}
                />

                <TextField
                    size="small"
                    multiline
                    rows={8}
                    placeholder={this.props.static.tip}
                    value={this.props.section.labels}
                    onChange={(e) => this.handleChange(this.key, 'labels', e, this.id)}
                />
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
                <Typography variant="h3">{this.props.section.scopeTitle}</Typography>
                <List>
                    {labels.map((label, index) => (
                        <ListItem key={index}>{label}</ListItem>
                    ))}
                </List>
            </>
        )
    }
}
