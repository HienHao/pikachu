import React from 'react';

import Play from "./Play/Play";
import Timebar from "./Timebar/Timebar";
import Info from "./Info/Info";

import "./mainSection.scss"

class MainSection extends React.Component {
    render() {
        return(
            <div className="main-section">
                <Info />
                <Play />
                <Timebar />
            </div>
        );
    }
}

export default MainSection;