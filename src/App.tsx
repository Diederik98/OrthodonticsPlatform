import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {Card, CardContent} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PatientForm from "./Components/PatientForm";
import PDFGenerator from "./Components/PDFTest";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://orthodontieleuven.com/">
                Orthodontie Heidbuchel
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function App() {
    // const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
    // const [rows, setRows] = useState([
    //     {firstName: 'bob', lastName:'bob2', email: 'die@ex.com', id: "52"}
    // ]);
    return (
//maxWidth="sm"
        <Container>
            {/*<Card className={classes.root} variant="outlined">*/}
            {/*    <CardContent>*/}
            {/*        <PatientSearchInput/>*/}
            {/*    </CardContent>*/}
            {/*    <CardActions>*/}
            {/*        <Button size="small">Do nothing</Button>*/}
            {/*    </CardActions>*/}
            {/*</Card>*/}
            {/*<Card>*/}
            {/*    <CardContent>*/}
            {/*        <MyForm onSubmit={()=>console.log("submitted")}/>*/}
            {/*    </CardContent>*/}
            {/*</Card>*/}
            <Card>
                <CardContent>
                    <PDFGenerator/>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <PatientForm/>
                </CardContent>
            </Card>
            <Copyright/>
        </Container>
    );
}
