import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TechQuizHome from './components/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
         <TechQuizHome />
      </>
  );
}

export default App
