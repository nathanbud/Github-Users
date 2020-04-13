import React,{Component} from 'react';
import './App.css';
import Search from './components/Search';
import CardList from './components/CardList';

class App extends Component {

    constructor(){
      super();

      this.state = {
        data:[{
          id: 23,
          pic: "https://placehold.it/150",
          login: "dfdfdff"
        },
        {
          id: 45,
          login: "NAthanie"
        },

        ]
      }
    }
    addData = (newdata) =>{
      const alldata = [...this.state.data, newdata]
      console.log(alldata);
     this.setState({
       data:alldata
     })
    }

    render(){


      return (
        <div className="App">
          <header className="App-header">
           
          </header>
          <Search data = {this.state.data} addData = {this.addData}/>
          <CardList data = {this.state.data}/>
          
        </div>
      );
      }
    }
  

export default App;
