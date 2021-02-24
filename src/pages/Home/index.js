import React, {Fragment} from "react";

//components
import {TicketsSection} from "../../components/TicketsSection";

export const Home  = (props) =>{
    return (
        <Fragment>
            <div className="ctr-home">
                <TicketsSection/>
            </div>
       
        </Fragment>
    );
}