//React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//FontAwesome Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Moment Dependencies
import Moment from 'moment';

function dateChecker(date) {
    if (Moment(date).isValid()) {
        return Moment(date).format('YYYY-MM-DD');
    }
    return '';
}
function DateFilter(props) {
    return (
        <div className="field" >
            <div className="control has-icons-left">
                <input
                    className="input"
                    type="date"
                    //Trigger the handleOptionChange method in the Filters component
                    onChange={(newDate) => props.onDateChange(newDate)}
                    value={dateChecker(props.date)}
                    name={props.name}
                    min={dateChecker(props.dateMin)}
                    max={dateChecker(props.dateMax)}
                />
                <span className="icon is-small is-left">
                    <FontAwesomeIcon icon={props.icon} />
                </span>
            </div>
        </div>
    );
}

DateFilter.propTypes = {
    icon: PropTypes.object.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    dateMin: PropTypes.object.isRequired,
    dateMax: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    onDateChange: PropTypes.func.isRequired
};

export default DateFilter;