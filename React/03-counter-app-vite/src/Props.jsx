import PropTypes from 'prop-types';
import { Fragment } from 'react';

export const Props = ({title, subTitle}) => {

    return (
        <Fragment>
            <h2>{title}</h2>
            <p>{subTitle}</p>
        </Fragment>
    )
}


Props.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}
