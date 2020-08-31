import React from 'react';
import "./play.scss";

class Play extends React.Component {
    render() {
        const src = ["../assets/images/pikachu-1.png",
            "../assets/images/pikachu-2.png",
            "../assets/images/pikachu-3.png",
            "../assets/images/pikachu-4.png",
            "../assets/images/pikachu-5.png",
            "../assets/images/pikachu-6.png",
            "../assets/images/pikachu-7.png",
            "../assets/images/pikachu-8.png",
            "../assets/images/pikachu-9.png",
            "../assets/images/pikachu-10.png",
            "../assets/images/pikachu-5.png",
            "../assets/images/pikachu-6.png",
            "../assets/images/pikachu-7.png",
            "../assets/images/pikachu-8.png",
        ];
        const element = (src) => {
            return (
                <div>
                    <img src={src}/>
                </div>
            );
        };
        return (
            <div className="main">
                <section id="broad" className="main__play">
                    <div style={{display: "flex"}} className="main__play__items">
                        {
                            src.map(s => element(s))
                        }
                    </div>
                    <div style={{display: "flex"}}>
                        {
                            src.map(s => element(s))
                        }
                    </div>
                    <div style={{display: "flex"}}>
                        {
                            src.map(s => element(s))
                        }
                    </div>
                    <div style={{display: "flex"}}>
                        {
                            src.map(s => element(s))
                        }
                    </div>
                    <div style={{display: "flex"}}>
                        {
                            src.map(s => element(s))
                        }
                    </div>
                    <div style={{display: "flex"}}>
                        {
                            src.map(s => element(s))
                        }
                    </div>
                    <div style={{display: "flex"}}>
                        {
                            src.map(s => element(s))
                        }
                    </div>
                    <div style={{display: "flex"}}>
                        {
                            src.map(s => element(s))
                        }
                    </div>
                    <div style={{display: "flex"}}>
                        {
                            src.map(s => element(s))
                        }
                    </div>
                </section>
            </div>
        );
    }
}

export default Play;