import React from 'react'
import { Typography, Card, CardContent } from '@material-ui/core'
import './RepoStyles.css'
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded'
import ForkLeftIcon from '@material-ui/icons/CallSplitRounded'


const RepoCard = ({ repo }) => {
  return (
      <Card elevation={1} style={{height:'fit-content', display:'flex', flexDirection:'column'}}>

          <CardContent>
            <Typography variant="h6" className='name' onClick={() => window.open(repo.html_url, '_blank')}>{repo.full_name}</Typography>
            <Typography variant="subtitle2" color='textSecondary'>Owned by: {repo.owner.login}</Typography>

            <Typography variant="subtitle2">{repo.description}</Typography>
            <Typography  variant="body2" color="textSecondary" >
                <div className='subtitle'>
                    <div className='star'>
                    <StarOutlineRoundedIcon  /> {repo.stargazers_count}
                    </div>  
                    <div className='fork'>
                        <ForkLeftIcon /> {repo.forks_count}
                    </div>
                    <div className='language'>
                        Langauge: {repo.language}
                    </div>
                </div>
            </Typography>
          </CardContent>

      </Card>
  )
}

export default RepoCard;
