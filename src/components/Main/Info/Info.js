import React from 'react';
import {connect} from 'react-redux';

import './info.scss';

class Info extends React.Component {
    render() {
        const {Info} = this.props;
        return(
            <section className="main__info">
                <div className="main__info__level">
                    <p>Bàn</p>
                    <span>{Info.level}</span>
                </div>
                <div className="main__info__blood">
                    <p>Lượt đổi</p>
                    <span>{Info.position}</span>
                </div>
                <div className="main__info__score">
                    <p>Điểm</p>
                    <span>{Info.score}</span>
                </div>
            </section>
        );
    }
}

function mapSateToProps(state) {
    return {
        Info: state.InfoReducer
    }
}

export default connect(mapSateToProps,  this)(Info);