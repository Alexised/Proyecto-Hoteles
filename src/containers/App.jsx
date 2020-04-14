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


    // async componentDidMount() {
    //     try {
    //         const response = await fetch();
    //         if (!response.ok) {
    //             throw Error(response.statusText);
    //         }
    //         const json = await response.json();
    //         this.setState({ hotels: json, hotelsLoaded: true });
    //         this.handleFilterChange(this.state.filters)
    //     }
    //     catch (error) { console.log(error); }
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

    handleFilterChange(Filters) {
        //I'm a lazy person, that's why I didnt use fetchData() here, but imagine everytime I call this method that would the case.
        const data = require('../assets/scripts/data');
        this.setState({
            filters: Filters,
            hotels: data.hotelsData.filter((hotel) => {
                return (
                    //Until dateFrom or dateTo take a date value, ignore time availability
                    ((Filters.dateFrom === '' && Filters.dateTo === '') ||
                        (moment(Filters.dateFrom) >= moment(hotel.availabilityFrom) &&
                            moment(Filters.dateTo) <= moment(hotel.availabilityTo))) &&
                    (Filters.country === undefined
                        ? true
                        : hotel.country === Filters.country) &&
                    (Filters.price === undefined
                        ? true
                        : hotel.price == Filters.price) &&
                    (Filters.rooms === undefined
                        ? true
                        : hotel.rooms <= Filters.rooms + 5 &&
                        hotel.rooms > Filters.rooms - 10)
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

