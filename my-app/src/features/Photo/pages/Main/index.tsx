import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Header } from '../../../../components/Header/header';
import Banner from '../../../../components/Banner/Banner';
import Images from '../../../../constants/Images';

interface IMainProps { }

function MainPage(props: IMainProps) {
    return (
        <div className="photo-main">
            <Header />
            <Banner title="This is photo app" background={Images.MOUTAIN_BG} />
            <Container className="text-center">
                <Link to="/photos/add">Add new photo </Link>
            </Container>
        </div>
    );
}

export default MainPage;