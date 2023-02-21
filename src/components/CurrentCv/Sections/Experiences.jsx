import React from "react";
import {
    FormControl,
    InputLabel,
    Input,
    Checkbox,
    Select,
    MenuItem,
    TextareaAutosize,
    Typography, Box
} from '@mui/material';

export class EditExperiences extends React.Component {
    constructor(props) {
        super(props);

        this.key = props.keyName;

        this.id = props.section.id;

        this.handleChange = props.helper.onChange;
    }

    render() {
        return (
            <>
                <FormControl>
                    <InputLabel>{this.props.static.companyName}</InputLabel>
                    <Input type="text"
                           value={this.props.section.companyName}
                           onChange={(e) => this.handleChange(this.key, 'companyName', e, this.id)}
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>{this.props.static.startDate}</InputLabel>
                    <Input type="date"
                           value={this.props.section.startDate}
                           onChange={(e) => this.handleChange(this.key, 'startDate', e, this.id)}
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>{this.props.static.currentlyWork}</InputLabel>
                    <Checkbox checked={this.props.section.currentlyWork}
                              onChange={(e) => this.handleChange(this.key, 'currentlyWork', e, this.id)}
                    />
                </FormControl>

                {!this.props.section.currentlyWork &&
                    <FormControl>
                        <InputLabel>{this.props.static.endDate}</InputLabel>
                        <Input type="date"
                               value={this.props.section.endDate}
                               onChange={(e) => this.handleChange(this.key, 'endDate', e, this.id)}
                        />
                    </FormControl>
                }

                <FormControl>
                    <InputLabel>{this.props.static.name}</InputLabel>
                    <Input type="text"
                           value={this.props.section.title}
                           onChange={(e) => this.handleChange(this.key, 'title', e, this.id)}
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>{this.props.static.employmentType}</InputLabel>
                    <Select value={this.props.section.employmentType}
                            onChange={(e) => this.handleChange(this.key, 'employmentType', e, this.id)}>
                        <MenuItem value="Full-time">Full-time</MenuItem>
                        <MenuItem value="Part-time">Part-time</MenuItem>
                        <MenuItem value="Contract">Contract</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel>{this.props.static.location}</InputLabel>
                    <Input type="text"
                           value={this.props.section.location}
                           onChange={(e) => this.handleChange(this.key, 'location', e, this.id)}
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>{this.props.static.contractType}</InputLabel>
                    <Select value={this.props.section.contractType}
                            onChange={(e) => this.handleChange(this.key, 'contractType', e, this.id)}>
                        <MenuItem value="On-site">On-site</MenuItem>
                        <MenuItem value="Hybrid">Hybrid</MenuItem>
                        <MenuItem value="Remote">Remote</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel>{this.props.static.description}</InputLabel>
                    <TextareaAutosize minRows={4}
                                      value={this.props.section.description}
                                      onChange={(e) => this.handleChange(this.key, 'description', e, this.id)}>
                    </TextareaAutosize>
                </FormControl>
            </>
        )
    }
}

export class ViewExperiences extends React.Component {
    render() {
        return (
            <>
                <Typography variant="h5">{this.props.section.companyName}</Typography>
                <Typography variant="h6">Started: {this.props.section.startDate}</Typography>
                {this.props.section.currentlyWork
                    ? <Typography variant="h6">Currently work</Typography>
                    : <Typography variant="h6">Ended: {this.props.section.endDate}</Typography>
                }
                <Typography variant="h5">{this.props.section.title}</Typography>

                <Box>
                    <Typography component="span">{this.props.static.employmentType}</Typography>
                    <Typography component="span">{this.props.section.employmentType}</Typography>
                </Box>

                {this.props.section.location.length > 0 &&
                    <Typography variant="h5">{this.props.static.location} {this.props.section.location}</Typography>
                }

                <Box>
                    <Typography component="span">{this.props.static.contractType}</Typography>
                    <Typography component="span">{this.props.section.contractType}</Typography>
                </Box>

                <Box>
                    <Typography component="span">{this.props.static.description}</Typography>
                    <Typography component="pre">{this.props.section.description}</Typography>
                </Box>
            </>
        )
    }
}
