import React from "react";
import {Card, CardContent} from "@material-ui/core";
import PDFGenerator from "../Components/PDFTest";
import OldPatientForm from "../Components/OldPatientForm";
import Container from "@material-ui/core/Container";
import Copyright from "../BasicComponents/Copyright";

const Home = () => {
    return (<React.Fragment>
        <Container>
            <Card variant="outlined">
                <CardContent>
                    <PDFGenerator/>
                </CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent>
                    <OldPatientForm/>
                </CardContent>
            </Card>
            <Copyright/>
        </Container>
    </React.Fragment>)
};

export default Home;