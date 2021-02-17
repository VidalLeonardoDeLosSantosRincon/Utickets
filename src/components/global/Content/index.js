import React, {Fragment} from "react";

export const Content = ({children})=>{
    return(
        <Fragment>
            <div className="ctr-content">
                {children}
            </div>
            <style jsx="true">
            {`
                .ctr-content{
                    padding:5px;
                    box-sizing:border-box;

                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
            `}
            </style>
        </Fragment>
    );
}