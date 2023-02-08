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

        const values = {...this.props.dynamic};

        values.photo = '';

        this.props.helper.setState(this.key, values);
    }

    render() {
        return (
            <>
                <label>
                    <span>{this.props.static.first}</span>
                    <input type="text"
                           value={this.props.dynamic.first}
                           onChange={(e) => this.handleChange(this.key, 'first', e)}
                    />
                </label>

                <label>
                    <span>{this.props.static.middle}</span>
                    <input type="text"
                           value={this.props.dynamic.middle}
                           onChange={(e) => this.handleChange(this.key, 'middle', e)}
                    />
                </label>

                <label>
                    <span>{this.props.static.last}</span>
                    <input type="text"
                           value={this.props.dynamic.last}
                           onChange={(e) => this.handleChange(this.key, 'last', e)}
                    />
                </label>

                <label>
                    <span>{this.props.static.photo}</span>
                    <input type="file"
                           onChange={(e) => this.handleChange(this.key, 'photo', e)}
                    />

                    {this.props.dynamic.photo &&
                        <img src={URL.createObjectURL(this.props.dynamic.photo)} alt="Applicant"/>}
                </label>

                {this.props.dynamic.photo &&
                    <button onClick={(e) => this.deletePhoto(e)}>Delete Photo</button>
                }

                <label>
                    <span>{this.props.static.position}</span>
                    <input type="text"
                           value={this.props.dynamic.position}
                           onChange={(e) => this.handleChange(this.key, 'position', e)}
                    />
                </label>

                <label>
                    <span>{this.props.static.city}</span>
                    <input type="text"
                           value={this.props.dynamic.city}
                           onChange={(e) => this.handleChange(this.key, 'city', e)}
                    />
                </label>

                <label>
                    <span>{this.props.static.state}</span>
                    <input type="text"
                           value={this.props.dynamic.state}
                           onChange={(e) => this.handleChange(this.key, 'state', e)}
                    />
                </label>

                <label>
                    <span>{this.props.static.country}</span>
                    <input type="text"
                           value={this.props.dynamic.country}
                           onChange={(e) => this.handleChange(this.key, 'country', e)}
                    />
                </label>

                <label>
                    <span>{this.props.static.email}</span>
                    <input type="email"
                           value={this.props.dynamic.email}
                           onChange={(e) => this.handleChange(this.key, 'email', e)}
                    />
                </label>
                <label>
                    <span>{this.props.static.tel}</span>
                    <input type="tel"
                           value={this.props.dynamic.tel}
                           onChange={(e) => this.handleChange(this.key, 'tel', e)}
                    />
                </label>

                <label>
                    <span>{this.props.static.linkedin}</span>
                    <input type="text"
                           value={this.props.dynamic.linkedin}
                           onChange={(e) => this.handleChange(this.key, 'linkedin', e)}
                    />
                </label>

                <label>
                    <span>{this.props.static.gitHub}</span>
                    <input type="text"
                           value={this.props.dynamic.gitHub}
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
                    {this.props.dynamic.first && `${this.props.dynamic.first} `}
                    {this.props.dynamic.middle && `${this.props.dynamic.middle} `}
                    {this.props.dynamic.last}
                </h2>

                <h2>{this.props.dynamic.position}</h2>

                {this.props.dynamic.photo &&
                    <img src={URL.createObjectURL(this.props.dynamic.photo)} alt="Applicant"/>
                }

                <address>
                    {this.props.dynamic.city && `${this.props.dynamic.city}, `}
                    {this.props.dynamic.state && `${this.props.dynamic.city}, `}
                    {this.props.dynamic.country}
                </address>

                <div>
                    <a href={`tel:${this.props.dynamic.tel}`}>{this.props.dynamic.tel}</a>
                    <a href={`mailto:${this.props.dynamic.email}`}>{this.props.dynamic.email}</a>
                    <a href={this.props.dynamic.linkedin}>{this.props.dynamic.linkedin}</a>
                    <a href={this.props.dynamic.gitHub}>{this.props.dynamic.gitHub}</a>
                </div>
            </>
        )
    }
}
