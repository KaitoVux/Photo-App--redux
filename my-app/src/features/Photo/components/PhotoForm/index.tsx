import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import randomPhotoField from 'custom-fields/randomPhotoField/randomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik, FormikValues } from 'formik';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';


interface PhotoFormProps {
    onSubmit: (value: any) => void;
}

function PhotoForm(props: PhotoFormProps) {
    const initialValues = {
        title: "",
        categoryId: "",
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values: FormikValues) => { console.log("values", values) }}
        >
            {(formikProps: any) => {

                const { values, errors, touched } = formikProps;

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
                            <Button type="submit" color="primary">Add to album</Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </ Formik>
    );
}

export default PhotoForm; 