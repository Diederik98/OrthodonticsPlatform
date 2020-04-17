import React from "react";
import {withTheme} from 'react-jsonschema-form';
import {Theme as MuiTheme} from 'rjsf-material-ui';
import {Button} from "@material-ui/core";
import {JSONSchema6} from 'json-schema';
import DatePickerWidget from "../BasicComponents/DatePicker";

const Form = withTheme(MuiTheme);


const widgets = {
    customDate: DatePickerWidget
};

const currDate = () => {
    let date = new Date();
    return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDay();
};

const uiSchema = {
    birthDate: {
        'ui:autofocus': true,
        'ui:widget': 'customDate'
    },
};


// TODO dynamic system for new attributes and database integration

const scheme: JSONSchema6 = {
    "title": "Informatie patient",
    "description": "A simple form example.",
    "type": "object",
    "required": [
        "firstName",
        "lastName",
        "birthDate"
    ],
    "properties": {
        "firstName": {
            "type": "string",
            "title": "Voornaam",
        },
        "lastName": {
            "type": "string",
            "title": "Achternaam"
        },
        "birthDate": {
            "type": "string",
            "title": "Geboortedatum",
            'default': currDate()
        },
        "gender": {
            "type": "string",
            "title": "Geslacht",
            "enum": [
                "M",
                "F",
                "O"
            ]
        },
        "email": {
            "title": "Email: gescheiden met ';'",
            "type": "string",
            "pattern": "^((([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}));?)+$"
            // 1 email address: ^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$
            // multiple separated by ';': ^((([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}));?)+$
            // TODO Maybe multiple fields if more than 1 address? "additionalProperties" ?
        },
        "phone": {
            "title": "Tel/gsm: gescheiden met ';'",
            "type": "string",
            // TODO ADD PATTERN and maybe multiple fields if more than 1 phone number?
        },
        "language": {
            "title": "Taal",
            "type": "string",
            "default": "NL",
            "enum": [
                "NL",
                "EN",
                "FR",
                "DU"
            ]
        },
        // TODO inline street and house-numbering
        "street": {
            "title": "Straat",
            "type": "string"
        },
        "houseNumbering": {
            "title": "Huisnummer",
            "type": "string"
        },
        "postalCode": {
            "title": "Postcode",
            "type": "string",
        },
        "city": {
            "title": "Stad",
            "type": "string",

        },
        "country": {
            "title": "Land",
            "type": "string",
            "default": "BE"
        },

        "association": {
            "title": "Associatie of naam tandarts",
            "type": "string"
        },
        "firstNameDentist": {
            "title": "Voornaam tandarts van associatie",
            "type": "string"
        },
        "school": {
            "title": "School",
            "type": "string",
        },
        "insuranceRefund": {
            "title": "Terugbetaling",
            "type": "boolean",
            "default": "yes"
        },
    }
};

const PatientForm = (props: { onSubmit: any, onChange: any, onError: any }) => {
    return (
        <Form schema={scheme}
              {...props}
              widgets={widgets}
              uiSchema={uiSchema}
        >
            <Button variant="contained" color="primary" type="submit">Submit</Button>
        </Form>
    )
};

export default PatientForm;