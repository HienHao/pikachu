import React from 'react';
import {connect} from 'react-redux';

import "./timebar.scss";
import { clickReplay } from '../../../redux/actions/PikachuAction';
class Timebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 15,
            seconds: 0
        }
    }
    
    componentDidMount() {
        this.myInterval = setInterval(() => {
            if (this.state.seconds <= 0 ) { 
                this.setState({
                    minutes: this.state.minutes - 1,
                    seconds: 60
                })
             }
            if(this.state.minutes <= 0) {
                this.setState({
                    minutes: 15,
                    seconds: 0
                })
            }
            this.setState({seconds: this.state.seconds - 1})
        }, 1000);
    }

    handleClickReplay = () => {
        this.setState({
            minutes: 15,
            seconds: 0
        })
    }

    render() { 
        const {minutes, seconds, clickReplay} = this.state;
        return(
            <section className="main__timebar" handleClickReplay={clickReplay}>
            <p>Thời gian</p>
            <span>{minutes < 10 ? '0'+minutes : minutes}:{seconds < 10 ? '0'+seconds : seconds}</span>
            </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clickReplay: () => dispatch(clickReplay())
    }
}

export default connect(this, mapDispatchToProps)(Timebar);