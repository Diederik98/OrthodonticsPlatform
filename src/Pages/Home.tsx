import React from "react";
import Container from "@material-ui/core/Container";
import Copyright from "../BasicComponents/Copyright";

const Home = () => {
    return (<React.Fragment>
        <Container>
            <h1>Home page</h1>
            {/*<Card variant="outlined">*/}
            {/*    <CardContent>*/}
            {/*        <OldPatientForm/>*/}
            {/*    </CardContent>*/}
            {/*</Card>*/}
            <Copyright/>
        </Container>
    </React.Fragment>)
};

export default Home;