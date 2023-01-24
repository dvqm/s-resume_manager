import React from 'react';

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;

        this.state = {
            title: props.section.title,
            btnName: props.section.btnName,
            list: props.section.list,
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
            employmentType: 'Full-time',
            companyName: '',
            location: '',
            contractType: 'On-site',
            currentlyWork: false,
            startDate: '',
            endDate: '',
            description: '',
        }

        this.setState(prevState => {
            const newExperiences = [...prevState.list, newExperience]
            return {list: newExperiences};
        });
    }

    handleEdit(index) {
        let newExperiences = [...this.state.list];

        newExperiences[index].editing = true;

        this.setState({
            list: newExperiences
        });

        this.originalExperience = {...this.state.list[index]};
    }

    handleDelete(index) {
        const newExperiences = this.state.list.filter((exp, i) => i !== index);

        this.setState({
            list: newExperiences
        });
    }

    handleSave(e, index) {
        e.preventDefault();

        let newExperiences = [...this.state.list];

        newExperiences[index].editing = false;

        this.setState({
            list: newExperiences
        });

        this.originalExperience = null;
    }

    handleCancel(index) {
        let newExperiences = [...this.state.list];

        newExperiences[index] = {...this.originalExperience};

        newExperiences[index].editing = false;

        this.setState({
            list: newExperiences
        });
    }

    handleChange(e, index, field) {
        let newExperiences = [...this.state.list];

        if (!newExperiences[index]) {
            newExperiences[index] = {};
        }

        if (e.target.type === 'checkbox') newExperiences[index][field] = e.target.checked;
        else newExperiences[index][field] = e.target.value;

        this.setState({
            list: newExperiences
        });
    }

    render() {
        return (
            <section>
                <button onClick={this.handleAdd}>{this.state.btnName}</button>
                {
                    this.state.list.length > 0 &&
                    this.state.list.map((section, index) => (
                            section.editing
                                ?
                                React.createElement(this.props.edit, {
                                    section: section,
                                    index: index,
                                    key: index,
                                    handleSave: this.handleSave,
                                    handleCancel: this.handleCancel,
                                    handleChange: this.handleChange,
                                })
                                :
                                React.createElement(this.props.view, {
                                    section: section,
                                    index: index,
                                    key: index,
                                    handleEdit: this.handleEdit,
                                    handleDelete: this.handleDelete,
                                    handleChange: this.handleChange,
                                })
                        )
                    )
                }
            </section>
        );
    }
}

export default Section;
