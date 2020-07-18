import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./header.scss"

interface HeaderProps {

}

export const Header = (props: HeaderProps) => {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a
                            className="header__link Header__title"
                            href="https://www.youtube.com/watch?v=CCLyaDid7u0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Photo App
                        </a>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                            exact
                            to="/photos"
                            className="header__link"
                            activeClassName="header__link--active"
                        >
                            Home
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}