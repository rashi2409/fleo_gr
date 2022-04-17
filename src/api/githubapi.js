import axios from 'axios'

const fetchRepo = async () => {
    try{
        const res = await axios.get('https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc');
        console.log(res.data);  
        return res.data; 
    }
    catch(error){
        console.log(error);
    }
};

export default fetchRepo;
