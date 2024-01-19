import { useState } from 'react'
import { CardProfile } from './components/CardProfile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body className='font-body bg-amber-300 flex justify-center place-items-center h-screen'>
      <CardProfile/>
    </body>
    </>
  )
}

export default App
