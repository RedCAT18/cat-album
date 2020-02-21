import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { api } from '../api/index';

const Search = () => {
  const [categories, setCategories] = useState([]);
  const [breeds, setBreeds] = useState([]);

  const fetchSearchOptions = async option => {
    await api.getSearchOptions(option).then(res => {
      if (res.length !== 0) {
        if (option === 'categories') setCategories(res);
        if (option === 'breeds') setBreeds(res);
      }
    });
  };

  useEffect(() => {
    fetchSearchOptions('categories');
    fetchSearchOptions('breeds');
  }, []);

  return (
    <div>
      {categories
        ? categories.map(cat => <h1 key={cat.id}>{cat.name}</h1>)
        : null}
      <br />
      {breeds ? breeds.map(brd => <h1 key={brd.id}>{brd.name}</h1>) : null}
    </div>
  );
};

export default Search;
