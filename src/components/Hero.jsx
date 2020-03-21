//React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

function Hero(props) {
    let language = 'es-MX';
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Hoteles</h1>
                    <h2 className="subtitle">
                        <strong>Hoteles</strong> desde el{' '}
                        <strong>
                            {props.filters.dateFrom.toLocaleDateString(language, options)}
                        </strong>{' '}
            hasta el{' '}
                        <strong>
                            {props.filters.dateTo.toLocaleDateString(language, options)}
                        </strong>
                        {props.filters.country != undefined &&
                            ` en ${props.filters.country}`}
                        {props.filters.price != undefined &&
                            ` por $${props.filters.price} la noche`}
                        {props.filters.rooms != undefined &&
                            ` de hasta ${props.filters.rooms} habitaciones.`}
                    </h2>
                </div>
            </div>
        </section>
    );
}

Hero.propTypes = {
    filters: PropTypes.object.isRequired
};

export default Hero;