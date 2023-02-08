import React from "react";


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
                <label>
                    <span>{this.props.static.institution}</span>
                    <input type="text"
                           value={this.props.section.institution}
                           onChange={(e) => this.handleChange(this.key, 'institution', e, this.id)}
                    />
                </label>

                <label>
                    <span>{this.props.static.degree}</span>
                    <input type="text"
                           value={this.props.section.degree}
                           onChange={(e) => this.handleChange(this.key, 'degree', e, this.id)}
                    />
                </label>

                <label>
                    <span>{this.props.static.studyField}</span>
                    <input type="text"
                           value={this.props.section.studyField}
                           onChange={(e) => this.handleChange(this.key, 'studyField', e, this.id)}
                    />
                </label>

                <label>
                    <span>{this.props.static.startDate}</span>
                    <input type="date"
                           value={this.props.section.startDate}
                           onChange={(e) => this.handleChange(this.key, 'startDate', e, this.id)}
                    />
                </label>

                <label>
                    <span>{this.props.static.endDate}</span>
                    <input type="date"
                           value={this.props.section.endDate}
                           onChange={(e) => this.handleChange(this.key, 'endDate', e, this.id)}
                    />
                </label>

                <label>
                    <span>{this.props.static.grade}</span>
                    <input type="text"
                           value={this.props.section.grade}
                           onChange={(e) => this.handleChange(this.key, 'grade', e, this.id)}
                    />
                </label>

                <label>
                    <span>{this.props.static.activities}</span>
                    <textarea cols="40" rows="3"
                              value={this.props.section.activities}
                              onChange={(e) => this.handleChange(this.key, 'activities', e, this.id)}
                    ></textarea>
                </label>

                <label>
                    <span>{this.props.static.description}</span>
                    <textarea cols="40" rows="3"
                              value={this.props.section.description}
                              onChange={(e) => this.handleChange(this.key, 'description', e, this.id)}
                    ></textarea>
                </label>
            </>
        )
    }
}

export class ViewEducations extends React.Component {
    render() {
        return (
            <>
                <h1>{this.props.section.institution}</h1>
                <span>
                    <span>{this.props.section.degree}</span>
                    <span> &#183; </span>
                    <span>{this.props.section.studyField}</span>
                </span>

                <span>
                    <span>{this.props.section.startDate}</span>
                    <span> - </span>
                    <span>{this.props.section.endDate}</span>
                </span>

                {this.props.section.grade &&
                    <>
                        <span>{this.props.static.grade}</span>
                        <span>{this.props.section.grade}</span>
                    </>
                }

                {this.props.section.activities &&
                    <>
                        <span>{this.props.static.activities}</span>
                        <pre>{this.props.section.activities}</pre>
                    </>
                }

                {this.props.section.description &&
                    <>
                        <span>Description: </span>
                        <pre>{this.props.section.description}</pre>
                    </>
                }
            </>
        )
    }
}
