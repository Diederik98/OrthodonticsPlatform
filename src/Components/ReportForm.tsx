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

const uiSchema = {
    date: {
        'ui:autofocus': true,
        'ui:widget': 'customDate'
    },
};

const scheme: JSONSchema6 = {
    "title": "Orthodontisch verslag",
    "description": "A simple form example.",
    "type": "object",
    "required": [
        "firstName",
        "lastName", "date"
    ],
    "properties": {
        "firstName": {
            "type": "string",
            "title": "First name",
            "default": "Chuck"
        },
        "lastName": {
            "type": "string",
            "title": "Last name"
        },
        "date": {
            "type": "string",
            "default": "1998-12-24"
        },
        // "alt-date": {
        //     "type": "string",
        //     "format": "date"
        // },
        // "age": {
        //     "type": "integer",
        //     "title": "Age"
        // },
        // "bio": {
        //     "type": "string",
        //     "title": "Bio"
        // },
        // "password": {
        //     "type": "string",
        //     "title": "Password",
        //     "minLength": 3
        // },
        // "telephone": {
        //     "type": "string",
        //     "title": "Telephone",
        //     "minLength": 10
        // }
    }
};

const ReportForm = (props: { onSubmit: any, onChange: any, onError: any }) => {
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

export default ReportForm;