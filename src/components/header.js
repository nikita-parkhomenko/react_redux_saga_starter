
// outsource dependencies
import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import {Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavLink, UncontrolledDropdown} from 'reactstrap';

import {welcome, employees, projects} from '../constants/routes';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar color="dark" dark expand="sm" fixed="top">
                <Link to={welcome.link()}>
                    <NavbarBrand tag="div" className="d-flex justify-content-between">
                        <img
                            alt="company logo"
                            src="https://media-exp1.licdn.com/dms/image/C4E0BAQFCvE5py1YmEw/company-logo_200_200/0/1524059602944?e=1622073600&v=beta&t=AbLtckJXWKtZ7B3ZPh5TObmxHbsbwQqlI7AzquJFqrg"
                            width="32"
                            height="32"
                            className="mr-2"
                        />
                        <h3 className="mb-0">Intelliceed</h3>
                    </NavbarBrand>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <Link to={employees.link()}>
                            <NavLink tag="span">Employees</NavLink>
                        </Link>
                        <Link to={projects.link()}>
                            <NavLink tag="span">Projects</NavLink>
                        </Link>
                    </Nav>
                    <UncontrolledDropdown  className="ml-auto" navbar>
                        <DropdownToggle nav caret>
                            Hello, John Doe
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem className="text-danger">
                                Sign Out
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Collapse>
            </Navbar>
        </>
    );
}

export default Header;