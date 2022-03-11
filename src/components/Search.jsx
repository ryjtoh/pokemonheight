import React from 'react';
import './SearchStyles.css'


export default function Search(props) {

  const [search, setSearch] = React.useState("");
  
  return (
    <div className="container">
      <input type="text" placeholder="Enter Pokemon Here" onChange={(e) => setSearch(e.target.value)}></input>
      <button type="submit"><i class="fa-solid fa-magnifying-glass" onClick={() => {props.retrievePokemon(search, 0);}}></i></button>
      <div className="filters">
        <button type="submit" onClick={() => {props.retrievePokemon(search, 1);}}>I</button>
        <button type="submit" onClick={() => {props.retrievePokemon(search, 2);}}>II</button>
        <button type="submit" onClick={() => {props.retrievePokemon(search, 3);}}>III</button>
        <button type="submit" onClick={() => {props.retrievePokemon(search, 4);}}>IV</button>
        <button type="submit" onClick={() => {props.retrievePokemon(search, 5);}}>V</button>
        <button type="submit" onClick={() => {props.retrievePokemon(search, 6);}}>VI</button>
        <button type="submit" onClick={() => {props.retrievePokemon(search, 7);}}>VII</button>
        <button type="submit" onClick={() => {props.retrievePokemon(search, 8);}}>VIII</button>
      </div>
    </div>
  )
}