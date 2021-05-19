import React from 'react';
import propTypes from 'prop-types';

const Error = ({mensaje}) => {
    return (  
        <p className="my-3 p4 text-center alert alert-primary">{mensaje}</p>
    );
}

Error.protoTypes = {
    mensaje : propTypes.string.isRequired
}

export default Error;