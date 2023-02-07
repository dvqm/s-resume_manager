import React from "react";

export class EditProjects extends React.Component {
    constructor(props) {
        super(props);

        this.fields = props.fields;

        this.key = props.keyName;

        this.id = props.section.id;

        this.handleChange = props.helper.onChange;
    }

    render() {
        return (
            <>
                <label>
                    <span>{this.props.fields.name}</span>
                    <input type="text"
                           value={this.props.section.title}
                           onChange={(e) => this.handleChange(this.key, 'title', e, this.id)}
                    />
                </label>


                <label>
                    <span>{this.props.fields.currentlyWork}</span>
                    <input type="checkbox"
                           checked={this.props.section.currentlyWork}
                           onChange={(e) => this.handleChange(this.key, 'currentlyWork', e, this.id)}
                    />
                </label>

                <label>
                    <span>{this.props.fields.startDate}</span>
                    <input type="date"
                           value={this.props.section.startDate}
                           onChange={(e) => this.handleChange(this.key, 'startDate', e, this.id)}
                    />
                </label>

                {this.props.section.currentlyWork
                    ? ''
                    : <label>
                        <span>{this.props.fields.endDate}</span>
                        <input type="date"
                               value={this.props.section.endDate}
                               onChange={(e) => this.handleChange(this.key, 'endDate', e, this.id)}
                        />
                    </label>
                }

                <label>
                    <span>{this.props.fields.deployUrl}</span>
                    <input type="text"
                           value={this.props.section.deployUrl}
                           onChange={(e) => this.handleChange(this.key, 'deployUrl', e, this.id)}
                    />
                </label>

                <label>
                    <span>{this.props.fields.sourceUrl}</span>
                    <input type="text"
                           value={this.props.section.sourceUrl}
                           onChange={(e) => this.handleChange(this.key, 'sourceUrl', e, this.id)}
                    />
                </label>


                <label>
                    <span>{this.props.fields.technologies}</span>
                    <textarea cols="40" rows="3"
                              value={this.props.section.technologies}
                              onChange={(e) => this.handleChange(this.key, 'technologies', e, this.id)}
                    ></textarea>
                </label>

                <label>
                    <span>{this.props.fields.description}</span>
                    <textarea cols="40" rows="10"
                              value={this.props.section.description}
                              onChange={(e) => this.handleChange(this.key, 'description', e, this.id)}
                    ></textarea>
                </label>

            </>
        )
    }
}

export class ViewProjects extends React.Component {
    render() {
        return (
            <>
                <h1>{this.props.section.title}</h1>

                {this.props.section.startDate
                || this.props.section.endDate
                || this.props.section.currentlyWork
                    ? <span>
                        <span>{this.props.section.startDate}</span>
                        <span> - </span>
                        <span>{this.props.section.currentlyWork
                            ? this.props.fields.currentlyWork
                            : this.props.section.endDate}
                        </span>
                    </span>
                    : ''
                }


                {this.props.section.deployUrl || this.props.section.sourceUrl
                    ? <span>
                    {this.props.section.deployUrl
                        ? <a href={this.props.section.deployUrl}
                             target="_blank"
                             rel="noreferrer noopener">
                            {this.props.fields.deployUrl}
                        </a>
                        : ''
                    }

                        {this.props.section.deployUrl && this.props.section.sourceUrl
                            ? <span> | </span>
                            : ''
                        }

                        {this.props.section.sourceUrl
                            ? <a href={this.props.section.sourceUrl}
                                 target="_blank"
                                 rel="noreferrer noopener">
                                {this.props.fields.sourceUrl}
                            </a>
                            : ''
                        }
                </span>
                    : ''
                }

                <p>{this.props.section.technologies}</p>

                <pre>{this.props.section.description}</pre>
            </>
        );
    }
}
