import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Card } from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body className='font-body bg-amber-300 flex justify-center place-items-center h-screen'>
      <Card/>
    </body>
    </>
  )
}

export default App
