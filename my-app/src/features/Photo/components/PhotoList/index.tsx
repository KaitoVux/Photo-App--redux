import React, { FC } from 'react';
import { Row, Col } from 'reactstrap';
import { IPhoto } from '../../../../@types/PhotoTypes'
import PhotoCard from '../PhotoCard';

interface IPhotoListProps {
    photosList: Array<IPhoto>,
    onPhotoEditClick: (photo: IPhoto) => void,
    onPhotoRemoveClick: (photo: IPhoto) => void,
}

const PhotoList: FC<IPhotoListProps> = (props: IPhotoListProps) => {
    const { photosList, onPhotoEditClick, onPhotoRemoveClick } = props;

    return (
        <Row>
            {photosList.map(photo => (
                <Col key={photo.title} xs="12" md="6" lg="3">
                    <PhotoCard
                        photo={photo}
                        onEditClick={onPhotoEditClick}
                        onRemoveClick={onPhotoRemoveClick}
                    />
                </Col>
            ))}
        </Row>
    );
}

PhotoList.defaultProps = {
    photosList: [],
}

export default PhotoList;