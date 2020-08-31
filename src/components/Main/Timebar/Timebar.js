import React from 'react';
import "./timebar.scss";

class Timebar extends React.Component {
    render() {
        return(
            <section className="main__timebar">
                <p>Thời gian</p>
                <span>15:00</span>
            </section>
        );
    }
}

export default Timebar;