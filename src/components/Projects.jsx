import React from "react";

export class EditProjects extends React.Component {
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
                    <span>{this.fields.name}</span>
                    <input type="text"
                           value={this.section.title}
                           onChange={(e) => this.handleChange(e, this.section.id, 'title')}
                    />
                </label>


                <label>
                    <span>{this.fields.currentlyWork}</span>
                    <input type="checkbox"
                           value={this.section.currentlyWork}
                           onChange={(e) => this.handleChange(e, this.section.id, 'currentlyWork')}
                    />
                </label>

                <label>
                    <span>{this.fields.startDate}</span>
                    <input type="date"
                           value={this.section.startDate}
                           onChange={(e) => this.handleChange(e, this.section.id, 'startDate')}
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
                    <span>{this.fields.deployUrl}</span>
                    <input type="text"
                           value={this.section.deployUrl}
                           onChange={(e) => this.handleChange(e, this.section.id, 'deployUrl')}
                    />
                </label>

                <label>
                    <span>{this.fields.sourceUrl}</span>
                    <input type="text"
                           value={this.section.sourceUrl}
                           onChange={(e) => this.handleChange(e, this.section.id, 'sourceUrl')}
                    />
                </label>


                <label>
                    <span>{this.fields.technologies}</span>
                    <textarea cols="40" rows="3"
                              value={this.section.technologies}
                              onChange={(e) => this.handleChange(e, this.section.id, 'technologies')}
                    ></textarea>
                </label>

                <label>
                    <span>{this.fields.description}</span>
                    <textarea cols="40" rows="10"
                              value={this.section.description}
                              onChange={(e) => this.handleChange(e, this.section.id, 'description')}
                    ></textarea>
                </label>

            </>
        )
    }
}

export class ViewProjects extends React.Component {
    constructor(props) {
        super(props);

        this.fields = props.fields;

        this.section = props.section;

        this.handleEdit = props.handleEdit;
    }

    render() {
        return (
            <>
                <h1>{this.section.name}</h1>


                {this.section.startDate || this.section.endDate || this.section.currentlyWork
                    ? <span>
                        <span>{this.section.startDate}</span>
                        <span> - </span>
                        <span>{this.section.currentlyWork
                            ? this.fields.currentlyWork
                            : this.section.endDate}
                        </span>
                    </span>
                    : ''
                }


                {this.section.deployUrl || this.section.sourceUrl
                    ? <span>
                    {this.section.deployUrl
                        ? <a href={this.section.deployUrl}
                             target="_blank"
                             rel="noreferrer noopener">
                            {this.fields.deployUrl}
                        </a>
                        : ''
                    }

                        {this.section.deployUrl && this.section.sourceUrl
                            ? <span> | </span>
                            : ''
                        }

                        {this.section.sourceUrl
                            ? <a href={this.section.sourceUrl}
                                 target="_blank"
                                 rel="noreferrer noopener">
                                {this.fields.sourceUrl}
                            </a>
                            : ''
                        }
                </span>
                    : ''
                }

                <p>{this.section.technologies}</p>

                <pre>{this.section.description}</pre>
            </>
        );
    }
}
