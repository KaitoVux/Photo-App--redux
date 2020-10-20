import Banner from 'components/Banner/Banner';
import { Header } from 'components/Header/header';
import Images from 'constants/Images';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { IPhoto } from '../../../../@types/PhotoTypes';
import { removePhoto } from 'features/Photo/photoSlice';


interface IMainProps { }

function MainPage(props: IMainProps) {
    const dispatch = useDispatch();
    const history = useHistory();

    const photos = useSelector((state: any) => state.photos);

    const handleEditPhotoClick = (photo: IPhoto) => {
        history.push(`/photos/${photo.id}`)
    }

    const handleRemovePhotoClick = (photo: IPhoto) => {
        const removedPhotoId = photo.id;
        dispatch(removePhoto(removedPhotoId));
    }

    return (
        <div className="photo-main">
            <Header />
            <Banner
                title="Your memories"
                background={Images.MOUTAIN_BG}
            />
            <Container className="text-center">
                <div className="py-5">
                    <Link to="/photos/add" style={{ textDecoration: "none" }}><span>Add new photo</span></Link>
                </div>
                <PhotoList
                    photosList={photos}
                    onPhotoEditClick={handleEditPhotoClick}
                    onPhotoRemoveClick={handleRemovePhotoClick}
                />
            </Container>
        </div>
    );
}

export default MainPage;