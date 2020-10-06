import React from 'react';
import './App.css';

class Odometer  extends React.Component{
  constructor(){
      super();
      this.state = {
          // foods = [],
          odometer: 0,
          
      };
  }

  changeOdometer(val){

    var current = this.state.odometer
    current += val
    if (current > 9999){
      current -=  10000
    }
    this.setState({
      odometer : current,
    });
  }

  reset(){
    this.setState({
      odometer : 0,
    })
  }

  render(){
      console.log(this.state.hungerLevel);
      return (
          <>
          <main className='main'>
              <h3 className='title'>The Value Of Odometer</h3>
              <h3 className='title'>{('0000' + this.state.odometer).substr(String(this.state.odometer).length)}</h3>
              <div  className='allbuttons'>
              <button onClick={ () => this.changeOdometer(1)} className='button'> Add 1</button>
              <button onClick={ () => this.changeOdometer(10)} className='button'> Add 10</button>
              <button onClick={ () => this.changeOdometer(100)} className='button'> Add 100</button>
              <button onClick={ () => this.changeOdometer(1000)} className='button'> Add 1000</button><br></br>
              </div>
              <button onClick={ () => this.reset()} className='reset'> Reset </button>
          </main>
          </>
      );
  }

}


function Header(props){
  return(
  <header className='header'>
  <h1>Welcome In {props.appName}</h1>
  </header>
  );
}



function Footer(props){
return(
  <footer className='footer'>
    <p>All rights are saved for {props.name} </p>
  </footer>
)

}




function App() {
  return (
    <div className="App">
      <Header appName='Odometer App' />
      <Odometer  />
      <Footer name = 'Mohammad Nimrawi' />
      

    </div>
  );
}

export default App;
