import React from 'react'

const Phonetic = (props) => {
  return (
    <div>
        <a href= {props.phonetics.audio} target='_blank'>Listen</a> {""}
        {props.phonetics.text}
    </div>
  )
}

export default Phonetic