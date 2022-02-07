import { useState } from "react"

const SearchBar = ({onBtnSubmit}) => {
   const[value,setValue]= useState('')
  
    return(
        <header className="searchbar">
  <form className="form" onSubmit={(e)=>{ e.preventDefault();onBtnSubmit(value)}}>
    <button type="submit" className="button" >
      <span className="button-label">Search</span>
    </button>

    <input
      value={value}
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={(event)=>{setValue(event.target.value)}}
    />
  </form>
</header>
    )
}
export default SearchBar