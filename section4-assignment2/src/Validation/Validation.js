import React from 'react';

const validation = (props) => {
    let statement;

    props.length < 5 ? statement="Text too short!" : statement="Text long enough";

    return(
        <div>
            <p>{statement}</p>
        </div>
    );


};

export default validation;