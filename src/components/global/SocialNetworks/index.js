import React, {Fragment} from "react";
import {Link} from "react-router-dom";

//assets
import youtubeIcon from "../../../assets/icons/youtube.png";
import linkedinIcon from "../../../assets/icons/linkedin.png";
import githubIcon from "../../../assets/icons/github.png";

export const SocialNetwork = ()  =>{
    return (
        <Fragment>
            <div className="ctr-social_network">
                <ul className="menu-social_network">
                    <Link to="/linkedin"><li><img src={linkedinIcon} alt="icon_linkedin" width="25"/></li></Link>
                    <Link to="/youtube"><li><img src={youtubeIcon} alt="icon_youtube" width="30"/></li></Link>
                    <Link to="/github"><li><img src={githubIcon} alt="icon_github" width="30"/></li></Link>
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
                        justify-content:flex-end;
                        align-items:center;
                    }

                    .ctr-social_network .menu-social_network li{
                        display: inline-block;
                        padding:5px 10px;
                        box-sizing:border-box;
                        background:black;
                        margin:0 5px;
                    }
                `}
            </style>
        </Fragment>
    );
}