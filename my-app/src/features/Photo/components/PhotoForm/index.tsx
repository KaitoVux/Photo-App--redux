import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import randomPhotoField from 'custom-fields/randomPhotoField/randomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as yup from 'yup';
import { IPhoto } from '../../../../@types/PhotoTypes';


interface PhotoFormProps {
    isAddMode: boolean;
    initialValues: IPhoto;
    onSubmit: (value: IPhoto) => void;
}

function PhotoForm(props: PhotoFormProps) {
    const { isAddMode, initialValues } = props;

    const validationShema = yup.object().shape({
        title: yup.string().required("Title is required!"),

        categoryId: yup.number().integer().required("Category is required!").nullable(),

        photo: yup.string().required("Please choose your photo!"),
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationShema}
            onSubmit={props.onSubmit}
        >
            {(formikProps: any) => {

                const { isSubmitting } = formikProps;

                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Your photo's title..."
                        />

                        <FastField
                            name="categoryId"
                            component={SelectField}

                            label="Category"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        <FastField
                            name="photo"
                            component={randomPhotoField}

                            label="Photo"
                        />

                        <FormGroup>
                            <Button type="submit" color={isAddMode ? "primary" : "success"}>
                                {isSubmitting && <Spinner size="sm" />}
                                {isAddMode ? "Add to album" : "Update Photo"}
                            </Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </ Formik>
    );
}

export default PhotoForm; 