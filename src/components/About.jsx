import React from "react";

export class EditAbout extends React.Component {
    constructor(props) {
        super(props);

        this.fields = props.fields;

        this.state = {
            keyName: props.keyName,
            values: props.values
        };

        this.upperHandleChange = props.handleChange;

        this.helper = props.helper;

        this.handleChange = this.handleChange.bind(this);

        this.deletePhoto = this.deletePhoto.bind(this);
    }

    handleChange(e, field) {
        const value = this.helper.getEventValue(e);

        this.helper.onChange(this, value, e, field, this.upperHandleChange)
    }

    deletePhoto(e) {
        e.preventDefault();

        const values = {...this.state.values}

        values.photo = '';

        this.setState({values: values});

        this.helper.setState(this.state.keyName, this.state.values);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.values !== this.props.values) {
            this.setState({values: this.props.values});
        }
    }

    render() {
        return (
            <>

                <label>
                    <span>{this.fields.first}</span>
                    <input type="text"
                           value={this.state.values.first}
                           onChange={(e) => this.handleChange(e, 'first')}
                    />
                </label>

                <label>
                    <span>{this.fields.middle}</span>
                    <input type="text"
                           value={this.state.values.middle}
                           onChange={(e) => this.handleChange(e, 'middle')}
                    />
                </label>

                <label>
                    <span>{this.fields.last}</span>
                    <input type="text"
                           value={this.state.values.last}
                           onChange={(e) => this.handleChange(e, 'last')}
                    />
                </label>

                <label>
                    <span>{this.fields.photo}</span>
                    <input type="file"
                           onChange={(e) => this.handleChange(e, 'photo')}
                    />

                    {this.state.values.photo &&
                        <img src={URL.createObjectURL(this.state.values.photo)} alt="Applicant"/>}
                </label>

                <button onClick={(e) => this.deletePhoto(e)}>Delete Photo</button>

                <label>
                    <span>{this.fields.position}</span>
                    <input type="text"
                           value={this.state.values.position}
                           onChange={(e) => this.handleChange(e, 'position')}
                    />
                </label>

                <label>
                    <span>{this.fields.city}</span>
                    <input type="text"
                           value={this.state.values.city}
                           onChange={(e) => this.handleChange(e, 'city')}
                    />
                </label>

                <label>
                    <span>{this.fields.state}</span>
                    <input type="text"
                           value={this.state.values.state}
                           onChange={(e) => this.handleChange(e, 'state')}
                    />
                </label>

                <label>
                    <span>{this.fields.country}</span>
                    <input type="text"
                           value={this.state.values.country}
                           onChange={(e) => this.handleChange(e, 'country')}
                    />
                </label>

                <label>
                    <span>{this.fields.email}</span>
                    <input type="email"
                           value={this.state.values.email}
                           onChange={(e) => this.handleChange(e, 'email')}
                    />
                </label>
                <label>
                    <span>{this.fields.tel}</span>
                    <input type="tel"
                           value={this.state.values.tel}
                           onChange={(e) => this.handleChange(e, 'tel')}
                    />
                </label>

                <label>
                    <span>{this.fields.linkedin}</span>
                    <input type="text"
                           value={this.state.values.linkedin}
                           onChange={(e) => this.handleChange(e, 'linkedin')}
                    />
                </label>

                <label>
                    <span>{this.fields.gitHub}</span>
                    <input type="text"
                           value={this.state.values.gitHub}
                           onChange={(e) => this.handleChange(e, 'gitHub')}
                    />
                </label>
            </>
        )
    }
}

export class ViewAbout extends React.Component {
    constructor(props) {
        super(props);

        this.fields = props.fields;

        this.values = props.values;
    }

    render() {
        return (<>
                <h2>
                    {this.values.first && `${this.values.first} `}
                    {this.values.middle && `${this.values.middle} `}
                    {this.values.last}
                </h2>

                <h2>{this.values.position}</h2>

                <address>
                    {this.values.city && `${this.values.city}, `}
                    {this.values.state && `${this.values.city}, `}
                    {this.values.country}
                </address>

                <div>
                    <a href={`tel:${this.values.tel}`}>{this.values.tel}</a>
                    <a href={`mailto:${this.values.email}`}>{this.values.email}</a>
                    <a href={this.values.linkedin}>{this.values.linkedin}</a>
                    <a href={this.values.gitHub}>{this.values.gitHub}</a>
                </div>


            </>
        )
    }
}
