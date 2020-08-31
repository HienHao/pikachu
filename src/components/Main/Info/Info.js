import React from 'react';
import './info.scss';

class Info extends React.Component {
    render() {
        return(
            <section className="main__info">
                <div className="main__info__level">
                    <p>Bàn</p>
                    <span>1</span>
                </div>
                <div className="main__info__blood">
                    <p>Lượt đổi</p>
                    <span>10</span>
                </div>
                <div className="main__info__score">
                    <p>Điểm</p>
                    <span>0</span>
                </div>
            </section>
        );
    }
}

export default Info;