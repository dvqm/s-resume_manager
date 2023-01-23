import {Component} from "react";
import Experiences from "./components/Experiences/Experiences";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cvbase: [],
            currentCv: {
                experiences: [],
            },
        };
    }

    render() {
        return (
            <div className="resume">
                <div className="main-area">
                    {/*<Contacts />*/}
                    {/*<About />*/}
                    {/*<Skills />*/}
                    {/*<Projects />*/}
                    <Experiences experiences={this.state.currentCv.experiences}/>
                    {/*<Education />*/}
                    {/*<Additional />*/}
                </div>
            </div>
        );
    }

}

export default App;
