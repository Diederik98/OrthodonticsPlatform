import React, {useState} from "react";
import {PatientSearchInput} from "../Components/PatientSearchInput";
import PatientForm from "../Components/PatientForm";
import {Container} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";


const Patient = () => {

    const [error, setError] = useState("");

    function onSubmit() {

    }

    function onChange() {

    }

    function onError(message: any) {
        setError(message.toString());
        setTimeout(() => setError(""), 2000);
    }

    const showError = () => {
        if (error !== "") {
            return <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
            </Alert>;
        } else return (<> </>)
    };

    return (
        <React.Fragment>
            {showError()}
            <Container>
                <PatientSearchInput onError={onError}/>
                <PatientForm onSubmit={onSubmit} onChange={onChange} onError={onError}/>
            </Container>

        </React.Fragment>
    )
};
export default Patient;