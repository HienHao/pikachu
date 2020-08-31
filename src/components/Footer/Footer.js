import React from 'react';

import "./footer.scss";

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <button className="footer__change-block">Đổi vị trí</button>
                <button className="footer__replay">Chơi lại</button>
            </div>
        );
    }
}

export default Footer;