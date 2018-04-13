import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      country : null,
      error: null
    };
  }


  componentDidMount() {

    axios.get('https://restcountries.eu/rest/v2/all')
    .then(res => {
      const country = res.data;
      console.log(country);
      this.setState({country});
    })
    .catch(err => console.log(err));
  }


  render() {
    return (
      <main className='container'>
        {!this.state.country && !this.state.error && <p>Loading...</p>}

        {this.state.error && [
          <h1 key={1}>Oops! There was an error with your request</h1>,
          <p key={2}>{this.state.error}</p>
        ]}

        {this.state.country && [
          <ul>
            <div class="center">
              {this.state.country.map(country =>

                <li key={country.name}>

                  <img key={3} src={country.flag} />
                  <br />
                  <h3 key={4}>Name: {country.name}</h3>
                  <h3 key={5}>Capital: {country.capital}</h3>
                  <h3 key={6}>Region: {country.region}</h3>
                  <h3 key={7}>LatLng: {country.latlng}</h3>

                  <hr/>
                </li>
              )}
        </div>
          </ul>


        ]}
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
