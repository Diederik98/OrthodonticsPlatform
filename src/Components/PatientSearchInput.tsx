import React from "react";
import AutoCompleteField from "../BasicComponents/AutoCompleteField";

interface IPatient {
    first_name: "",
    name: "",
}

const host: string = "localhost";
const port: string = "4001";
const url: string = 'http://' + host + ':' + port + '/api/patients/search/';

export const PatientSearchInput = () => {
    return (
        <AutoCompleteField<IPatient>
            selectCallback={() => console.log("Selected")}
            handleSearch={(query: string) => fetch(url + query, {
                method: 'get',
            }).then(result => result.json())
            }
            placeHolder={"Zoek patiënt..."}
            itemToString={(patient: IPatient) => patient.first_name + " " + patient.name}/>
    );
};