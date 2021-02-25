import React, { useState } from "react";
import { formatData } from "../utility/formatData";
import SearchList from "./SearchList";
import "./Search.css";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState([]);
  const handleChange = (event) => {
    setQuery(event.target.value);
    fetchResponse(event.target.value);
  };
  const fetchResponse = async (query) => {
    const searchUrl = `https://voyager.goibibo.com/api/v2/flights_search/find_node_by_name_v2/?limit=15&search_query=${query}&v=2`;
    return await fetch(searchUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setResponse(formatData(data.data));
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="container">
      <h2>Search Airport By CityDetail</h2>
      <input
        list="data"
        value={query}
        className="search-city"
        placeholder="Search..."
        onChange={handleChange}
      />
      <datalist className="search-city" id="data">
        <SearchList data={response} />
      </datalist>
    </div>
  );
};
export default SearchBar;
