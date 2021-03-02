import React, {Fragment} from "react";
import {Link} from "react-router-dom";


export const SocialNetwork = ()  =>{
    return (
        <Fragment>
            <div className="ctr-social_network">
                <ul className="menu-social_network">
                    <Link to="/linkedin"><li>Linkedin</li></Link>
                    <Link to="/youtube"><li>YouTube</li></Link>
                    <Link to="/github"><li>Github</li></Link>
                </ul>    
            </div>
            <style jsx="true">
                {`
                    .ctr-social_network{
                        padding: 5px;
                        box-sizing: border-box;
                        background: black;
                       
                    }
                    
                    .ctr-social_network .menu-social_network{
                        list-style:none;
                        padding:5px;
                        box-sizing:border-box;
                        background:black;
                        width:350px;

                        display:flex;
                        justify-content:space-around;
                        align-items:center;
                    }

                    .ctr-social_network .menu-social_network li{
                        display: inline-block;
                        padding:5px 10px;
                        box-sizing:border-box;
                        background:black;
                    }
                `}
            </style>
        </Fragment>
    );
}