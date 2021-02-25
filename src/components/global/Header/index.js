import React, {Fragment} from "react";

export const Header = ()=>{
    return(
        <Fragment>
            <div className="ctr-header">
                <header>
                    <h4 className="title"><span>U</span>tickets</h4>
                </header>
            </div>
            <style jsx="true">
            {`
                .ctr-header{
                    padding:0px;
                    box-sizing:border-box;

                    display:flex;
                    justify-content:center;
                    align-items:center;
                }

                .ctr-header header{
                    width:100%;
                    height:60px;
                    background:black;
                    color:white;
                    padding:10px 25px;
                    box-sizing:border-box;

                    display:flex;
                    justify-content:flex-start;
                    align-items:center;
                }

                .ctr-header header .title{
                    color:white;
                    font-size:25px;
                    font-weight:bold;
                }

                .ctr-header header .title span{
                    color:lightseagreen;
                    font-size:30px;
                    font-weight:bold;
                }
            `}
            </style>
        </Fragment>
    );
}