import React from 'react';
import { useLocation } from 'react-router-dom';
import Url from '../components/Url';

function Avi(){

    return(
        <>
            <div className="container">
                <div className="wrap">
                    <div className="boerder-top"></div>
                    <Url/>
                </div>
                <div id="avi-list">
                    <div className="boerder-top"></div>
                    <div id="scroll-box">
                        <div id="list-box">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Avi;