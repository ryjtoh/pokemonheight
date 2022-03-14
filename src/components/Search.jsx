import React from 'react';
import './SearchStyles.css'


export default function Search(props) {

  const [search, setSearch] = React.useState("");

  return (
    <body>
      <div className="container">
        <h2>WHERE IS THAT POKEMON?</h2>
        <input type="text" placeholder="Enter Pokemon Here" onChange={(e) => setSearch(e.target.value)} className="searchbar"></input>
        <button type="submit" className="searchbar" onClick={() => {props.retrievePokemon(search, 0);}}><i class="fa-solid fa-magnifying-glass"></i></button>
        <div>
          <button type="submit" onClick={() => {props.retrievePokemon(search, 1);}} className="filters">I</button>
          <button type="submit" onClick={() => {props.retrievePokemon(search, 2);}} className="filters">II</button>
          <button type="submit" onClick={() => {props.retrievePokemon(search, 3);}} className="filters">III</button>
          <button type="submit" onClick={() => {props.retrievePokemon(search, 4);}} className="filters">IV</button>
          <button type="submit" onClick={() => {props.retrievePokemon(search, 5);}} className="filters">V</button>
          <button type="submit" onClick={() => {props.retrievePokemon(search, 6);}} className="filters">VI</button>
          <button type="submit" onClick={() => {props.retrievePokemon(search, 7);}} className="filters">VII</button>
          <button type="submit" onClick={() => {props.retrievePokemon(search, 8);}} className="filters">VIII</button>
        </div>
      </div>
    </body>
  )
}