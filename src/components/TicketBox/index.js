import React, {Fragment} from "react";

export const TicketBox = ({title, ticket}) =>{
    return (
        <Fragment>
            <div className="ctr-ticket_box">
                
                <h4 className="title">Ticket's title 
                    <span className="tooltip_text">This a little description</span>
                </h4>
                
                <div className="ticket_box">

                </div>
            </div>
            <style jsx="true" global>
            {`
                .ctr-ticket_box{
                    height:500px;
                    width:300px;
                    min-width:300px;
                    padding:5px;
                    box-sizing:border-box;
                    box-shadow:2px 2px 5px 2px rgba(0, 0, 0, 0.1);
                    background:white;
                    border:0.5px solid rgba(0, 0, 0, 0.2);
                    border-radius:10px;
                    margin:2px;
                }

                .ctr-ticket_box .title{
                    margin:0;
                    padding:5px;
                    color:lightseagreen;
                    word-wrap:break-all;
                    cursor:pointer;
                    position:relative;

                }

                .ctr-ticket_box .title .tooltip_text{
                    width:160px;
                    top: 100%;
                    left: 50%;
                    margin-left: -80px; 
                    padding:5px 10px;
                   
                    box-sizing:border-box;
                    border:none;
                    border-radius:5px;
                    text-align: center;
                    visibility:hidden;
                    color:white;
                    font-weight:300;
                    font-size:14px;

                    z-index:1;
                    position:absolute;
                    background:lightseagreen;
                }

                .ctr-ticket_box .title .tooltip_text::after{
                    content: " ";
                    position: absolute;
                    right: 50%;
                    bottom: 100%; /* To the left of the tooltip */
                    margin-top: -5px;
                    border-width: 5px;
                    border-style: solid;
                    border-color: transparent  transparent lightseagreen transparent;
                }

                .ctr-ticket_box .title:hover .tooltip_text{
                    visibility:visible;
                    transition:1s;
                }

                .ctr-ticket_box hr{
                    border:none;
                    height:0.5px;
                    background:rgba(0, 0, 0, 0.1);
                }

                .ctr-ticket_box .ticket_box{
                    height:90%;
                    width:100%;
                    padding:5px;
                    box-sizing:border-box;
                    background:rgba(0, 0, 0, 0.05);
                    border-radius:5px;
                    overflow-Y:scroll;
                   
                }            
            `}
            </style>
        </Fragment>
    );
}