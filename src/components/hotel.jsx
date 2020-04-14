//React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//FontAwesome Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
function Hotel(props) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={props.hotel.photo} alt={props.hotel.slug} />
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{props.hotel.name}</p>
                <p>{props.hotel.description}</p>
                <div
                    className="field is-grouped is-grouped-multiline"
                    style={{ marginTop: '1em' }}>
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-medium is-info">
                                <FontAwesomeIcon icon={fas.faMapMarker} />
                            </span>
                            <span className="tag is-medium">
                                {`${props.hotel.city}, ${props.hotel.country}`}
                            </span>
                        </div>
                    </div>
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-medium is-info">
                                <FontAwesomeIcon icon={fas.faBed} />
                            </span>
                            <span className="tag is-medium">
                                {props.hotel.rooms} Habitaciones
                    </span>
                        </div>
                    </div>
                    <div className="control">
                        <div className="tags">
                            <span className="tag is-medium is-info">
                                <FontAwesomeIcon
                                    icon={fas.faDollarSign}
                                    style={{ margin: '0 .125em' }}
                                />
                                <FontAwesomeIcon
                                    icon={fas.faDollarSign}
                                    style={
                                        props.hotel.price >= 2 ? { margin: '0 .125em' } : { margin: '0 .125em', opacity: '.25' }
                                    }
                                />
                                <FontAwesomeIcon
                                    icon={fas.faDollarSign}
                                    style={
                                        props.hotel.price >= 3 ? { margin: '0 .125em' } : { margin: '0 .125em', opacity: '.25' }
                                    }
                                />
                                <FontAwesomeIcon
                                    icon={fas.faDollarSign}
                                    style={
                                        props.hotel.price >= 4 ? { margin: '0 .125em' } : { margin: '0 .125em', opacity: '.25' }
                                    }
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <a
                    href="#" onClick={(e) => {
                        e.preventDefault();
                        alert('Lo siento, aún no implementamos esto :C');
                    }}
                    className="card-footer-item has-background-primary has-text-white has-text-weight-bold">
                    Reservar
        </a>

            </div>
        </div>
    );
}
Hotel.propTypes = {
    hotel: PropTypes.object.isRequired
};
export default Hotel;