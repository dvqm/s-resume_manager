import React from "react";

class ContentsCv extends React.Component {
    constructor(props) {
        super(props);

        this.handleChooseCv = this.handleChooseCv.bind(this);
    }

    handleChooseCv(cvName) {
        const cvBase = [...this.props.state.cvBase];

        const chosenCv = cvBase.filter((cv) => cv.cvName === cvName)[0];

        this.props.helper.setState('currentCv', chosenCv);
    }

    render() {
        return (
            <ul>
                {this.props.state.cvBase.map((cv) => (
                    <li key={cv.cvName} onClick={() => this.handleChooseCv(cv.cvName)}>
                        {cv.cvName}
                    </li>
                ))}
            </ul>
        )
    }
}

export default ContentsCv;
