import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'

import Sort from './components/Sort'
import RepoCard from './components/RepoCard'
import Repo from './components/Repo'
import fetchRepo from './api/githubapi'
import Pagination from './components/Pagination';

import './App.css';



const App = () => {

  const [repository, setRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage] = useState(10);
  const [searchName, setSearchName] = useState('');
  const [searchLanguage, setSearchLanguage] = useState('');
  const [sortValue, setSortValue] = useState('');



  useEffect(() => {
    fetchRepo()
    .then((data) => {
        setRepo(data.items);
    })
  }, []);

  const indexOfLastRepo = currentPage * repoPerPage;
  const indexOfFirstRepo = indexOfLastRepo - repoPerPage;
  const currentRepo = repository.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = pageNumber => setCurrentPage(pageNumber);



  return (
    <div className='App'>
      <Typography variant='h5'> GitHub Repositories </Typography>
      <Sort searchName={searchName} 
            setSearchName={setSearchName}
            searchLanguage={searchLanguage}
            setSearchLanguage={setSearchLanguage}
            setSortValue={setSortValue}
      />
      {console.log(sortValue)}
      <div className='sort'/>
      <Repo repository={currentRepo} 
            loading={loading} 
            searchName={searchName}
            searchLanguage={searchLanguage}
      />

      <Pagination
        repoPerPage={repoPerPage}
        totalRepo={repository.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

export default App;
