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
        const {playProps, clickElement} = this.props;
        // component image
        function elementImage(element, row, col) {
            return (
                <div className="box" style={{width: '70px', height: '70px', position: 'relative'}}>
                    <div className="hoverBox" style={{width: '70px', height: '70px', position: 'relative'}} onClick={() => clickElement(element, row, col)}/>
                    {
                        element.statusEnable === false && <img style={{position: 'absolute', left: 0, top: 0}} src={element.image} />
                    }
                </div>
            )

        }
        // component array 16 images
        function componentElement(elements, row) {
            return (
                <div style={{display: "flex"}} className="main__play__items">
                    {elements.map((element, col) => elementImage(element, row, col))}
                </div>
            );
        }

        function displayElements(elements) {
            return elements.map((element, row) => componentElement(element, row))
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
        getMapPikachu: () => dispatch(ActionsPikachu.getMapPikachu()),
        clickElement: (element, row, col) => dispatch(ActionsPikachu.clickElement(element, row, col))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Play);