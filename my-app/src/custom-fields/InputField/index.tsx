import React from "react";
import { FormGroup, Input, Label, FormFeedback } from "reactstrap";
import { FieldInputProps, FormikProps, ErrorMessage } from "formik";

interface InputFieldProps {
    field: FieldInputProps<any>,
    form: FormikProps<any>,
    type: any,
    label: string,
    placeholder: string,
    disabled: boolean,
}

const InputField = (props: InputFieldProps) => {

    const { disabled, form, field, label, placeholder, type } = props;
    const { name } = field;
    const { errors, touched } = form;
    const showError: any = errors[name] && touched[name];

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}
                type={type}
                disabled={disabled}
                placeholder={placeholder}
                invalid={showError}
            />
            <ErrorMessage name={name} component={FormFeedback} />
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