import React from 'react';
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";

class ManageCv extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prevName: props.state.currentCv.cvName,
            save: false,
            warning: null,
        };

        this.helper = props.helper;

        this.handle = this.handlers(this);

        this.isUnique = this.isUnique.bind(this);
    }

    isUnique() {
        return this.props.state.cvBase.every(
            (cv) => cv.cvName !== this.props.state.currentCv.cvName,
        );
    }


    handlers(context) {
        return {
            new() {
                const newCv = {...context.props.state.static.template};

                context.helper.setState('currentCv', newCv);
            },

            change(e, field) {
                context.props.helper.setState(field, e.target.value);
            },

            cancelBtn: (operation) => {
                this.setState(
                    {
                        ...this.state,
                        [operation]: false,
                    },
                    () => this.helper.setState('cvName', this.state.prevName),
                );
            },

            save: (field, boolean) => {
                const currentCv = {...context.props.state.currentCv};

                const cvBase = [...context.props.state.cvBase];

                const {cvName} = currentCv;

                const {prevName} = context.state;

                let updatedCvBase;

                context.setState({
                    ...context.state,
                    save: true,
                });

                switch (true) {
                    // first open
                    case boolean:
                        context.setState({
                            ...context.state,
                            prevName: cvName,
                            save: boolean,
                        });

                        break;

                    // update existed
                    case !context.isUnique() && prevName === cvName:
                        alert('Updated existed');

                        updatedCvBase = cvBase.map((cv) => {
                            if (cv.cvName === cvName) {
                                return currentCv;
                            }

                            return cv;
                        });

                        context.setState({
                            ...context.state,
                            save: boolean,
                        });

                        context.props.helper.setState('cvBase', updatedCvBase);
                        break;

                    //name can not be empty
                    case currentCv.cvName.length === 0 && cvName.length === 0:
                        alert('Field can not be empty');

                        break;

                    //this name already exists
                    case !context.isUnique() && cvName !== prevName:
                        alert('this name already exist');

                        context.setState({
                            ...context.state,
                            save: true,
                        });

                        break;

                    //save as new
                    case context.isUnique() &&
                    cvName.length > 0 &&
                    currentCv.cvName !== prevName:
                        alert('Saved as new');

                        updatedCvBase = [...context.props.state.cvBase];

                        updatedCvBase.push(currentCv);

                        context.setState(
                            {
                                ...context.state,
                                save: false,
                            },
                            () => {
                                context.props.helper.setState('cvBase', updatedCvBase);
                            },
                        );

                        break;

                    // something went wrong
                    default:
                        console.warn('Ooops');

                        break;
                }
            },

            rename: () => {
                const {cvName} = {...this.props.state.currentCv};

                switch (true) {
                    // Can be renamed
                    case context.isUnique() && context.state.prevName !== cvName:
                        const cvBase = [...context.props.state.cvBase];

                        const index = cvBase.findIndex(
                            (cv) => cv.cvName === context.state.prevName,
                        );

                        cvBase[index].cvName = cvName;

                        context.setState({...context.state, save: false});

                        context.helper.setState('cvBase', cvBase);

                        break;

                    // can't be renamed, new name exists in the array.
                    case !context.isUnique() && context.state.prevName !== cvName:
                        alert(
                            'There is a resume with such name. Please, choose other name.',
                        );

                        break;

                    // If nothing to change (default) context.state.prevName === cvName :
                    default:
                        context.setState({...context.state, save: true});

                        break;
                }
            },

            toPdf: () => {
            },

            cancel: () => {
                const cvBase = [...context.props.state.cvBase];

                const {cvName} = {...context.props.state.currentCv};

                const template = {...context.props.state.static.template};

                const index = cvBase.findIndex((cv) => cv.cvName === cvName);

                if (index === -1) context.props.helper.setState('currentCv', template);
                else context.props.helper.setState('currentCv', cvBase[index]);
            },

            delete: () => {
                const cvBase = [...context.props.state.cvBase];

                const cvName = context.props.state.currentCv.cvName;

                const {template} = context.props.state.static;

                const updatedCvBase = cvBase.filter((cv) => cv.cvName !== cvName);

                cvBase.length === updatedCvBase.length
                && cvBase.every((element, index) => element === updatedCvBase[index]);

                context.helper.setState('cvBase', updatedCvBase, 'currentCv', template);
            },

            duplicate: () => {
                const currentCv = {...context.props.state.currentCv};

                let cvBase = [...context.props.state.cvBase];

                let cvName = currentCv.cvName;

                const isUnique = (cvName) => !cvBase.some((cv) => cv.cvName === cvName);

                const makeDuplicate = (cvName) => {
                    if (isUnique(cvName)) {
                        currentCv.cvName = cvName;

                        cvBase.push(currentCv);

                        context.helper.setState('cvName', currentCv.cvName, 'cvBase', cvBase);
                    } else {
                        makeDuplicate(`${cvName} _copy`);
                    }
                }

                makeDuplicate(cvName);
            },
        }
    }

    render() {
        return (
            <>
                {this.state.save ? (
                    <EditName state={this.props.state} handle={this.handle}/>
                ) : (
                    <Button variant="contained" color="primary" size="small"
                            onClick={() => this.handle.save('cvName', true)}>
                        Save / Rename
                    </Button>
                )}
                <Button variant="contained" color="primary" size="small" onClick={this.handle.cancel}>Cancel</Button>
                {
                    !this.props.state.secondary.new
                    && <>
                        <Button variant="outlined" color="primary" size="small" onClick={this.handle.new}>New</Button>
                        <Button variant="outlined" color="primary" size="small" onClick={this.handle.toPdf}>Save to
                            pdf</Button>
                        <Button variant="outlined" color="primary" size="small" onClick={this.handle.delete}>Delete</Button>
                        <Button variant="outlined" color="primary" size="small"
                                onClick={this.handle.duplicate}>Duplicate</Button>
                    </>
                }
            </>
        );
    }
}

class EditName extends React.Component {
    change(e, field) {
        this.props.handle.change(e, field);
    }

    save(field, boolean) {
        this.props.handle.save(field, boolean);
    }

    rename() {
        this.props.handle.rename();
    }

    cancel(operation) {
        this.props.handle.cancelBtn(operation);
    }

    render() {
        return (
            <div>
                <TextField color="primary" size="small"
                           label="Enter The Name"
                           type='text'
                           value={this.props.state.currentCv.cvName}
                           onChange={(e) => this.change(e, 'cvName')}
                />

                <Button variant="contained" color="primary" size="small"
                        onClick={() => this.save('cvName', false)}>Save</Button>

                {!this.props.state.secondary.new
                    && <Button variant="contained" color="primary" size="small"
                               onClick={() => this.rename()}>Rename</Button>}

                <Button variant="contained" color="primary" size="small"
                        onClick={() => this.cancel('save')}>Cancel</Button>
            </div>
        );
    }
}

export default ManageCv;
