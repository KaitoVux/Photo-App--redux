import React, { FC } from 'react';
import { Button } from 'reactstrap';
import './PhotoCard.scss';
import { IPhoto } from '../../../../@types/PhotoTypes'

interface IPhotoCardProps {
    photo: IPhoto,
    onEditClick: (photo: any) => void,
    onRemoveClick: (photo: any) => void,
};

const PhotoCard: FC<IPhotoCardProps> = (props: IPhotoCardProps) => {
    const { photo, onEditClick, onRemoveClick } = props;

    const handleEditClick = () => {
        if (onEditClick) onEditClick(photo);
    }

    const handleRemoveClick = () => {
        if (onRemoveClick) onRemoveClick(photo);
    }

    return (
        <div className="photo">
            <img src={photo.photo} alt={photo.title} />
            <div className="photo__overlay">
                <h3 className="photo__title">{photo.title}</h3>
                <div className="photo__actions">
                    <div>
                        <Button outline size="sm" color="light" onClick={handleEditClick}>
                            Edit
                        </Button>
                    </div>
                    <div>
                        <Button outline size="sm" color="danger" onClick={handleRemoveClick}>
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

PhotoCard.defaultProps = {

}

export default PhotoCard;