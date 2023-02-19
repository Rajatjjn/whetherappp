import React from 'react'

export default function Search(props) {
  return (
    <div>
      <input  className="input" type="search" placeholder='🔍ENTER  CITY NAME............' onChange={props.onChange}/>
    </div>
  )
}
