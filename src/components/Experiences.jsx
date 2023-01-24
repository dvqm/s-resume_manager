import {Component} from "react";

export class EditExperiences extends Component {
    constructor(props) {
        super(props);
        this.section = props.section;

        this.index = props.index

        this.handleSave = props.handleSave;

        this.handleCancel = props.handleCancel;

        this.handleChange = props.handleChange;
    }

    render() {
        return (
            <form key={this.index} onSubmit={(e) => this.handleSave(e, this.index)}>
                <h3>Company name: </h3> <input type="text" value={this.section.companyName}
                                               onChange={(e) => this.handleChange(e, this.index, 'companyName')}/>
                <h3>Start date: </h3> <input type="date" value={this.section.startDate}
                                             onChange={(e) => this.handleChange(e, this.index, 'startDate')}/>
                <label><span>Currently work</span><input type="checkbox" value={this.section.currentlyWork}
                                                         onChange={(e) => this.handleChange(e, this.index, 'currentlyWork')}/></label>
                {this.section.currentlyWork
                    ? ''
                    : <>
                        <h3>End date: </h3> <input type="date" value={this.section.endDate}
                                                   onChange={(e) => this.handleChange(e, this.index, 'endDate')}/>
                    </>
                }
                <h3>Position: </h3> <input type="text" value={this.section.title}
                                           onChange={(e) => this.handleChange(e, this.index, 'title')}/>
                <h3>Employment type: </h3>
                <select value={this.section.employmentType}
                        onChange={(e) => this.handleChange(e, this.index, 'employmentType')}>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                </select>
                <h3>Location: </h3><input type="text" value={this.section.location}
                                          onChange={(e) => this.handleChange(e, this.index, 'location')}/>
                <h3>Type of contract: </h3>
                <select value={this.section.contractType}
                        onChange={(e) => this.handleChange(e, this.index, 'contractType')}>
                    <option value="On-site">On-site</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                </select>
                <h3>Description: </h3> <textarea value={this.section.description} cols="50"
                                                 rows="15"
                                                 onChange={(e) => this.handleChange(e, this.index, 'description')}></textarea>
                <button type="submit">Save</button>
                <button onClick={() => this.handleCancel(this.index)}>Cancel</button>
            </form>
        )
    }
}

export class ViewExperiences extends Component {
    constructor(props) {
        super(props);

        this.section = props.section;

        this.index = props.index

        this.handleEdit = props.handleEdit;

        this.handleDelete = props.handleDelete;

        this.handleChange = props.handleChange;
    }

    render() {
        return (
            <article key={this.index}>
                <h1>{this.section.companyName}</h1>
                <h3>Start date: </h3> <span>{this.section.startDate}</span>
                {this.section.currentlyWork
                    ? <span>Currently work</span>
                    : <>
                        <h3>End date: </h3> <span>{this.section.endDate}</span>
                    </>
                }
                <h2>{this.section.title}</h2>
                <h3>Employment type: </h3> <span>{this.section.employmentType}</span>
                <h3>Location: </h3><span>{this.section.location}</span>
                <h3>Type of contract: </h3><span>{this.section.contractType}</span>
                <h3>Description: </h3><pre>{this.section.description}</pre>
                {/*<Skills skills={this.section.skills}/>*/}
                <button onClick={() => this.handleEdit(this.index)}>Edit</button>
                <button onClick={() => this.handleDelete(this.index)}>Delete</button>
            </article>
        )
    }
}
