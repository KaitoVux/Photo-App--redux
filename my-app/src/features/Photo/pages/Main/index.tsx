import Banner from 'components/Banner/Banner';
import { Header } from 'components/Header/header';
import Images from 'constants/Images';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';


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