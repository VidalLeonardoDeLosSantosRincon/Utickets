import React, {Fragment} from "react";


import {SocialNetwork} from "../SocialNetworks"
export const Footer = ()=>{
    return(
        <Fragment>
            <div className="ctr-footer">
                <footer>
                    <span style={{width:"350px"}}></span>
                    <h4 className="title"><span>Vidal De Los</span> Santos 2021</h4>
                    <SocialNetwork/>
                </footer>
            </div>
            <style jsx="true">
            {`
                .ctr-footer{
                    padding:0px;
                    box-sizing:border-box;

                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                }

                .ctr-footer footer{
                    width:100%;
                    height:150px;
                    background:black;
                    color:white;
                    padding:10px 25px;
                    box-sizing:border-box;

                    display:flex;
                    justify-content:space-between;
                    align-items:flex-start;
                    
                }

                .ctr-footer footer .title{
                    color:white;
                    font-size:18px;
                    font-weight:bold;
                }

                .ctr-footer footer .title span{
                    color:lightseagreen;
                    font-size:18px;
                    font-weight:bold;
                }
            `}
            </style>
        </Fragment>
    );
}