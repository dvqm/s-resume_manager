import React from "react";

export class EditAbout extends React.Component {
    constructor(props) {
        super(props);

        this.key = props.keyName;

        this.deletePhoto = this.deletePhoto.bind(this);

        this.handleChange = props.helper.onChange;
    }

    deletePhoto(e) {
        e.preventDefault();

        const values = {...this.props.values};

        values.photo = '';

        this.props.helper.setState(this.key, values);
    }

    render() {
        return (
            <>
                <label>
                    <span>{this.props.fields.first}</span>
                    <input type="text"
                           value={this.props.values.first}
                           onChange={(e) => this.handleChange(this.key, 'first', e)}
                    />
                </label>

                <label>
                    <span>{this.props.fields.middle}</span>
                    <input type="text"
                           value={this.props.values.middle}
                           onChange={(e) => this.handleChange(this.key, 'middle', e)}
                    />
                </label>

                <label>
                    <span>{this.props.fields.last}</span>
                    <input type="text"
                           value={this.props.values.last}
                           onChange={(e) => this.handleChange(this.key, 'last', e)}
                    />
                </label>

                <label>
                    <span>{this.props.fields.photo}</span>
                    <input type="file"
                           onChange={(e) => this.handleChange(this.key, 'photo', e)}
                    />

                    {this.props.values.photo &&
                        <img src={URL.createObjectURL(this.props.values.photo)} alt="Applicant"/>}
                </label>

                {this.props.values.photo &&
                    <button onClick={(e) => this.deletePhoto(e)}>Delete Photo</button>
                }

                <label>
                    <span>{this.props.fields.position}</span>
                    <input type="text"
                           value={this.props.values.position}
                           onChange={(e) => this.handleChange(this.key, 'position', e)}
                    />
                </label>

                <label>
                    <span>{this.props.fields.city}</span>
                    <input type="text"
                           value={this.props.values.city}
                           onChange={(e) => this.handleChange(this.key, 'city', e)}
                    />
                </label>

                <label>
                    <span>{this.props.fields.state}</span>
                    <input type="text"
                           value={this.props.values.state}
                           onChange={(e) => this.handleChange(this.key, 'state', e)}
                    />
                </label>

                <label>
                    <span>{this.props.fields.country}</span>
                    <input type="text"
                           value={this.props.values.country}
                           onChange={(e) => this.handleChange(this.key, 'country', e)}
                    />
                </label>

                <label>
                    <span>{this.props.fields.email}</span>
                    <input type="email"
                           value={this.props.values.email}
                           onChange={(e) => this.handleChange(this.key, 'email', e)}
                    />
                </label>
                <label>
                    <span>{this.props.fields.tel}</span>
                    <input type="tel"
                           value={this.props.values.tel}
                           onChange={(e) => this.handleChange(this.key, 'tel', e)}
                    />
                </label>

                <label>
                    <span>{this.props.fields.linkedin}</span>
                    <input type="text"
                           value={this.props.values.linkedin}
                           onChange={(e) => this.handleChange(this.key, 'linkedin', e)}
                    />
                </label>

                <label>
                    <span>{this.props.fields.gitHub}</span>
                    <input type="text"
                           value={this.props.values.gitHub}
                           onChange={(e) => this.handleChange(this.key, 'gitHub', e)}
                    />
                </label>
            </>
        )
    }
}

export class ViewAbout extends React.Component {
    render() {
        return (<>
                <h2>
                    {this.props.values.first && `${this.props.values.first} `}
                    {this.props.values.middle && `${this.props.values.middle} `}
                    {this.props.values.last}
                </h2>

                <h2>{this.props.values.position}</h2>

                {this.props.values.photo &&
                    <img src={URL.createObjectURL(this.props.values.photo)} alt="Applicant"/>
                }

                <address>
                    {this.props.values.city && `${this.props.values.city}, `}
                    {this.props.values.state && `${this.props.values.city}, `}
                    {this.props.values.country}
                </address>

                <div>
                    <a href={`tel:${this.props.values.tel}`}>{this.props.values.tel}</a>
                    <a href={`mailto:${this.props.values.email}`}>{this.props.values.email}</a>
                    <a href={this.props.values.linkedin}>{this.props.values.linkedin}</a>
                    <a href={this.props.values.gitHub}>{this.props.values.gitHub}</a>
                </div>
            </>
        )
    }
}
