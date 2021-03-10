
// outsource dependencies
import React, {useState} from 'react';
import {Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown} from "reactstrap";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar color="dark" dark expand="sm">
                <NavbarBrand href="/">Company</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
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