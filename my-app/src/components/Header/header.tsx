import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./header.scss";

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
                            href="https://github.com/KaitoVux/Photo-App--redux"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Photo App
                        </a>
                    </Col>
                    <Col xs="auto">
                        <NavLink
                            exact
                            to="/sign-in"
                            className="header__link"
                            activeClassName="header__link--active"
                        >
                            Sign In
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}