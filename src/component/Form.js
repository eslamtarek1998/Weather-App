import React from 'react'

export default function Form(props) {
  return (
    <div>
      <form onSubmit={props.getWeather}>
            <input  type="text" name='city' placeholder='City'/>
            <input  type="text" name='country' placeholder='Country' />
            <button>Get Weather</button>
      </form>
    </div>
  )
}

