//React Dependencies
import React from 'react';


//Bulma Dependencies
import 'bulma/css/bulma.css';


//Components Dependencies

import Hero from '../components/Hero';
import Filters from '../components/Filters';
import Hotels from '../components/Hotels';

//Moment Dependencies
import moment from 'moment';
import 'moment/locale/es';
//Set locale to spanish
moment.locale('es');

class App extends React.Component {
    constructor() {
        super();
        //Initialize state
        this.state = {
            filters: {
                dateFrom: '',
                dateTo: '',
                country: undefined,
                price: undefined,
                rooms: undefined,
            },
            hotels: [],
        };
        //Bind event handler
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }

    // fetchData() {
    //     fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica')
    //         .then(function (response) {
    //             return response.json();
    //         })
    //         .then(function (myJson) {
    //             this.setState({
    //                 hotels: myJson.hotelsData,
    //             });
    //         });
    // }
    fetchData() {
        this.timeoutId = setTimeout(() => {
            const data = require('../assets/scripts/data');
            this.setState({
                hotels: data.hotelsData,
            });
        }, 1500);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutId);
    }

    handleFilterChange(newFilters) {
        //I'm a lazy person, that's why I didnt use fetchData() here, but imagine everytime I call this method that would the case.
        const data = require('../assets/scripts/data');
        this.setState({
            filters: newFilters,
            hotels: data.hotelsData.filter((hotel) => {
                return (
                    //Until dateFrom or dateTo take a date value, ignore time availability
                    ((newFilters.dateFrom === '' && newFilters.dateTo === '') ||
                        (moment(newFilters.dateFrom) >= moment(hotel.availabilityFrom) &&
                            moment(newFilters.dateTo) <= moment(hotel.availabilityTo))) &&
                    (newFilters.country === undefined
                        ? true
                        : hotel.country === newFilters.country) &&
                    (newFilters.price === undefined
                        ? true
                        : hotel.price == newFilters.price) &&
                    (newFilters.rooms === undefined
                        ? true
                        : hotel.rooms <= newFilters.rooms + 5 &&
                        hotel.rooms > newFilters.rooms - 10)
                );
            }),
        });
    }

    render() {
        return (
            <div>
                <Hero filters={this.state.filters} />
                <Filters
                    filters={this.state.filters}
                    //Passing the function to the child component to allow it trigger changes in the state
                    onFilterChange={this.handleFilterChange}
                />
                <Hotels hotels={this.state.hotels} />
            </div>
        );
    }
}
export default App;

