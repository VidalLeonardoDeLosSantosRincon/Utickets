import React, {Fragment} from "react";

export const Ticket = ()=>{
    return(
        <Fragment>
            <div className="ctr-ticket">
                <p>Description</p>
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
                    border:0.5px solid rgba(0, 0, 0, 0.2);
                    border-radius:5px;
                    box-shadow:2px 2px 5px rgba(0, 0, 0, 0.2);
                    cursor:pointer;

                    display:flex;
                    justify-content:center;
                    align-items:center;
                }

                .ctr-ticket:hover{
                    transform:scale(1.02);
                    transition:all 0.1s linear;
                    box-shadow:2px 4px 6px rgba(0, 0, 0, 0.2);
                }

                .ctr-ticket p {
                    font-weight:300px;
                    font-size:12px;
                }
            `}
            </style>
        </Fragment>
    );
};