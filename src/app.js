import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      cryptos: [],
      error: null
    };
  }
  componentDidMount() {
    Axios
    .get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTE,XRP,XLM,XMR,GBYTE&tsyms=GBP')
    .then(res => {
      const cryptos = res.data.DISPLAY;
      console.log(cryptos);
      this.setState({cryptos: cryptos});
    })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
      <div className="row">

        {Object.keys(this.state.cryptos).map((key) => (
          <div className='col-md-4'>
          <div id="crypto-container">
            <ul>

                <h2 className="left">Coin: {key}</h2>
                <li><span className="right">Current Price: {this.state.cryptos[key].GBP.PRICE} </span></li>
                <li><span className="right">High24Hr: {this.state.cryptos[key].GBP.HIGH24HOUR} </span></li>
                <li><span className="right">Low24Hr: {this.state.cryptos[key].GBP.LOW24HOUR} </span></li>
                <li><span className="right">Change24Hr: {this.state.cryptos[key].GBP.CHANGE24HOUR} </span></li>
                <li><span className="right">Change%24Hr{this.state.cryptos[key].GBP.CHANGEPCT24HOUR} </span></li>
                <li><span className="right">OpeningDayPrice: {this.state.cryptos[key].GBP.OPENDAY} </span></li>
                <li><span className="right">Trading Supply: {this.state.cryptos[key].GBP.SUPPLY} </span></li>

            </ul>
          </div>
          </div>
        ))}
      </div>
      </div>
    )}


    // componentDidMount() {
    //   Axios
    //   .get('https://rest.coinapi.io/v1/exchanges', {
    //     header: "X-CoinAPI-Key: 41A8A309-B105-45DF-AF4E-775720D88BC4"
    //   })
    //   .then(res => {
    //     const coins = res.data;
    //     console.log(coins);
    //     this.setState({coins});
    //   })
    //   .catch(err => console.log(err));
    // }
    //
    // render() {
    //   return (
    //     <main className="container">
    //       {!this.state.coins && !this.state.error && <p>Loading...</p>}
    //       {this.state.error && [
    //         <h1 key={1}>Oops! There was an error with your request</h1>,
    //         <p key={2}>{this.state.error}</p>
    //       ]}
    //
    //       {this.state.coins && [
    //         <ul>
    //           <div className="center">
    //             {this.state.coins.map(coins =>
    //               <li key={coins.name}>
    //                 <h3 key={4}>ExchangeID: {coins.exchange_id}</h3>
    //                 <h3 key={9}>Website: {coins.website}</h3>
    //                 <h3 key={5}>Name: {coins.name}</h3>
    //                 <h3 key={6}>Data Start: {coins.data_start}</h3>
    //                 <h3 key={7}>Data End: {coins.data_end}</h3>
    //                 <h3 key={8}>Data Trade Count: {coins.data_trade_count}</h3>
    //
    //                 <hr/>
    //               </li>
    //             )}
    //           </div>
    //         </ul>
    //
    //
    //       ]}
    //     </main>
    //
    //   );
    // }
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
