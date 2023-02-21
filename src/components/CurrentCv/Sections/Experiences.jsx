import React from "react";
import {
    Checkbox,
    Typography,
    Box,
    TextField,
    FormControlLabel,
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
                <TextField
                    label={this.props.static.companyName}
                    size="small"
                    type="text"
                    value={this.props.section.companyName}
                    onChange={(e) => this.handleChange(this.key, 'companyName', e, this.id)}
                />

                <TextField
                    label={this.props.static.startDate}
                    size="small"
                    type="date"
                    value={this.props.section.startDate}
                    onChange={(e) => this.handleChange(this.key, 'startDate', e, this.id)}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            size="small"
                            checked={this.props.section.currentlyWork}
                            onChange={(e) => this.handleChange(this.key, 'currentlyWork', e, this.id)}
                        />
                    }
                    label={this.props.static.currentlyWork}
                />

                {!this.props.section.currentlyWork &&
                    <TextField
                        label={this.props.static.endDate}
                        size="small"
                        type="date"
                        value={this.props.section.endDate}
                        onChange={(e) => this.handleChange(this.key, 'endDate', e, this.id)}
                    />
                }

                <TextField
                    label={this.props.static.name}
                    size="small"
                    type="text"
                    value={this.props.section.title}
                    onChange={(e) => this.handleChange(this.key, 'title', e, this.id)}
                />

                <TextField
                    label={this.props.static.employmentType}
                    size="small"
                    select
                    value={this.props.section.employmentType}
                    onChange={(e) => this.handleChange(this.key, 'employmentType', e, this.id)}
                    SelectProps={{
                        native: true,
                    }}
                >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                </TextField>

                <TextField
                    label={this.props.static.location}
                    size="small"
                    type="text"
                    value={this.props.section.location}
                    onChange={(e) => this.handleChange(this.key, 'location', e, this.id)}
                />

                <TextField
                    label={this.props.static.contractType}
                    size="small"
                    select
                    value={this.props.section.contractType}
                    onChange={(e) => this.handleChange(this.key, 'contractType', e, this.id)}
                    SelectProps={{
                        native: true,
                    }}
                >
                    <option value="On-site">On-site</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                </TextField>

                <TextField
                    label={this.props.static.description}
                    size="small"
                    multiline
                    minRows={4}
                    value={this.props.section.description}
                    onChange={(e) => this.handleChange(this.key, 'description', e, this.id)}
                />
            </>)
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
