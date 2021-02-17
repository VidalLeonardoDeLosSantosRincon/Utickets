import React, {Fragment} from "react";

export const Header = ()=>{
    return(
        <Fragment>
            <div className="ctr-header">
                <header>
                    header
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