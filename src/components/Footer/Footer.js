import React from 'react';

import { Button } from 'antd';
import "./footer.scss";

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <Button type="primary" shape="round" size="large" className="footer__change-block">Đổi vị trí</Button>
                <Button type="danger" shape="round" size="large" className="footer__replay">Chơi lại</Button>
            </div>
        );
    }
}

export default Footer;