import React from "react";

class ManageCv extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cvBase: props.state.cvBase,
            currentCv: props.state.currentCv,
            cvName: props.state.currentCv.cvName,
            prevCvName: props.state.currentCv.cvName,
            manage: {
                save: false,
                rewrite: false,
            },
        }


        this.helper = props.helper;

        this.manage = props.manage;

        this.handle = this.handlers(this);

        this.isUnique = this.isUnique.bind(this);
    }

    isUnique() {
        return this.state.cvBase.every((cv) => cv.cvName !== this.state.cvName)
    }

    handlers(context) {
        return {
            change(e, field) {
                context.setState({
                        ...context.state,
                        [field]: e.target.value,
                    }
                )
            },

            save: (field, boolean) => {
                const {currentCv, cvBase, cvName, prevCvName} = {...context.state};

                context.setState({
                    ...context.state,
                    manage: {
                        ...context.state.manage,
                        save: true,
                    }
                });

                context.setState({...context.state, prevCvName: cvName})

                switch (true) {
                    case boolean :
                        // first open
                        context.setState({
                            ...context.state,
                            manage: {
                                ...context.state.manage,
                                save: boolean,
                            }
                        })

                        break;

                    case !context.isUnique() && currentCv.cvName === cvName :
                        // update existed

                        context.setState((prevState) => {
                            return {
                                ...context.state,
                                cvBase: [...prevState.cvBase.map((cv) => {
                                    if (cv.cvName === cvName) {
                                        return currentCv;
                                    } else return cv;
                                })
                                ],
                                manage: {
                                    ...context.state.manage,
                                    save: boolean,
                                }
                            }
                        }, () => context.manage.save('cvBase', cvBase))

                        break;

                    case currentCv.cvName.length === 0 && cvName.length === 0 :
                        //name can not be empty

                        break;

                    case !context.isUnique() && prevCvName !== cvName :
                        //this name already exists

                        context.setState({
                            ...context.state,
                            manage: {
                                ...context.state.manage,
                                save: true,
                                rewrite: true,
                            }
                        })

                        break;

                    case context.isUnique() && cvName.length > 0 && currentCv.cvName !== cvName :
                        //save as new

                        const updatedCvBase = [...context.state.cvBase];

                        // const {currentCv} = {...context.state};

                        currentCv.cvName = cvName;

                        updatedCvBase.push(currentCv);

                        context.setState({
                            ...context.state, cvBase: updatedCvBase,
                            currentCv: currentCv,
                            manage: {
                                ...context.state.manage, save: false,
                            }
                        }, () => context.manage.save('cvBase', context.state.cvBase))
                        break;

                    default :
                        // something went wrong


                        break;
                }

            },

            toDrive: () => {
            },

            rename: () => {
            },

            toPdf: () => {
            },

            cancel: () => {
            },

            delete: () => {
            },

            duplicate: () => {

            },
        }
    }

    render() {
        return (
            <>
                {this.state.manage.save
                    ? <p>
                        <label>
                            <span>Enter the Resume Name</span>
                            <input type="text" value={this.state.cvName}
                                   onChange={(e) => this.handle.change(e, 'cvName')}
                            />
                        </label>
                        <button onClick={() => this.handle.save('cvName', false)}>Save</button>
                        <button
                            onClick={() => this.setState({
                                ...this.state,
                                cvName: this.state.currentCv.cvName,
                                manage: {...this.state.manage, save: false}
                            })
                            }>Cancel
                        </button>
                    </p>
                    : <button onClick={() => this.handle.save('cvName', true)}>Save</button>
                }
                <button onClick={this.handle.toDrive}>Save to Drive</button>
                <button onClick={this.handle.toPdf}>Save to pdf</button>
                <button onClick={this.handle.rename}>Rename</button>
                <button onClick={this.handle.cancel}>Cancel</button>
                <button onClick={this.handle.delete}>Delete</button>
                <button onClick={this.handle.duplicate}>Duplicate</button>
            </>
        )
    }
}

export default ManageCv;
