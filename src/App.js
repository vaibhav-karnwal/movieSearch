import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Section from './components/Section'
import Header from './components/Header'
import {DataProvider} from './components/Context'

class App extends React.Component{
  render(){
    return (
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
