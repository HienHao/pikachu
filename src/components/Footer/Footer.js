import React from 'react';
import {connect} from 'react-redux';

import { Button } from 'antd';
import *as ActionsPikachu from '../../redux/actions/PikachuAction';

import "./footer.scss";

class Footer extends React.Component {
    render() {
        const {clickPosition, clickReplay, PikachuReducer} = this.props;
        return(
            <div className="footer">
                <Button 
                    type="primary" 
                    shape="round" 
                    size="large" 
                    className="footer__change-block"
                    onClick={() => clickPosition(PikachuReducer)}
                    >
                        Đổi vị trí
                    </Button>
                <Button 
                    type="danger" 
                    shape="round" 
                    size="large" 
                    className="footer__replay"
                    onClick={clickReplay}
                    >
                        Chơi lại
                    </Button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clickPosition: (matrix) => dispatch(ActionsPikachu.clickPosition(matrix)),
        clickReplay: () => dispatch(ActionsPikachu.clickReplay())
    }
}

function mapStateToProps(state) {
    return {
        PikachuReducer: state.PikachuReducer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);