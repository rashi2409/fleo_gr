import React from 'react'
import { InputBase, FormControl, Select, MenuItem } from '@material-ui/core'
import '../components/sortStyles.css'


const Sort = ({ setSearchName, setSearchLanguage, setSortValue}) => {
  return (
    <div className='container'>
        <div className='inputContainer'>
            <InputBase placeholder='Search by name...' className='input' onChange={(e) => setSearchName(e.target.value)}/>
            <InputBase placeholder='Search by Language...' className='inputl' onChange={(e) => setSearchLanguage(e.target.value)}/>
        </div>
        <div className='selectContainer'>
            <FormControl className='form'>
                <Select onChange={(e) => setSortValue(e.target.value)}>
                    <MenuItem value='nameAs'>Name Ascending</MenuItem>
                    <MenuItem value='nameDe'>Name Descending</MenuItem>
                    <MenuItem value='starAs'>Most Stars</MenuItem>
                    <MenuItem value='starDe'>Least Stars</MenuItem>
                </Select>
            </FormControl>
        </div>
    </div>
  )
}

export default Sort;