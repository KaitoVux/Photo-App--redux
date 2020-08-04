import Images from "constants/Images";
import React, { FC } from "react";
import { Button } from "reactstrap";
import './RandomPhoto.scss';

interface RandomPhotoProps {
    name: string,
    imageUrl: string,
    onImageUrlChange: (url: string) => void,
    onRandomButtonBlur: (e: any) => void,
    classname: string,
}

interface RandomPhotostate {

}

const getRandomImgUrl = () => {
    let id = Math.trunc(Math.random() * 1000);
    return `https://picsum.photos/id/${id}/300/300`;
}


const RandomPhoto: FC<RandomPhotoProps> = (props: RandomPhotoProps) => {
    const { name, imageUrl, onImageUrlChange, onRandomButtonBlur, classname } = props;

    const handleRandomPhotoClick = async () => {
        const imgUrl = getRandomImgUrl();
        onImageUrlChange(imgUrl);
    }

    return (
        <div className={`random-photo ${classname ? "is-invalid" : ""}`}>
            <div className="random-photo__button">
                <Button
                    outline
                    name={name}
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Random a photo
        </Button>
            </div>

            <div className="random-photo__photo">
                {imageUrl && <img src={imageUrl} alt="Ooops ... not found. Please click random again!" />}
            </div>
        </div>
    )
}

RandomPhoto.defaultProps = {
    name: "",
    imageUrl: Images.BOAT_BG,
}


export default RandomPhoto;