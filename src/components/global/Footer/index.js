import React, {Fragment} from "react";

export const Footer = ()=>{
    return(
        <Fragment>
            <div className="ctr-footer">
                <footer>
                    footer
                </footer>
            </div>
            <style jsx="true">
            {`
                .ctr-footer{
                    padding:0px;
                    box-sizing:border-box;

                    display:flex;
                    justify-content:center;
                    align-items:center;
                }

                .ctr-footer footer{
                    width:100%;
                    height:150px;
                    background:gray;
                    color:white;
                    padding:10px 25px;
                    box-sizing:border-box;
                }
            `}
            </style>
        </Fragment>
    );
}