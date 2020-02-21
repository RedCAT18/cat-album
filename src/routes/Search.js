import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { api } from '../api/index';

const Search = () => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    await api.getCategories().then(res => {
      if (res.length !== 0) {
        setCategories(res);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {categories
        ? categories.map(cat => <h1 key={cat.id}>{cat.name}</h1>)
        : null}
    </div>
  );
};

export default Search;
