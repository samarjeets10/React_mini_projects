import React, { useState } from 'react'
import Card from './components/Card'

function App() {

   const [principleAmount, setPrincipleAmount] = useState();
   const [years, setYears] = useState()
   const [intrestRate, setIntrestRate] = useState();
   const [monthlyCountribution, setMonthlyCountribution] = useState();
   const [depositMethod, setDepositMethod] = useState('Savings Account')

  return (
    <>
      <div className='min-h-screen bg-lime-50 flex items-center justify-center px-12 py-8'>
        <Card 
        principleAmount={principleAmount}
        setPrincipleAmount={setPrincipleAmount}
        years={years}
        setYears={setYears}
        intrestRate={intrestRate}
        setIntrestRate={setIntrestRate}
        monthlyCountribution={monthlyCountribution}
        setMonthlyCountribution={setMonthlyCountribution}
        depositMethod={depositMethod}
        setDepositMethod={setDepositMethod}
        />
      </div>
    </>
  )
}

export default App
