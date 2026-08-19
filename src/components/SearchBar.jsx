import React,{useState} from 'react'
import "./styles/SearchBar.css"


const SearchBar = ({onSearch,onClear}) => {
  const [query,setQuery]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault()

    if(query.trim()==="") return;
    onSearch(query)
  }

  const handleClear=()=>{
    setQuery("");
    onClear();
  }


  return (
    <form onSubmit={handleSubmit} className='search-bar'>
    <input 
    className='input' 
    type="text" 
    placeholder='Search for a Recipe...'
    value={query}
    onChange={(e)=>setQuery(e.target.value)}
    />
    <button className='btn1' type="button">Search</button>
    {
      query && (
        <button type="button" onClick={handleClear} className='clear-btn'>X</button>
      )
    }

    </form>


  )
}

export default SearchBar
