import React, { useEffect, useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const {name, price} = state

  useEffect(() => {
    console.log('called everytime')
  })

  useEffect(() => {
    console.log('called once')
  }, [])

  useEffect(() => {
    console.log('called when name changed')
  }, [name])


  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  )
}

App.defaultProps = {
  name: 'sample',
  price: 1000
}

export default App
