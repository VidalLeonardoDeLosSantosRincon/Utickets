import React, {Fragment} from "react";

//components
import {TicketsSection} from "../../components/TicketsSection";

export const Home  = (props) =>{
    return (
        <Fragment>
            <div className="ctr-home">
                <TicketsSection/>
            </div>
            <style jsx="true">
            {`
                .ctr-home{
                    width:100%;
                    padding:5px;
                    box-sizing:border-box;
                }
            `}
            </style>
        </Fragment>
    );
}