import React, { Fragment } from 'react';

const MinimalLayout = (props) => {
    const { children } = props;

    return <Fragment>{children}</Fragment>;
};

export default MinimalLayout;
