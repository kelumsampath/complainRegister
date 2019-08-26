import React from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand >Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/addcomplain">Add complain</Nav.Link>
                        <Nav.Link href="/viewcomplain">View complains</Nav.Link>
                    </Nav>
                   
                </Navbar>
            </div>
        );
    }
}

export default NavBar;