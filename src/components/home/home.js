import React, {Component} from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import ImagesLoaded from 'react-images-loaded';
import Animation1 from '../assets/img/img_page/animation1.jpg'
import {Image} from "react-bootstrap";
class Home extends Component {
    onWheel = e => {
        e.preventDefault();
        console.log(e)
    }
    render() {
        return (
            <div>
                <ReactFullpage
                    licenseKey = {null}
                    scrollingSpeed = {1000}
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <div className="section">
                                    <div className="bg-holder imgAnimation1" onWheel={this.onWheel}/>
                                    {/*<button onClick={() => fullpageApi.moveSectionDown()}>
                                        Click me to move down
                                    </button>*/}
                                </div>
                                <div className="section">
                                    <p>Section 2</p>
                                </div>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </div>
        );
    }
}

export default Home;