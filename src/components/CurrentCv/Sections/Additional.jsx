import React from "react";
import {FormControl, FormLabel, Input, TextareaAutosize, Typography} from "@mui/material";

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
                <FormControl fullWidth>
                    <FormLabel>{this.props.static.name}</FormLabel>
                    <Input
                        type="text"
                        value={this.props.section.name}
                        onChange={(e) => this.handleChange(this.key, 'name', e, this.id)}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <FormLabel>{this.props.static.description}</FormLabel>
                    <TextareaAutosize
                        minRows={8}
                        value={this.props.section.description}
                        onChange={(e) => this.handleChange(this.key, 'description', e, this.id)}
                    />
                </FormControl>
            </>
        )
    }
}

export class ViewAdditional extends React.Component {
    render() {
        return (
            <>
                <Typography variant="h5">
                    {this.props.section.name}
                </Typography>

                <Typography variant="body1" component="pre">
                    {this.props.section.description}
                </Typography>
            </>
        )
    }
}
