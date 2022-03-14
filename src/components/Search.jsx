import React from 'react';
import './SearchStyles.css'


export default function Search(props) {

  const [search, setSearch] = React.useState("");

  return (
    <body>
      <div className="container">
        <h2>WHERE IS THAT POKEMON?</h2>
        <input type="text" placeholder="Enter Pokemon Here" onChange={(e) => setSearch(e.target.value)} className="searchBar"></input>
        <button type="submit" className="searchButton" onClick={() => {props.retrievePokemon(search, 0);}}><i class="fa-solid fa-magnifying-glass"></i></button>
        <div className="filters">
          <button type="submit" onClick={() => {props.retrievePokemon(search, 1);}} className="filterButton">I</button>
          <button type="submit" onClick={() => {props.retrievePokemon(search, 2);}} className="filterButton">II</button>
          <button type="submit" onClick={() => {props.retrievePokemon(search, 3);}} className="filterButton">III</button>
          <button type="submit" onClick={() => {props.retrievePokemon(search, 4);}} className="filterButton">IV</button>
          <button type="submit" onClick={() => {props.retrievePokemon(search, 5);}} className="filterButton">V</button>
          <button type="submit" onClick={() => {props.retrievePokemon(search, 6);}} className="filterButton">VI</button>
          <button type="submit" onClick={() => {props.retrievePokemon(search, 7);}} className="filterButton">VII</button>
          <button type="submit" onClick={() => {props.retrievePokemon(search, 8);}} className="filterButton">VIII</button>
        </div>
      </div>
    </body>
  )
}