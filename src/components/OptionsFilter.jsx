//React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//FontAwesome Dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class OptionsFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(newOption) {
        this.props.onOptionChange(newOption);
    }
    render() {
        return (
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={{ width: '100%' }}>
                        <select
                            value={this.props.selected}
                            //Trigger the handleOptionChange method in the Filters component
                            onChange={this.handleOptionChange}
                            name={this.props.name}
                        >
                            {this.props.options.map(option => {
                                return (
                                    <option
                                        key={option.name}
                                        //If value=undefined then option takes value=textContent
                                        value={option.value === undefined ? '' : option.value}
                                    >
                                        {option.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="icon is-small is-left">
                        <FontAwesomeIcon icon={this.props.icon} />
                    </div>
                </div>
            </div>
        );
    }
}

OptionsFilter.propTypes = {
    options: PropTypes.array.isRequired,
    icon: PropTypes.object.isRequired,
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onOptionChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
};

export default OptionsFilter;