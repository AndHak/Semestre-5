import PropTypes from 'prop-types';
import { Fragment } from 'react';

export const DefaultProps = ({title, subTitle}) => {

    return (
        <Fragment>
            <h2>{title}</h2>
            <p>{subTitle}</p>
        </Fragment>
    )
}


DefaultProps.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}


DefaultProps.defaultProps = {
    title: 'No hay titulo',
    subTitle: "No hay subtitulo"
}