//React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Components Dependencies
import DateFilter from './DateFilter';
import OptionsFilter from './OptionsFilter';

//FontAwesome Dependencies
import { fas } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleOptionChange(newOption) {
        this.props.onFilterChange({
            ...this.props.filters,
            [newOption.target.name]:
                newOption.target.value === '' ? undefined : newOption.target.value
        });
    }

    handleDateChange(newDate) {
        if (
            newDate.target.name === 'dateTo' &&
            moment(newDate.target.value) <= moment(this.props.filters.dateFrom)
        ) {
            return;
        }
        this.props.onFilterChange({
            ...this.props.filters,
            [newDate.target.name]: moment(newDate.target.value).isValid()
                ? moment(newDate.target.value)
                : ''
        });
    }

    render() {
        return (
            <nav className="navbar is-info" style={{ justifyContent: 'center' }}>
                <div className="navbar-item">
                    <DateFilter
                        date={this.props.filters.dateFrom}
                        icon={fas.faSignInAlt}
                        onDateChange={this.handleDateChange}
                        name={'dateFrom'}
                        dateMin={moment()}
                        dateMax={moment(this.props.filters.dateTo).subtract(1, 'days')}
                    />
                </div>
                <div className="navbar-item">
                    <DateFilter
                        date={this.props.filters.dateTo}
                        icon={fas.faSignOutAlt}
                        onDateChange={this.handleDateChange}
                        name={'dateTo'}
                        dateMin={moment(this.props.filters.dateFrom).add(1, 'days')}
                        dateMax={moment().add(41, 'days')}
                    />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                        options={[
                            { value: undefined, name: 'Todos los países' },
                            { value: 'Argentina', name: 'Argentina' },
                            { value: 'Brasil', name: 'Brasil' },
                            { value: 'Chile', name: 'Chile' },
                            { value: 'Uruguay', name: 'Uruguay' }
                        ]}
                        selected={this.props.filters.country}
                        icon={fas.faGlobe}
                        onOptionChange={this.handleOptionChange}
                        name={'country'}
                    />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                        options={[
                            { value: undefined, name: 'Cualquier precio' },
                            { value: 1, name: '$' },
                            { value: 2, name: '$$' },
                            { value: 3, name: '$$$' },
                            { value: 4, name: '$$$$' }
                        ]}
                        selected={this.props.filters.price}
                        icon={fas.faDollarSign}
                        onOptionChange={this.handleOptionChange}
                        name={'price'}
                    />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                        options={[
                            { value: undefined, name: 'Cualquier tamaño' },
                            { value: 10, name: 'Hotel pequeño' },
                            { value: 20, name: 'Hotel mediano' },
                            { value: 30, name: 'Hotel grande' }
                        ]}
                        selected={this.props.filters.rooms}
                        icon={fas.faBed}
                        onOptionChange={this.handleOptionChange}
                        name={'rooms'}
                    />
                </div>
            </nav>
        );
    }
}

Filters.propTypes = {
    filters: PropTypes.object.isRequired,
    onFilterChange: PropTypes.func.isRequired
};
export default Filters;