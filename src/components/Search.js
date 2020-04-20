import React,{Component} from 'react'
import axios from 'axios'

class Search extends Component {
   
state = {
        search: ''
    };
    
     handleSubmit = async(e) =>{
        e.preventDefault();
      //console.log(this.data);  
        const res = await 
        axios.get(`https://api.github.com/users/${this.state.search}`);
        this.props.addData(res.data );
        this.setState({
            search: ''
        })
    }
     handleSearch = (e) =>{
        this.setState({
            search: e.target.value,
        })
    }

    

    render(){
       
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" onChange = {this.handleSearch} value = {this.state.search} placeholder = "Search Username" />
                <button>SEARCH</button>
                    </form>
            </div>
        )
    }

    }
        

export default Search