import React from "react";
import {withTheme} from 'react-jsonschema-form';
import {Theme as MuiTheme} from 'rjsf-material-ui';
import {Button} from "@material-ui/core";
import {JSONSchema6} from 'json-schema';
import DatePickerWidget from "../BasicComponents/DatePicker";
import PDFGenerator from "./PDFTest";

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
const currDate = () => {
    let date = new Date();
    return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDay();
};


const scheme: JSONSchema6 = {
    "title": "Orthodontisch verslag",
    "description": "Genereer een verslag met onderstaande variabelen...",
    "type": "object",
    "required": [
        "date"
    ],
    "properties": {
        "date": {
            "title": "Datum",
            "type": "string",
            "default": currDate()
        },
    }
};

// TODO pass data into pdf generator

const ReportForm = (props: { onSubmit: any, onChange: any, onError: any }) => {
    return (
        <React.Fragment>
            <PDFGenerator/>
            <Form schema={scheme}
                  {...props}
                  widgets={widgets}
                  uiSchema={uiSchema}
            >
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </Form>
        </React.Fragment>

    )
};

export default ReportForm;