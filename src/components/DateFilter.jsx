//React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//FontAwesome Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DateFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(newDate) {
        this.props.onDateChange(newDate);
    }

    formatDate(date) {
        // Use the ISO 8601 format YYYY-MM-DDTHH:mm:ss.sssZ
        return date.toISOString().split('T')[0];
    }

    render() {
        return (
            <div className="field">
                <div className="control has-icons-left">
                    <input
                        className="input"
                        type="date"
                        //Trigger the handleOptionChange method in the Filters component
                        onChange={this.handleDateChange}
                        value={this.formatDate(this.props.date)}
                        name={this.props.name}
                        steps={1}
                    />
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon={this.props.icon} />
                    </span>
                </div>
            </div>
        );
    }
}
DateFilter.propTypes = {
    icon: PropTypes.object.isRequired,
    date: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    onDateChange: PropTypes.func.isRequired
};

export default  DateFilter;