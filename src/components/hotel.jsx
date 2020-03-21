//React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//FontAwesome Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

class Hotel extends React.Component {
    constructor(props) {
        super(props);
        this.alert_construction = this.alert_construction.bind(this);
    }
    alert_construction(){
        alert('No implementamos esto aún :(');
    }
    render() {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={this.props.hotel.photo} alt={this.props.hotel.slug} />
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{this.props.hotel.name}</p>
                <p>{this.props.hotel.description}</p>
                <div
                    className="field is-grouped is-grouped-multiline"
                    style={{ marginTop: '1em' }}
                >
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-medium is-info">
                                <FontAwesomeIcon icon={fas.faMapMarker} />
                            </span>
                            <span className="tag is-medium">
                                {`${this.props.hotel.city}, ${this.props.hotel.country}`}
                            </span>
                        </div>
                    </div>
                    <div className="control">
                        <div className="tags has-addons">
                            <span className="tag is-medium is-info">
                                <FontAwesomeIcon icon={fas.faBed} />
                            </span>
                            <span className="tag is-medium">
                                {this.props.hotel.rooms} Habitaciones
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
                                        this.props.hotel.price >= 2
                                            ? { margin: '0 .125em' }
                                            : { margin: '0 .125em', opacity: '.25' }
                                    }
                                />
                                <FontAwesomeIcon
                                    icon={fas.faDollarSign}
                                    style={
                                        this.props.hotel.price >= 3
                                            ? { margin: '0 .125em' }
                                            : { margin: '0 .125em', opacity: '.25' }
                                    }
                                />
                                <FontAwesomeIcon
                                    icon={fas.faDollarSign}
                                    style={
                                        this.props.hotel.price >= 4
                                            ? { margin: '0 .125em' }
                                            : { margin: '0 .125em', opacity: '.25' }
                                    }
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
            
                <button
                    onClick={this.alert_construction}
                    className="button is-medium is-fullwidth has-background-primary has-text-white has-text-weight-bold"
                >
                    Reservar
        </button>
            </div>
        </div>
    );
}
}
Hotel.propTypes = {
    hotel: PropTypes.object.isRequired
};
export default  Hotel;