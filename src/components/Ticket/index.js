import React, {Fragment} from "react";

export const Ticket = ()=>{
    return(
        <Fragment>
            <div className="ctr-ticket">
                aaaaaaaaaaaaa
            </div>
            <style jsx="true" global="false">
            {`
                .ctr-ticket {
                    height:50px;
                    margin:0;
                    margin-bottom:5px;
                    padding:5px;
                    box-sizing:border-box;
                    background:white;
                    width:100%;
                    border:0.5px solid rgba(0, 0, 0, 0.05);
                    border-radius:5px;
                    box-shadow:2px 2px 5px rgba(0, 0, 0, 0.2);
                    cursor:pointer;
                }
            `}
            </style>
        </Fragment>
    );
};