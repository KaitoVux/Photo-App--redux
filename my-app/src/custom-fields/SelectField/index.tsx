import { ErrorMessage, FieldInputProps, FormikProps } from "formik";
import React from "react";
import Select from 'react-select';
import { FormFeedback, FormGroup, Label } from "reactstrap";

interface SelectFieldProps {
    field: FieldInputProps<any>,
    form: FormikProps<any>,
    label: string,
    placeholder: string,
    disabled: boolean,
    options: Array<{
        value: number,
        label: string,
    }>
}

const SelectField = (props: SelectFieldProps) => {

    const { disabled, field, form, label, placeholder, options } = props;
    const { name, value } = field;
    const { errors, touched } = form;
    const showError: any = errors[name] && touched[name];

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
                className={showError ? "is-invalid" : ""}
            />
            <ErrorMessage name={name} component={FormFeedback} />
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