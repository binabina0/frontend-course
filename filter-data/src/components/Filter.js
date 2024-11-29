import React, { useEffect, useState } from 'react'

export default function Filter() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/filter-data/data.json')
    .then((response) => response.json())
    .then((data) => setData(data));
  }, []);
  return (
    <div>
      <div>Filter</div>
      <input type = "text" value = {search} onChange = {(e) => setSearch(e.target.value)} placeholder='Search...'></input>
      <div>{data}</div>
    </div>
  )
}
