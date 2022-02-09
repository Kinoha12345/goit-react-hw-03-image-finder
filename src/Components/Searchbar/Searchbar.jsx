import { Component } from "react";
import PropTypes from 'prop-types';


class SearchBar extends Component {
  state = {
value: ''
  }

  render(){
return (
  <header className="Searchbar">
   <form className="SearchForm" onSubmit={(e)=>{ e.preventDefault();
    this.props.onBtnSubmit(this.state.value)}}>
     <button type="submit" className="SearchForm-button" >
       <span className="SearchForm-button-label">Search</span>
     </button>

     <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={(event)=>{this.setState({value: event.target.value})}}
    />
   </form>
 </header>
)

  }
  
}

SearchBar.prototypes = {
  onBtnSubmit: PropTypes.func.isRequired
}

export default SearchBar