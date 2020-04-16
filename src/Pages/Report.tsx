import React from "react";
import ReportForm from "../Components/ReportForm";
import {Container} from "@material-ui/core";

function onSubmit() {

}

function onChange() {

}

function onError() {

}

const Report = () => {
    return (
        <React.Fragment>
            <Container>
                <ReportForm onSubmit={onSubmit} onChange={onChange} onError={onError}/>
            </Container>
        </React.Fragment>
    )
};
export default Report;