import React from "react";
import {FormControl, Input, InputLabel, TextareaAutosize, Typography} from "@mui/material";


export class EditEducations extends React.Component {
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
                    <InputLabel>{this.props.static.institution}</InputLabel>
                    <Input type="text"
                           value={this.props.section.institution}
                           onChange={(e) => this.handleChange(this.key, 'institution', e, this.id)}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>{this.props.static.degree}</InputLabel>
                    <Input type="text"
                           value={this.props.section.degree}
                           onChange={(e) => this.handleChange(this.key, 'degree', e, this.id)}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>{this.props.static.studyField}</InputLabel>
                    <Input type="text"
                           value={this.props.section.studyField}
                           onChange={(e) => this.handleChange(this.key, 'studyField', e, this.id)}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>{this.props.static.startDate}</InputLabel>
                    <Input type="date"
                           value={this.props.section.startDate}
                           onChange={(e) => this.handleChange(this.key, 'startDate', e, this.id)}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>{this.props.static.endDate}</InputLabel>
                    <Input type="date"
                           value={this.props.section.endDate}
                           onChange={(e) => this.handleChange(this.key, 'endDate', e, this.id)}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>{this.props.static.grade}</InputLabel>
                    <Input type="text"
                           value={this.props.section.grade}
                           onChange={(e) => this.handleChange(this.key, 'grade', e, this.id)}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>{this.props.static.activities}</InputLabel>
                    <TextareaAutosize minRows="3"
                                      value={this.props.section.activities}
                                      onChange={(e) => this.handleChange(this.key, 'activities', e, this.id)}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>{this.props.static.description}</InputLabel>
                    <TextareaAutosize minRows="3"
                                      value={this.props.section.description}
                                      onChange={(e) => this.handleChange(this.key, 'description', e, this.id)}
                    />
                </FormControl>
            </>
        )
    }
}

export class ViewEducations extends React.Component {
    render() {
        return (
            <>
            <Typography variant="h5">{this.props.section.institution}</Typography>
            <Typography>
                <Typography component="span">{this.props.section.degree}</Typography>
                <Typography component="span"> &#183; </Typography>
                <Typography component="span">{this.props.section.studyField}</Typography>
            </Typography>
            <Typography>
                <Typography component="span">{this.props.section.startDate}</Typography>
                <Typography component="span"> - </Typography>
                <Typography component="span">{this.props.section.endDate}</Typography>
            </Typography>
            {this.props.section.grade &&
                <Typography>
                    <Typography component="span">{this.props.static.grade}</Typography>
                    <Typography component="span">{this.props.section.grade}</Typography>
                </Typography>
            }
            {this.props.section.activities &&
                <>
                        <Typography component="span">{this.props.static.activities}</Typography>
                        <Typography component="pre">{this.props.section.activities}</Typography>
                </>
            }
            {this.props.section.description &&
                <>
                    <Typography variant="body1">Description: </Typography>
                    <Typography variant="body1" component="pre">{this.props.section.description}</Typography>
                </>
            }
            </>
        )
    }
}
