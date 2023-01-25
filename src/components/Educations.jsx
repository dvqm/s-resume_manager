import React from "react";


export class EditEducations extends React.Component {
    constructor(props) {
        super(props);

        this.fields = props.fields;

        this.section = props.section;

        this.handleChange = props.handleChange;
    }

    render() {
        return (
            <>
                <label>
                    <span>{this.fields.institution}</span>
                    <input type="text"
                           value={this.section.institution}
                           onChange={(e) => this.handleChange(e, this.section.id, 'institution')}
                    />
                </label>

                <label>
                    <span>{this.fields.degree}</span>
                    <input type="text"
                           value={this.section.degree}
                           onChange={(e) => this.handleChange(e, this.section.id, 'degree')}
                    />
                </label>

                <label>
                    <span>{this.fields.studyField}</span>
                    <input type="text"
                           value={this.section.studyField}
                           onChange={(e) => this.handleChange(e, this.section.id, 'studyField')}
                    />
                </label>

                <label>
                    <span>{this.fields.startDate}</span>
                    <input type="date"
                           value={this.section.startDate}
                           onChange={(e) => this.handleChange(e, this.section.id, 'startDate')}
                    />
                </label>

                <label>
                    <span>{this.fields.endDate}</span>
                    <input type="date"
                           value={this.section.endDate}
                           onChange={(e) => this.handleChange(e, this.section.id, 'endDate')}
                    />
                </label>

                <label>
                    <span>{this.fields.grade}</span>
                    <input type="text"
                           value={this.section.grade}
                           onChange={(e) => this.handleChange(e, this.section.id, 'grade')}
                    />
                </label>

                <label>
                    <span>{this.fields.activities}</span>
                    <textarea cols="40" rows="3"
                              value={this.section.activities}
                              onChange={(e) => this.handleChange(e, this.section.id, 'activities')}
                    ></textarea>
                </label>

                <label>
                    <span>{this.fields.description}</span>
                    <textarea cols="40" rows="3"
                              value={this.section.description}
                              onChange={(e) => this.handleChange(e, this.section.id, 'description')}
                    ></textarea>
                </label>
            </>
        )
    }
}

export class ViewEducations extends React.Component {
    constructor(props) {
        super(props);

        this.fields = props.fields;

        this.section = props.section;

        this.handleEdit = props.handleEdit;
    }

    render() {
        return (
            <>
                <h1>{this.section.institution}</h1>
                <span>
                    <span>{this.section.degree}</span>
                    <span> &#183; </span>
                    <span>{this.section.studyField}</span>
                </span>

                <span>
                    <span>{this.section.startDate}</span>
                    <span> - </span>
                    <span>{this.section.endDate}</span>
                </span>

                {this.section.grade ?
                    <>
                        <span>{this.fields.grade}</span>
                        <span>{this.section.grade}</span>
                    </>
                    : ''
                }

                {this.section.activities ?
                    <>
                        <span>{this.fields.activities}</span>
                        <pre>{this.section.activities}</pre>
                    </>
                    : ''
                }

                {this.section.description ?
                    <>
                        <span>Description: </span>
                        <pre>{this.section.description}</pre>
                    </>
                    : ''
                }
            </>
        )
    }
}
