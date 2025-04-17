import React, {useState} from 'react';
import axios from "axios";

const Dictionary = () => {
const [word, setWord] = useState("")


function search(response){
    console.log(response.data[0])
}

   function showSearch(event){
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
     axios.get(apiUrl).then(search)
   }
   
   function handleChange (event){
       setWord (event.target.value);
   }

  return (
    <div>
        <form onSubmit={showSearch}>
            <input placeholder='Type a word...' type='search' className='border-2 border-black rounded-sm ' onChange={handleChange}/>
        </form>
    </div>
  )
}

export default Dictionary