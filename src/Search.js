import React from 'react'
import axios from 'axios';
import {Country} from "./Countries";
import "./Search.css"
 
class Search extends React.Component {
        constructor(props) {
          super(props);
          this.state = {countries: [], loading: false};
      
          this.handleChange = this.handleChange.bind(this);
        }
      
        handleChange(event) {
          const name = event.target.value;
          const url = `https://restcountries.eu/rest/v2/name/${name}`;
          console.log(url);
          this.setState({loading: true});
          axios.get(url).then((res) => {
            this.setState({countries: res.data, loading: false})

        })
        }
      
      
        render() {
            const countries = this.state.countries.map((country) => (<Country country={country} key={country.name}> {country.name} </Country>))
            return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Country name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </form>
                {!this.state.loading && countries}
                
            </div>
            
          );
        }
}


export default Search;