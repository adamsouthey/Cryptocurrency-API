import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      coins : null,
      error: null
    };
  }

  componentDidMount() {

    Axios
    .get('https://rest.coinapi.io/v1/exchanges', {
      header: "X-CoinAPI-Key: 41A8A309-B105-45DF-AF4E-775720D88BC4"
    })
    .then(res => {
      const coins = res.data;
      console.log(coins);
      this.setState({coins});
    })
    .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        {!this.state.coins && !this.state.error && <p>Loading...</p>}
        {this.state.error && [
          <h1 key={1}>Oops! There was an error with your request</h1>,
          <p key={2}>{this.state.error}</p>
        ]}

        {this.state.coins && [
          <ul>
            <div className="center">
              {this.state.coins.map(coins =>
                <li key={coins.name}>
                  <h3 key={4}>ExchangeID: {coins.exchange_id}</h3>
                  <h3 key={9}>Website: {coins.website}</h3>
                  <h3 key={5}>Name: {coins.name}</h3>
                  <h3 key={6}>Data Start: {coins.data_start}</h3>
                  <h3 key={7}>Data End: {coins.data_end}</h3>

                  <hr/>
                </li>
              )}
            </div>
          </ul>


        ]}
      </div>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
