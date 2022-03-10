import React from 'react';
import './SearchStyles.css'


export default function Search(props) {

  const [search, setSearch] = React.useState("");
  
  return (
    <div className="container">
      <input type="text" placeholder="Enter Pokemon Here" onChange={(e) => setSearch(e.target.value)}></input>
      <button type="submit"><i class="fa-solid fa-magnifying-glass" onClick={(e) => props.retrievePokemon(search)}></i></button>
      <div className="filters">
        <button type="submit" onClick={(e) => props.retrievePokemon(search)}>I</button>
        <button type="submit" onClick={(e) => props.retrievePokemon(search)}>II</button>
        <button type="submit" onClick={(e) => props.retrievePokemon(search)}>III</button>
        <button type="submit" onClick={(e) => props.retrievePokemon(search)}>IV</button>
        <button type="submit" onClick={(e) => props.retrievePokemon(search)}>V</button>
        <button type="submit" onClick={(e) => props.retrievePokemon(search)}>VI</button>
        <button type="submit" onClick={(e) => props.retrievePokemon(search)}>VII</button>
        <button type="submit" onClick={(e) => props.retrievePokemon(search)}>VIII</button>
      </div>
    </div>
  )
}