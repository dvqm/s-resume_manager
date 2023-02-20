import React from "react";
import {Box, CardMedia, FormControl, Input, InputLabel, Link, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
                {}
                <FormControl>
                    <InputLabel>{this.props.static.first}</InputLabel>
                    <Input type="text"
                           value={this.props.dynamic.first}
                           onChange={(e) => this.handleChange(this.key, 'first', e)}
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>{this.props.static.middle}</InputLabel>
                    <Input type="text"
                           value={this.props.dynamic.middle}
                           onChange={(e) => this.handleChange(this.key, 'middle', e)}
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>{this.props.static.last}</InputLabel>
                    <Input type="text"
                           value={this.props.dynamic.last}
                           onChange={(e) => this.handleChange(this.key, 'last', e)}
                    />
                </FormControl>

                <FormControl>
                    <input accept="image/*"
                           style={{display: 'none'}}
                           id="contained-button-file"
                           type="file"
                           onChange={(e) => this.handleChange(this.key, 'photo', e)}
                    />

                    <label htmlFor="contained-button-file">
                        <Button variant="outlined" color="secondary" size="small" component="span">
                            Pick a Photo
                        </Button>
                    </label>

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

                </FormControl>

                <FormControl>
                    <InputLabel>{this.props.static.position}</InputLabel>
                    <Input type="text"
                           value={this.props.dynamic.position}
                           onChange={(e) => this.handleChange(this.key, 'position', e)}
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>{this.props.static.city}</InputLabel>
                    <Input type="text"
                           value={this.props.dynamic.city}
                           onChange={(e) => this.handleChange(this.key, 'city', e)}
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>{this.props.static.state}</InputLabel>
                    <Input type="text"
                           value={this.props.dynamic.state}
                           onChange={(e) => this.handleChange(this.key, 'state', e)}
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>{this.props.static.country}</InputLabel>
                    <Input type="text"
                           value={this.props.dynamic.country}
                           onChange={(e) => this.handleChange(this.key, 'country', e)}
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>{this.props.static.email}</InputLabel>
                    <Input type="email"
                           value={this.props.dynamic.email}
                           onChange={(e) => this.handleChange(this.key, 'email', e)}
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>{this.props.static.tel}</InputLabel>
                    <Input type="tel"
                           value={this.props.dynamic.tel}
                           onChange={(e) => this.handleChange(this.key, 'tel', e)}
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>{this.props.static.linkedin}</InputLabel>
                    <Input type="text"
                           value={this.props.dynamic.linkedin}
                           onChange={(e) => this.handleChange(this.key, 'linkedin', e)}
                    />
                </FormControl>

                <FormControl>
                    <InputLabel>{this.props.static.gitHub}</InputLabel>
                    <Input type="text"
                           value={this.props.dynamic.gitHub}
                           onChange={(e) => this.handleChange(this.key, 'gitHub', e)}
                    />
                </FormControl>
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
