import React from "react";
import { Navbar, Container } from "react-bootstrap"

function navbar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />
                        Magic Jars
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default navbar;