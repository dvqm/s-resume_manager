import React from "react";
import {Box, CardMedia, IconButton, Link, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {ReactComponent as CameraIcon} from '../../../assets/CameraIcon.svg';

export class EditAbout extends React.Component {
    constructor(props) {
        super(props);

        this.key = props.keyName;

        this.deletePhoto = this.deletePhoto.bind(this);

        this.handleChange = props.helper.onChange;
    }

    deletePhoto(e) {
        e.preventDefault();

        const values = {...this.props.dynamic};

        values.photo = '';

        this.props.helper.setState(this.key, values);
    }

    render() {
        return (
            <>
                <TextField label={this.props.static.middle}
                           value={this.props.dynamic.middle}
                           onChange={(e) => this.handleChange(this.key, 'middle', e)}
                />

                <TextField label={this.props.static.last}
                           value={this.props.dynamic.last}
                           onChange={(e) => this.handleChange(this.key, 'last', e)}
                />

                {!this.props.dynamic.photo &&
                    <>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden
                                   onChange={(e) => this.handleChange(this.key, 'photo', e)}
                                   accept="image/*"
                                   type="file"/>
                            <CameraIcon/>
                        </IconButton>
                    </>
                }

                {this.props.dynamic.photo &&
                    <>
                        <CardMedia
                            component="img"
                            image={URL.createObjectURL(this.props.dynamic.photo)}
                            alt="Applicant"
                        />

                        <Button variant="outlined" color="secondary" size="small"
                                onClick={(e) => this.deletePhoto(e)}>Delete
                            Photo</Button>
                    </>
                }


                <TextField label={this.props.static.position}
                           size="small"
                           value={this.props.dynamic.position}
                           onChange={(e) => this.handleChange(this.key, 'position', e)}
                />

                <TextField label={this.props.static.city}
                           size="small"
                           value={this.props.dynamic.city}
                           onChange={(e) => this.handleChange(this.key, 'city', e)}
                />

                <TextField label={this.props.static.state}
                           size="small"
                           value={this.props.dynamic.state}
                           onChange={(e) => this.handleChange(this.key, 'state', e)}
                />

                <TextField label={this.props.static.country}
                           size="small"
                           value={this.props.dynamic.country}
                           onChange={(e) => this.handleChange(this.key, 'country', e)}
                />

                <TextField label={this.props.static.email}
                           size="small"
                           type="email"
                           value={this.props.dynamic.email}
                           onChange={(e) => this.handleChange(this.key, 'email', e)}
                />

                <TextField label={this.props.static.tel}
                           size="small"
                           type="tel"
                           value={this.props.dynamic.tel}
                           onChange={(e) => this.handleChange(this.key, 'tel', e)}
                />

                <TextField label={this.props.static.linkedin}
                           size="small"
                           value={this.props.dynamic.linkedin}
                           onChange={(e) => this.handleChange(this.key, 'linkedin', e)}
                />

                <TextField label={this.props.static.gitHub}
                           size="small"
                           value={this.props.dynamic.gitHub}
                           onChange={(e) => this.handleChange(this.key, 'gitHub', e)}
                />
            </>
        )
    }
}

export class ViewAbout extends React.Component {
    render() {
        return (
            <>
                <Typography variant="h5">
                    {this.props.dynamic.first && `${this.props.dynamic.first} `}
                    {this.props.dynamic.middle && `${this.props.dynamic.middle} `}
                    {this.props.dynamic.last}
                </Typography>

                <Typography variant="h5">{this.props.dynamic.position}</Typography>

                {this.props.dynamic.photo && (
                    <CardMedia
                        component="img"
                        image={URL.createObjectURL(this.props.dynamic.photo)}
                        alt="Applicant"
                    />
                )}

                <address>
                    {this.props.dynamic.city && `${this.props.dynamic.city}, `}
                    {this.props.dynamic.state && `${this.props.dynamic.state}, `}
                    {this.props.dynamic.country}
                </address>

                <Box display="flex" justifyContent="space-between">
                    <Link href={`tel:${this.props.dynamic.tel}`}>{this.props.dynamic.tel}</Link>
                    <Link href={`mailto:${this.props.dynamic.email}`}>{this.props.dynamic.email}</Link>
                    <Link href={this.props.dynamic.linkedin}>{this.props.dynamic.linkedin}</Link>
                    <Link href={this.props.dynamic.gitHub}>{this.props.dynamic.gitHub}</Link>
                </Box>
            </>
        )
    }
}
