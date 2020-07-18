import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Banner from '../../../../components/Banner/Banner';
import Images from '../../../../constants/Images';
import './style.scss';
import PhotoForm from '../../components/PhotoForm';

interface IAddEditProps { }

function AddEditPage(props: IAddEditProps) {
    return (
        <div className="photo-edit">
            <Banner background={Images.CITY_BG} title="Choose your photo" />
            <div className="photo-edit__form">
            </div>

            <div className="photo-edit__form">
                <PhotoForm onSubmit={values => console.log('Form submit: ', values)} />
            </div>
        </div>

    );
}

export default AddEditPage;