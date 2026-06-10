import React, { useState } from 'react'
import Card from './components/Card'

function App() {

   const [principleAmount, setPrincipleAmount] = useState(0);
   const [years, setYears] = useState(0)
   const [intrestRate, setIntrestRate] = useState(0);
   const [monthlyCountribution, setMonthlyCountribution] = useState(0);
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
