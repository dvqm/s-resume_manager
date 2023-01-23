import React, {Component} from 'react';

// import Skills from './Skills';

class Experiences extends Component {
    constructor(props) {
        super(props);

        this.state = {
            experiences: props.experiences,
        };

        this.handleAdd = this.handleAdd.bind(this);

        this.handleEdit = this.handleEdit.bind(this);

        this.handleDelete = this.handleDelete.bind(this);

        this.handleSave = this.handleSave.bind(this);

        this.handleCancel = this.handleCancel.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }

    handleAdd() {
        const newExperience = {
            editing: true,
            title: '',
            employmentType: 'fullTime',
            companyName: '',
            location: '',
            contractType: 'onSite',
            currentlyWork: false,
            startDate: '',
            endDate: '',
        }

        this.setState(prevState => {
            const newExperiences = [...prevState.experiences, newExperience]
            return {experiences: newExperiences};
        });
    }

    handleEdit(index) {
        let newExperiences = [...this.state.experiences];

        newExperiences[index].editing = true;

        this.setState({
            experiences: newExperiences
        });

        this.originalExperience = {...this.state.experiences[index]};
    }

    handleDelete(index) {
        const newExperiences = this.state.experiences.filter((exp, i) => i !== index);

        this.setState({
            experiences: newExperiences
        });
    }

    handleSave(e, index) {
        e.preventDefault();

        let newExperiences = [...this.state.experiences];

        newExperiences[index].editing = false;

        this.setState({
            experiences: newExperiences
        });

        this.originalExperience = null;
    }

    handleCancel(index) {
        let newExperiences = [...this.state.experiences];

        newExperiences[index] = {...this.originalExperience};

        newExperiences[index].editing = false;

        this.setState({
            experiences: newExperiences
        });
    }

    handleChange(e, index, field) {
        let newExperiences = [...this.state.experiences];

        newExperiences[index][field] = e.target.value;

        this.setState({
            experiences: newExperiences
        });
    }

    handleCheckbox(e, index) {
        const newExperiences = [...this.state.experiences];

        const currentExperience = newExperiences[index];

        currentExperience.currentlyWork = e.target.checked;

        currentExperience.endDate = '';

        this.setState({
            experiences: newExperiences,
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleAdd}>Add Experience</button>
                {
                    this.state.experiences.length > 0 &&
                    this.state.experiences.map((exp, index) => (
                            exp.editing ?
                                <form key={index} onSubmit={(e) => this.handleSave(e, index)}>
                                    <h3>Position: </h3> <input type="text" value={exp.title}
                                                               onChange={(e) => this.handleChange(e, index, 'title')}/>
                                    <h3>Employment type: </h3>
                                    <select value={exp.employmentType}
                                            onChange={(e) => this.handleChange(e, index, 'employmentType')}>
                                        <option value="fullTime">Full-time</option>
                                        <option value="partTime">Part-time</option>
                                        <option value="contract">Contract</option>
                                    </select>
                                    <h3>Company name: </h3> <input type="text" value={exp.companyName}
                                                                   onChange={(e) => this.handleChange(e, index, 'companyName')}/>
                                    <h3>Location: </h3><input type="text" value={exp.location}
                                                              onChange={(e) => this.handleChange(e, index, 'location')}/>
                                    <h3>Type of contract: </h3>
                                    <select value={exp.contractType}
                                            onChange={(e) => this.handleChange(e, index, 'contractType')}>
                                        <option value="onSite">On-site</option>
                                        <option value="hybrid">Hybrid</option>
                                        <option value="remote">Remote</option>
                                    </select>
                                    <label><span>Currently work</span><input type="checkbox" value={exp.currentlyWork}
                                                                             onChange={(e) => this.handleCheckbox(e, index)}/></label>
                                    <h3>Start date: </h3> <input type="date" value={exp.startDate}
                                                                 onChange={(e) => this.handleChange(e, index, 'startDate')}/>
                                    {exp.currentlyWork
                                        ? ''
                                        : <>
                                            <h3>End date: </h3> <input type="date" value={exp.endDate}
                                                                       onChange={(e) => this.handleChange(e, index, 'endDate')}/>
                                        </>
                                    }
                                    <h3>Description: </h3> <textarea value={exp.description} cols="50"
                                                                     rows="15"
                                                                     onChange={(e) => this.handleChange(e, index, 'description')}></textarea>
                                    <button type="submit">Save</button>
                                    <button onClick={() => this.handleCancel(index)}>Cancel</button>
                                </form>
                                :
                                <div key={index}>
                                    <h3>Position: </h3><span>{exp.title}</span>
                                    <h3>Employment type: </h3> <span>{exp.employmentType}</span>
                                    <h3>Company name: </h3> <span>{exp.companyName}</span>
                                    <h3>Location: </h3><span>{exp.location}</span>
                                    <h3>Type of contract: </h3><span>{exp.contractType}</span>
                                    <h3>Start date: </h3> <span>{exp.startDate}</span>
                                    {exp.currentlyWork
                                        ? <span>Currently work</span>
                                        : <>
                                            <h3>End date: </h3> <span>{exp.endDate}</span>
                                        </>
                                    }
                                    <h3>Description: </h3><p>{exp.description}</p>
                                    {/*<Skills skills={exp.skills}/>*/}
                                    <button onClick={() => this.handleEdit(index)}>Edit</button>
                                    <button onClick={() => this.handleDelete(index)}>Delete</button>
                                </div>
                        )
                    )
                }
            </div>
        );
    }
}

export default Experiences;
