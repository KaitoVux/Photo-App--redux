import React from "react";
import Select from 'react-select';
import { FormGroup, Label } from "reactstrap";

interface SelectFieldProps {
    field: any,
    form: any,
    label: string,
    placeholder: string,
    disabled: boolean,
    options: Array<{
        value: number,
        label: string,
    }>
}

const SelectField = (props: SelectFieldProps) => {

    const { disabled, field, label, placeholder, options } = props;
    const { name, value } = field;

    const selectedOption = options.find(options => options.value === value);

    const handleOnchageSelect = (selectedOption: any) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        }

        field.onChange(changeEvent);
    }

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                {...field}
                value={selectedOption}
                onChange={handleOnchageSelect}
                placeholder={placeholder}
                options={options}
                isDisabled={disabled}
            />
        </FormGroup>
    )
}

SelectField.defaultProps = {
    label: "",
    disabled: false,
    placeholder: "",
    options: [],
}

export default SelectField;