import { AsyncPaginate } from "react-select-async-paginate"
import { useState } from 'react';
import { Geo_Api_URL, geoApioptions } from "../api";

export default function SearchBar({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  const loadOptions = (inputValue) => {
    return fetch(`${Geo_Api_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,geoApioptions)
      .then((response) => response.json)
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.logitude}`,
              label: `${city.name} ${city.countyCode}`,
            }
          })
        }
      })
  
  }
return (
  <AsyncPaginate
    value={search}
    placeholder='Enter city name'
    onChange={handleOnChange}
    debounceTimeout={600}
    loadOptions={loadOptions}

  ></AsyncPaginate>
)
}
