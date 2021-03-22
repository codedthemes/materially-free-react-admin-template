import React from 'react';
import MuiChip from '@material-ui/core/Chip';

const Chip = (props) => {
    const { ...rest } = props;

    return <MuiChip {...rest} />;
};

export default Chip;
