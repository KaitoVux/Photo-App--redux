import Banner from "components/Banner/Banner";
import { Header } from "components/Header/header";
import Images from "constants/Images";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto, getPhotoById, updatePhoto } from "features/Photo/photoSlice";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { randomNumber } from "utils/common";
import { IPhoto } from "../../../../@types/PhotoTypes";
import "./style.scss";

interface IAddEditProps {}

const AddEditPage: FC<IAddEditProps> = (props: IAddEditProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();

  const isAddMode = !photoId;

  const editedPhoto = useSelector((state: any) => getPhotoById(state, photoId));

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: 0,
        photo: "",
      }
    : editedPhoto;

  const handleSubmit = (values: IPhoto) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isAddMode) {
          let newPhoto = {
            ...values,
            id: randomNumber(1000, 99999),
          };
          const action = addPhoto(newPhoto);
          dispatch(action);
        } else {
          dispatch(updatePhoto(values));
        }
        history.push("/photos");
        resolve(null);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Header />
      <Banner background={Images.CITY_BG} title="Choose your photo" />

      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddEditPage;
