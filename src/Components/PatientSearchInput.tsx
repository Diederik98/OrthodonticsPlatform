import React from "react";
import AutoCompleteField from "../BasicComponents/AutoCompleteField";

interface IPatient {
    first_name: "",
    name: "",
}

interface IProps {
    onError(message: string): void
}

const host: string = "localhost";
const port: string = "4001";
const url: string = 'http://' + host + ':' + port + '/api/patients/search/';

export const PatientSearchInput = (props: IProps) => {
    return (
        <AutoCompleteField<IPatient>
            selectCallback={() => console.log("Selected")}
            handleSearch={(query: string) => fetch(url + query, {
                method: 'get',
            }).then(result => result.json())
            }
            onError={props.onError}
            placeHolder={"Zoek patiënt..."}
            itemToString={(patient: IPatient) => patient.first_name + " " + patient.name}/>
    );
};