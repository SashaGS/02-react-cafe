// import { useState } from 'react'

import CafeInfo from '../CafeInfo/CafeInfo'

import css from './App.module.css' 

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <div className={css.app}></div>
     <CafeInfo/>
    </>
  )
}

export default App
