
// outsource dependencies
import React from 'react';
import PropTypes from 'prop-types';
import {Container} from 'reactstrap';

// local dependencies
import Header from '../../components/header';

const PrivatLayout = ({ children }) => (
    <>
        <Header />
        <Container className="mt-5 py-5">
            {children}
        </Container>
    </>
);

PrivatLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default PrivatLayout;