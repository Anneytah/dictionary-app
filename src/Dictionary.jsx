import React, {useState} from 'react';

const Dictionary = () => {
const [word, setWord] = useState("")

   function showSearch(event){
    event.preventDefault();
    alert(`Searching for ${word} in the Dictionary`)
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