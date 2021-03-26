
// outsource dependencies
import _ from 'lodash';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import {Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavLink, UncontrolledDropdown} from 'reactstrap';

// local dependencies
import logo from '../images/spacex-logo.svg';
import {WELCOME, USER} from '../constants/routes';

const Header = ({ user }) => {
    console.log(user);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar style={{ height: 80 }} light expand="md" fixed="top" className="d-flex justify-content-between color_navbar">
                <Link to={WELCOME.link()}>
                    <NavbarBrand tag="div" className="d-flex justify-content-between">
                        <img
                            alt="company logo"
                            src={logo}
                            width="200"
                            height="60"
                        />
                    </NavbarBrand>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <Link to={USER.link()}>
                            <NavLink className="text-white" tag="span">User Cabinet</NavLink>
                        </Link>
                    </Nav>
                    <UncontrolledDropdown  className="ml-auto" navbar>
                        <DropdownToggle className="text-white" nav caret>
                            <img
                                alt="user"
                                src={_.get(user, 'coverImage.url')}
                                style={{ width: '60px', height: '60px' }}
                                className="rounded-circle mr-2"
                            />
                            {_.get(user, 'name', 'no name')}
                        </DropdownToggle>
                        <DropdownMenu right>
                            {/*<DropdownItem divider />*/}
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

const mapStateToProps = state => ({
    user: state.appReducer.user,
})

export default connect(mapStateToProps, null)(Header);
