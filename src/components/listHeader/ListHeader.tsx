import React, { ReactNode } from 'react';

import LinearProgress from '@material-ui/core/LinearProgress';

const ListHeader = (props: { isLoading: boolean, children: ReactNode }) =>
    <div>
        {props.children}
        {props.isLoading ? <LinearProgress /> : ''}
    </div>


export default ListHeader;