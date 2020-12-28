import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

// Material IU imports
import Button from '@material-ui/core/Button';

class App extends Component {
  state = { advice : "" }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice")
      .then((response) => {
        const {advice } = response.data.slip;
        this.setState({advice : advice})
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() { 
    const {advice } = this.state;
    return ( 
      <div className="App">
        <div className="card">
          <h2 className="heading">{advice}</h2>
          <Button onClick={this.fetchAdvice} variant="outlined" color="secondary">
            GIVE ADVICE
          </Button>

        </div>
      </div>
     );
  }
}
 
export default App;