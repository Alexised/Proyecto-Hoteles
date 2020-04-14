
//React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Components Dependencies
import Hotel from './Hotel.jsx';

function Hotels(props) {
    return (
        <section className="section" style={{ marginTop: '3em' }}>
            <div className="container">
                <div className="columns is-multiline">
                    {props.hotels.length === 0 ? (
                        <article className="message is-warning">
                            <div className="message-body">
                                No se han encontrado hoteles que coincidan con los parámetros de
                                búsqueda.
                </div>
                        </article>
                    ) : (
                            props.hotels.map((hotel) => {
                                return (
                                    <div key={hotel.slug} className="column is-one-third">
                                        <Hotel hotel={hotel} />
                                    </div>
                                );
                            })
                        )}
                </div>
            </div>
        </section>
    );
}

Hotels.propTypes = {
    hotels: PropTypes.array.isRequired
};
export default Hotels;