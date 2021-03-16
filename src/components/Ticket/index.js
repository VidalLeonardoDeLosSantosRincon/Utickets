import React, {Fragment} from "react";

export const Ticket = ()=>{
    return(
        <Fragment>
            <div className="ctr-ticket">
                <h6>
                    <span>
                        18/06/2021
                    </span>
                </h6>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Pariatur quibusdam odit reiciendis ipsam, quam, sed maxime 
                    perspiciatis in, voluptas fugit cum. Ex accusantium ipsum,
                     quo veniam earum numquam quisquam nemo!
                </p>
                <h4 style={{color:"orange"}}> 
                    <div className="circle">    
                    </div>
                    Medium
                  
                </h4>
            </div>
            <style jsx="true" global="false">
            {`
                .ctr-ticket {
                    height:auto;
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
                    flex-direction:column;
                    justify-content:flex-start;
                    align-items:center;
                }

                .ctr-ticket:hover{
                    transform:scale(1.02);
                    transition:all 0.1s linear;
                    box-shadow:2px 4px 6px rgba(0, 0, 0, 0.2);
                }

                .ctr-ticket h6{
                    padding:5px;
                    box-sizing:border-box;
                    margin:0;
                    background:white;
                    width:100%;
                    text-align:right;
                    color:gray;
                    font-weight:300;
                }

                .ctr-ticket p {
                    padding:5px;
                    box-sizing:border-box;
                    margin:0;
                    font-weight:300px;
                    font-size:12px;
                    background:rgba(0, 0, 0, 0.05);
                    width:100%;
                    text-align:left;
                    border-radius:4px;
                    color:gray;
                }

                .ctr-ticket h4{
                    padding:5px;
                    box-sizing:border-box;
                    margin:0;
                    background:white;
                    width:100%;
                    text-align:left;
                    color:gray;
                    font-weight:bold;
                    font-size:12px;

                    display:flex;
                    justify-content:flex-start;
                    align-items:center;
                }

                .ctr-ticket h4 div{
                    background:orange;
                    width:10px;
                    height:10px;
                    border-radius:10px;
                    margin:0 2px;
                    box-sizing:border-box;
           
                }


            `}
            </style>
        </Fragment>
    );
};