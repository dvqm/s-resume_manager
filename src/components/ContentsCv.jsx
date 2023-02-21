import React from "react";
import {Drawer, IconButton, List, ListItemButton} from "@mui/material";
import { Menu as MenuIcon } from '@mui/icons-material';

class ContentsCv extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerOpen: false
        };

        this.handleChooseCv = this.handleChooseCv.bind(this);
    }

    toggleDrawer = () => {
        this.setState((prevState) => ({
            isDrawerOpen: !prevState.isDrawerOpen
        }));
    }

    handleChooseCv(cvName) {
        const cvBase = [...this.props.state.cvBase];

        const chosenCv = cvBase.filter((cv) => cv.cvName === cvName)[0];

        this.props.helper.setState('currentCv', chosenCv);
    }

    render() {
        return (
            <div>
                <IconButton onClick={this.toggleDrawer}>
                    <MenuIcon />
                </IconButton>
                <Drawer anchor="top" open={this.state.isDrawerOpen} onClose={this.toggleDrawer}>
                    <List>
                        {this.props.state.cvBase.map((cv) => (
                            <ListItemButton key={cv.cvName} onClick={() => this.handleChooseCv(cv.cvName)}>
                                {cv.cvName}
                            </ListItemButton>
                        ))}
                    </List>
                </Drawer>
            </div>


        )
    }
}

export default ContentsCv;
