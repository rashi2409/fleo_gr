import React from 'react'
import { Grid } from '@material-ui/core'
import RepoCard from './RepoCard'
import '../components/RepoStyles.css'

const Repo = ({ repository, loading, searchName, searchLanguage }) => {
 
   if (loading) {
       return <h2>Loading...</h2>;
   }


  return (
    <Grid container spacing={3} className='gridContainer'>
      {repository.filter((repo) => {
        if(searchName == "" && searchLanguage == ""){
          return repo;
        }
        else if(repo.full_name.toLowerCase().includes(searchName.toLowerCase()) && searchLanguage == ""){
          return repo;
        }
        else if(searchName == "" && repo.language.toLowerCase().startsWith(searchLanguage.toLowerCase())){
          return repo;
        }
        else if(repo.full_name.toLowerCase().includes(searchName.toLowerCase()) && repo.language.toLowerCase().startsWith(searchLanguage.toLowerCase())){
          return repo;
        }
      }).map((repo, index) => (
          <Grid item key={index}>
              <RepoCard repo={repo}/>
          </Grid>
      ))}
    </Grid>
  )
}

export default Repo;