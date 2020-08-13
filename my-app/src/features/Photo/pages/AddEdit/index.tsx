import Banner from 'components/Banner/Banner';
import Images from 'constants/Images';
import PhotoForm from 'features/Photo/components/PhotoForm';
import React from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import { addPhoto } from 'features/Photo/photoSlice';
import { useHistory } from 'react-router-dom';


interface IAddEditProps { }


function AddEditPage(props: IAddEditProps) {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (values: any) => {
        return new Promise(resolve => {
            setTimeout(() => {
                const action = addPhoto(values);
                dispatch(action);

                history.push('/photos');
                resolve(null);
            }, 2000)
        })

    }

    return (
        <div className="photo-edit">
            <Banner background={Images.CITY_BG} title="Choose your photo" />
            <div className="photo-edit__form">
            </div>

            <div className="photo-edit__form">
                <PhotoForm onSubmit={handleSubmit} />
            </div>
        </div>

    );
}

export default AddEditPage;