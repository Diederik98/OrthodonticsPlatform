import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {Formik,} from 'formik';
import * as Yup from 'yup';
import {Grid} from "@material-ui/core";
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";


const styles = {};

interface IProps {
    classes: any
}

function OldPatientForm(props: IProps) {
    const {classes} = props;
    const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

    return (
        <React.Fragment>
            {/*<Button variant="outlined" color="primary" onClick={()=>console.log("clicked")}>*/}
            {/*    Contact us!*/}
            {/*</Button>*/}
            {!isSubmitionCompleted &&
            <React.Fragment>
                <Formik
                    initialValues={
                        {
                            email: [''],
                            first_name: '',
                            name: '',
                            comment: '',
                            date: new Date(),
                            street: '',
                            house_numbering: '',
                            postal_code: '',
                            city: '',
                            phone: [''],
                            friends: [{name: "Test", email: "teest"}]
                        }
                    }
                    onSubmit={() => setSubmitionCompleted(true)}

                    validationSchema={Yup.object().shape({
                        email: Yup.array().of(Yup.string()
                            .email()
                            .required('Required')),
                        name: Yup.string()
                            .required('Required'),
                        first_name: Yup.string().required('Required'),
                        comment: Yup.string()
                            .required('Required'),
                        date: Yup.date(),

                        friends: Yup.array().of(Yup.object().shape({
                            name: Yup.string().required(),
                            email: Yup.string().email()
                        }))
                    })}
                >
                    {(props) => {
                        const {
                            values,
                            touched,
                            errors,
                            dirty,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            handleReset,
                        } = props;
                        return (
                            <form onSubmit={handleSubmit}>
                                <Grid container>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Voornaam"
                                                name="first_name"
                                                className={classes.textField}
                                                value={values.first_name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={(errors.first_name && touched.first_name) && errors.first_name}
                                                margin="normal"
                                            />
                                            &nbsp;
                                            <TextField
                                                label="Achternaam"
                                                name="name"
                                                className={classes.textField}
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={(errors.name && touched.name) && errors.name}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                                    margin="normal"
                                                    id="date-picker-dialog"
                                                    label="Geboortedatum"
                                                    format="MM/dd/yyyy"
                                                    value={values.date}
                                                    onChange={value => props.setFieldValue("date", value)}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </MuiPickersUtilsProvider>

                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Telefoon/GSM"
                                                name="phone"
                                                type="tel"
                                                className={classes.textField}
                                                value={values.phone}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Straat"
                                                name="street"
                                                className={classes.textField}
                                                value={values.street}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                margin="normal"
                                            />
                                            &nbsp;
                                            <TextField
                                                label="Nr/bus"
                                                name="house_numbering"
                                                className={classes.textField}
                                                value={values.house_numbering}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                margin="normal"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField
                                                label="Stad"
                                                name="city"
                                                className={classes.textField}
                                                value={values.city}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                margin="normal"
                                            />
                                            &nbsp;
                                            <TextField
                                                label="Postcode"
                                                name="postal_code"
                                                className={classes.textField}
                                                value={values.postal_code}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                error={!!(errors.email && touched.email)}
                                                label="email"
                                                name="email"
                                                className={classes.textField}
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                helperText={(errors.email && touched.email) && errors.email}
                                                margin="normal"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Button
                                    type="button"
                                    className="outline"
                                    onClick={handleReset}
                                    disabled={!dirty || isSubmitting}
                                >
                                    Reset
                                </Button>
                                <Button type="submit" disabled={isSubmitting}>
                                    Submit
                                </Button>
                                {/* <DisplayFormikState {...props} /> */}
                            </form>
                        );
                    }}
                </Formik>

            </React.Fragment>
            }
            {isSubmitionCompleted &&
            <React.Fragment>
                <label>Submitted</label>
            </React.Fragment>}
        </React.Fragment>
    );
}

export default withStyles(styles)(OldPatientForm);