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
      <div>{data}</div>
    </div>
  )
}
