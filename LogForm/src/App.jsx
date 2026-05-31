import { useState } from 'react'
import Form from './components/Form'
import Tost from './components/Tost'

function App() {

  const [showTost, setShowTost] = useState(false);

  const onSuccess = () => {
    
    setShowTost(true);

    setTimeout(() => {
      setShowTost(false);
    }, 3000);

  };



  return (
    <>
      <div className='min-h-screen relative h-full w-full p-[1rem 1rem] sm:py-[4rem] flex items-center justify-center bg-white'>
        <Form onSuccess={onSuccess}/>

        {/* show tost popup message */}
        {
          showTost ? <Tost /> : ""
        }
      </div>
    </>
  )
}

export default App
