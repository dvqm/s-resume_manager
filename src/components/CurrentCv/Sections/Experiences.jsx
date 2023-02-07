import React from "react";

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
                <label>
                    <span>{this.props.fields.companyName}</span>
                    <input type="text"
                           value={this.props.section.companyName}
                           onChange={(e) => this.handleChange(this.key, 'companyName', e, this.id)}
                    />
                </label>

                <label>
                    <span>{this.props.fields.startDate}</span>
                    <input type="date"
                           value={this.props.section.startDate}
                           onChange={(e) => this.handleChange(this.key, 'startDate', e, this.id)}
                    />
                </label>

                <label>
                    <span>{this.props.fields.currentlyWork}</span>
                    <input type="checkbox"
                           checked={this.props.section.currentlyWork}
                           onChange={(e) => this.handleChange(this.key, 'currentlyWork', e, this.id)}
                    />
                </label>

                {!this.props.section.currentlyWork &&
                    <label>
                        <span>{this.props.fields.endDate}</span>
                        <input type="date"
                               value={this.props.section.endDate}
                               onChange={(e) => this.handleChange(this.key, 'endDate', e, this.id)}
                        />
                    </label>
                }

                <label>
                    <span>{this.props.fields.name}</span>
                    <input type="text"
                           value={this.props.section.title}
                           onChange={(e) => this.handleChange(this.key, 'title', e, this.id)}
                    />
                </label>

                <label>
                    <span>{this.props.fields.employmentType}</span>
                    <select value={this.props.section.employmentType}
                            onChange={(e) => this.handleChange(this.key, 'employmentType', e, this.id)}>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                    </select>
                </label>

                <label>
                    <span>{this.props.fields.location}</span>
                    <input type="text"
                           value={this.props.section.location}
                           onChange={(e) => this.handleChange(this.key, 'location', e, this.id)}
                    />
                </label>

                <label>
                    <span>{this.props.fields.contractType}</span>
                    <select value={this.props.section.contractType}
                            onChange={(e) => this.handleChange(this.key, 'contractType', e, this.id)}>
                        <option value="On-site">On-site</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Remote">Remote</option>
                    </select>
                </label>

                <label>
                    <span>{this.props.fields.description}</span>
                    <textarea cols="50" rows="15"
                              value={this.props.section.description}
                              onChange={(e) => this.handleChange(this.key, 'description', e, this.id)}>
                    </textarea>
                </label>
            </>
        )
    }
}

export class ViewExperiences extends React.Component {
    render() {
        return (
            <>
                <h1>{this.props.section.companyName}</h1>
                <h3>Started: {this.props.section.startDate}</h3>
                {this.props.section.currentlyWork
                    ? <h3>Currently work</h3>
                    : <h3>Ended: {this.props.section.endDate}</h3>
                }
                <h2>{this.props.section.title}</h2>

                <span>{this.props.fields.employmentType}</span>
                <span>{this.props.section.employmentType}</span>

                <h3>{this.props.section.location.length > 0 && this.props.fields.location}{this.props.section.location}</h3>

                <span>{this.props.fields.contractType}</span>
                <span>{this.props.section.contractType}</span>

                <span>{this.props.fields.description}</span>
                <pre>{this.props.section.description}</pre>
            </>
        )
    }
}
