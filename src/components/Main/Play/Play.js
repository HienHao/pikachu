import React from 'react';
import * as ActionsPikachu from '../../../redux/actions/PikachuAction';
import { connect } from 'react-redux';

import "./play.scss";

class Play extends React.Component {
    componentDidMount() {
        const {getMapPikachu} = this.props;
        getMapPikachu();
    }

    render() {
        const {playProps} = this.props;
        function elementImage(src) {
            return (
                <div>
                    <img src={src}/>
                </div>
            );
        }

        function componentElement(elements) {
            debugger;
            return (
                <div style={{display: "flex"}} className="main__play__items">
                    {elements.map((element) => elementImage(element.image))}
                </div>
            );
        }

        function displayElements(elements) {
            return elements.map(element => componentElement(element))
        }

        return (
            <div className="main">
                <section id="broad" className="main__play">
                    {displayElements(playProps)}
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        playProps: state.PikachuReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMapPikachu: () => dispatch(ActionsPikachu.getMapPikachu())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Play);