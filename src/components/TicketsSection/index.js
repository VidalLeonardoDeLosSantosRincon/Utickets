import React, {Fragment} from "react";

//components
import {TicketBox} from "../TicketBox";
import {Ticket} from "../Ticket"

export const TicketsSection = () =>{

   
    return (
        <Fragment>

            <div className="ctr-tickets">
                <div className="ctr-tickets_section">
                    <TicketBox body_content={
                        <Fragment>
                            <Ticket/>
                            <Ticket/>
                            <Ticket/>
                        </Fragment>
                    }/>
                    <TicketBox/>
                    <TicketBox/>
                    <TicketBox/>
                    <TicketBox/>
                </div>
            </div>
            <style jsx="true" global="false">
            {`

                .ctr-tickets{
                    margin-top:20px;
                    padding:5px;
                    box-sizing:border-box;
                    background:white;
                    height:100vh;
                }
                .ctr-tickets_section{
                    height:auto;
                    width:100%;
                    padding:5px;
                    box-sizing:border-box;
                    background:rgba(0,0,0,0.1);
                    margin:0 auto;
                    overflow-x:scroll;
        
                    display:flex;
                    justify-content:flex-start;
                    align-items:center;
                }
            `}
            </style>
        </Fragment>
    ); 
}
