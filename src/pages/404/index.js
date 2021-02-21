import React, {Fragment} from "react";
import {Link} from "react-router-dom";


export const PageNotFound = ()=>{
    const message = "Sorry, Page Not Found :(";
    return(
        <Fragment>
            <div className="ctr-404">
                <h4 className="title">{message}</h4>
                <Link to="/">
                    <button className="btn-home">
                            Go to home
                    </button>
                </Link>
            </div>
            <style jsx="true">
            {`
                .ctr-404{
                    width:100%;
                    height:100vh;
                    padding:10px;
                    box-sizing:border-box;

                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                }
                .ctr-404 .title{
                    font-size:30px;
                    font-weight:300;
                }

                .ctr-404 .btn-home{
                    padding:15px 30px;
                    box-sizing:border-box;
                    color:white;
                    background:dodgerblue;
                    border:none;
                    border-radius:150px;
                    font-size:18px;
                    outline:none;
                    cursor:pointer;  
                }

                .ctr-404 .btn-home:hover{
                   filter: opacity(0.9);
                }

            `}
            </style>    
        </Fragment>
    );
}