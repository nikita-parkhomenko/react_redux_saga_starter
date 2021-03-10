
// outsource dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {Container} from 'reactstrap';

// local dependencies
import Header from '../../components/header';

const PrivatLayout = ({ children }) => (
    <>
        <Header />
        <Container>
            {children}
        </Container>
    </>
);

PrivatLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivatLayout;