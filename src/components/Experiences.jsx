import React from "react";

export class EditExperiences extends React.Component {
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
                    <span>{this.fields.companyName}</span>
                    <input type="text"
                           value={this.section.companyName}
                           onChange={(e) => this.handleChange(e, this.section.id, 'companyName')}
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
                    <span>{this.fields.currentlyWork}</span>
                    <input type="checkbox"
                           value={this.section.currentlyWork}
                           onChange={(e) => this.handleChange(e, this.section.id, 'currentlyWork')}
                    />
                </label>

                {this.section.currentlyWork
                    ? ''
                    : <label>
                        <span>{this.fields.endDate}</span>
                        <input type="date"
                               value={this.section.endDate}
                               onChange={(e) => this.handleChange(e, this.section.id, 'endDate')}
                        />
                    </label>
                }

                <label>
                    <span>{this.fields.name}</span>
                    <input type="text"
                           value={this.section.title}
                           onChange={(e) => this.handleChange(e, this.section.id, 'title')}
                    />
                </label>

                <label>
                    <span>{this.fields.employmentType}</span>
                    <select value={this.section.employmentType}
                            onChange={(e) => this.handleChange(e, this.section.id, 'employmentType')}>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                    </select>
                </label>

                <label>
                    <span>{this.fields.location}</span>
                    <input type="text"
                           value={this.section.location}
                           onChange={(e) => this.handleChange(e, this.section.id, 'location')}
                    />
                </label>

                <label>
                    <span>{this.fields.contractType}</span>
                    <select value={this.section.contractType}
                            onChange={(e) => this.handleChange(e, this.section.id, 'contractType')}>
                        <option value="On-site">On-site</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Remote">Remote</option>
                    </select>
                </label>

                <label>
                    <span>{this.fields.description}</span>
                    <textarea cols="50" rows="15"
                              value={this.section.description}
                              onChange={(e) => this.handleChange(e, this.section.id, 'description')}>
                    </textarea>
                </label>
            </>
        )
    }
}

export class ViewExperiences extends React.Component {
    constructor(props) {
        super(props);

        this.fields = props.fields;

        this.section = props.section;

        this.handleEdit = props.handleEdit;
    }

    render() {
        return (
            <>
                <h1>{this.section.companyName}</h1>
                <h3>Started: {this.section.startDate}</h3>
                {this.section.currentlyWork
                    ? <h3>Currently work</h3>
                    : <h3>Ended: {this.section.endDate}</h3>
                }
                <h2>{this.section.title}</h2>

                <span>{this.fields.employmentType}</span>
                <span>{this.section.employmentType}</span>

                <h3>{this.fields.location}{this.section.location}</h3>

                <span>{this.fields.contractType}</span>
                <span>{this.section.contractType}</span>

                <span>{this.fields.description}</span>
                <pre>{this.section.description}</pre>
            </>
        )
    }
}
