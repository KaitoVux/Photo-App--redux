import React, { FC } from "react";
import { FormGroup, Label, FormFeedback } from "reactstrap";
import RandomPhoto from "components/RandomPhoto";
import { FormikProps, FieldInputProps, ErrorMessage } from "formik";

interface randomPhotoFieldProps {
    field: FieldInputProps<any>,
    form: FormikProps<any>,
    type: string,
    label: string,
    placeholder: string,
    disabled: boolean,
}

interface randomPhotoFieldState { }

const randomPhotoField: FC<randomPhotoFieldProps> = (props: randomPhotoFieldProps) => {

    const { form, field, label } = props;
    const { name, value, onBlur } = field;
    const { errors, touched } = form;
    const showError: any = errors[name] && touched[name];

    const handleImgUrlChange = (url: string) => {
        form.setFieldValue(name, url);
    }

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <RandomPhoto
                name={name}
                imageUrl={value}
                onRandomButtonBlur={onBlur}
                onImageUrlChange={handleImgUrlChange}
                classname={showError ? "is-invalid" : ""}
            >
            </RandomPhoto>

            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    )
}

randomPhotoField.defaultProps = {
    label: "",
}

export default randomPhotoField;
