import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

interface InputFieldProps {
    field: any,
    form: any,
    type: string,
    label: string,
    placeholder: string,
    disabled: boolean,
}

const InputField = (props: InputFieldProps) => {

    const { disabled, field, label, placeholder, type } = props;
    const { name } = field;

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                name={name}
                id={name}
                {...field}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
            />
        </FormGroup>
    )
}

InputField.defaultProps = {
    type: "text",
    label: "",
    disabled: false,
    placeholder: "",
}

export default InputField;