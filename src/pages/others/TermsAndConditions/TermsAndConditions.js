import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h4>Here is our terms and conditions</h4>
            <p>GO back to registration: <Link to='/register'></Link></p>
        </div>
    );
};

export default TermsAndConditions;