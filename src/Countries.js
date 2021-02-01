import React from "react";
import axios from 'axios';
import './Country.css';

function Country(props) {
    const country = props.country;
    return (
        <div className='Country'>
            {country.name} -
            {country.capital}
            <img src={country.flag} />
            
            
        </div>
    )
}

class Countries extends React.Component {
    constructor(props) {
        console.log('Jestem constructor')
        super(props);
        this.state = {
            countries: [],
            loading: false
        }
    }

    componentDidMount() {
       this.setState({loading: true});
       axios.get('https://restcountries.eu/rest/v2/all').then(res => {
           this.setState({
               countries: res.data,
               loading: false
           })
           console.log(this.state.countries);
       })
    }
    
    render() { 
        console.log('Jestem render');
        const countries = this.state.countries.map((country) => (<Country country={country} key={country.name}> {country.name} </Country>))
        return (
            <div>
                {countries}
            </div>
        )
    }
}



export {Countries, Country}