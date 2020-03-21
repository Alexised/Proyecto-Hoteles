//React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Components Dependencies
import DateFilter from './DateFilter';
import OptionsFilter from './OptionsFilter';

//FontAwesome Dependencies
import { fas } from '@fortawesome/free-solid-svg-icons';

 class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleOptionChange(newOption) {
        let payload = this.props.filters;
        payload[newOption.target.name] =
            //If value=undefined then option takes value=textContent
            newOption.target.value === '' ? undefined : newOption.target.value;

        this.props.onFilterChange(payload);
    }

    handleDateChange(newDate) {
        let payload = this.props.filters;

        //If dateTo is greater than dateFrom don't change the state
        if (
            newDate.target.name === 'dateTo' &&
            Date.parse(newDate.target.value) < this.props.filters.dateFrom
        ) {
            this.props.onFilterChange(payload);
        } else {
            payload[newDate.target.name] = new Date(
                newDate.target.value.concat('', 'T00:00:00')
            );

            this.props.onFilterChange(payload);
        }
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
                    />
                </div>
                <div className="navbar-item">
                    <DateFilter
                        date={this.props.filters.dateTo}
                        icon={fas.faSignOutAlt}
                        onDateChange={this.handleDateChange}
                        name={'dateTo'}
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