import {WidgetProps} from "react-jsonschema-form";
import React from "react";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";


export default function DatePickerWidget(props: WidgetProps) {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        (props.value ? new Date(props.value) : new Date()),
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        if (date !== null) {

            // let userTimezoneOffset = date.getTimezoneOffset() * 60000;
            // let newDate = new Date(date.getTime() - userTimezoneOffset)
            // console.log(newDate);

            let formatted_date = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
            props.onChange(formatted_date)
        }
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                id={props.id}
                label={props.label}
                value={selectedDate}
                required={props.required}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
}