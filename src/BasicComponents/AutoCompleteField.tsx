import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';


interface IProps<T> {
    selectCallback: (selectedId: number) => void,
    handleSearch: (query: string) => Promise<T[]>,
    placeHolder: string,
    itemToString: (option: T) => string,  // option.name+" "+option.first_name
    onError(message: string): void
}

export default function AutoCompleteField<T>(props: IProps<T>) {
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState<T[]>([]);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };


    React.useEffect(() => {
        let active = true;


        if (inputValue === '') {
            setOptions([]);
            return undefined;
        }

        // If the length of the search term does not exceed 2 --> reset the options
        if (inputValue.length < 2) {
            setOptions([]);
            return undefined;
        }

        props.handleSearch(inputValue).then(
            (data: T[]) => (active ? setOptions(data || []) : setOptions([])))
            // Catch any errors we hit and update the app
            .catch(error => {
                // TODO Better way of error handling
                props.onError(error)
            });


        return () => {
            active = false;
        };
    }, [inputValue]);

    return (
        // option.name+" "+option.first_name
        <React.Fragment>
            <Autocomplete
                id="search-autocomplete"
                style={{width: 300}}

                getOptionLabel={(option: T | null) => {
                    if (option === null) return "";
                    return (props.itemToString(option))
                }}

                onChange={(e: object, value: T | null, reason: string) => {
                    console.log("changed because of: " + reason);
                    if (value === null) return;
                    console.log(value);
                }}
                filterOptions={(x: T[]) => x}
                options={options}
                autoComplete
                includeInputInList
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={props.placeHolder}
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                    />
                )}
                renderOption={(option: any) => {

                    const matches = match(props.itemToString(option), inputValue);
                    const parts = parse(props.itemToString(option), matches);

                    return (
                        <div>
                            {parts.map((part, index) => (
                                <span key={index} style={{fontWeight: part.highlight ? 700 : 400}}>
                                {part.text}
                            </span>
                            ))}
                        </div>
                    );
                }}
            />
        </React.Fragment>
    );
}
