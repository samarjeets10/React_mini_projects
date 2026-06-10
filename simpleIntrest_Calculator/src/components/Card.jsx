import React from 'react'

function Card(
    {
        principleAmount,
        setPrincipleAmount,
        years,
        setYears,
        intrestRate,
        setIntrestRate,
        monthlyCountribution,
        setmonthlyCountribution,
        depositMethod,
        setDepositMethod
    }
) {


    const accountType = [
        'Savings account',
        'Money market/High yielding account',
        'Compound interest account',
        'Current account'
    ];

  return (
    <div className='w-full h-full py-8 px-6 bg-white rounded-2xl border-2 border-neutral-200 flex items-stretch gap-8'>
        
        <div className="left w-1/2 h-full py-4 px-2 flex flex-col gap-6">
            <div>
                <h2 className='text-2xl font-semibold'>Calculate your compound intrest</h2>
                <p className='text-md mt-2 text-neutral-500 '>Compound intesrt is when the intrest you earn, earn intrest</p>
            </div>

            <div className='w-full flex mt-2 items-center justify-between gap-12'>
                <div className='w-full flex flex-col'>
                    <label className='text-lg font-normal'>Your savings amount</label>
                    <input 
                    value={principleAmount}
                    onChange={(e) => setPrincipleAmount(Number(e.target.value))}
                    className='mt-2 py-1 text-md border-b-2 outline-none border-gray-300 text-lg'
                    type="number" 
                    placeholder='eg. 20000' />
                </div>
                <div className='w-full flex flex-col'>
                    <label className='text-lg font-normal'>Your will be saving</label>
                    <input 
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className='mt-2 py-1 text-md border-b-2 outline-none border-gray-300 text-lg'
                    type="number" 
                    placeholder='eg. 100' />
                </div>
            </div>

            <div className='w-full flex mt-2 items-center justify-between gap-12'>
                <div className='w-full flex flex-col'>
                    <label className='text-lg font-normal'>Rate of return</label>
                    <input 
                    value={intrestRate}
                    onChange={(e) => setIntrestRate(Number(e.target.value))}
                    className='w-full mt-2 py-1 text-md border-b-2 outline-none border-gray-300 text-lg'
                    type="number" 
                    placeholder='eg. 10' />
                </div>
                <div className='w-full flex flex-col'>
                    <label className='text-lg font-normal'>How long you will contribute</label>
                    <input 
                    value={monthlyCountribution}
                    onChange={(e) => setmonthlyCountribution(Number(e.target.value))}
                    className='mt-2 py-1 text-md border-b-2 outline-none border-gray-300 text-lg'
                    type="number" 
                    placeholder='per months' />
                </div>
            </div>

            <div className='w-full mt-6 flex flex-col gap-4'>
                <div>
                    <h3 className='text-xl font-normal'>Prefered deposit method</h3>
                </div>

                <div className='w-full flex flex-wrap gap-4'>
                    {
                        accountType.map((type) => (
                            <div key={type} className={`w-fit px-2 py-2  rounded-lg flex items-center gap-2 border-1 border-neutral-300 cursor-pointer transition-colors
                            ${
                                depositMethod === type
                                ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                                : 'border-neutral-300 hover:bg-neutral-50'
                            }`}>
                                <input 
                                name="depositMethod"
                                checked={depositMethod === type}
                                onChange={(e) => setDepositMethod(e.target.value)}
                                type="radio" />
                                <p>{type}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>

        <div className='right w-1/2 h-full p-6 bg-green-900 text-white rounded-2xl flex flex-col gap-6'>
            <div>
                <h2 className='text-xl font-semibold'>Your estimated saving</h2>
            </div>

            <div className='w-full pb-4 mt-4 border-b-2 border-neutral-400 flex items-center justify-between gap-2'>
                <h3 className='text-md text-normal'>Your savings(excludind all taxes)</h3>
                <span className='text-xl font-semibold flex items-center gap-1'><i class="ri-money-rupee-circle-line"></i> <p>143,982.0</p></span>
            </div>
            <div className='w-full pb-4 mt-4 border-b-2 border-neutral-400 flex items-center justify-between gap-2'>
                <h3 className='text-md text-normal'>Total amount contributed</h3>
                <span className='text-xl font-semibold flex items-center gap-1'><i class="ri-money-rupee-circle-line"></i> <p>39,890</p></span>
            </div>
            <div className='w-full pb-4 mt-4 border-b-2 border-neutral-400 flex items-center justify-between gap-2'>
                <h3 className='text-md text-normal'>Total intrest</h3>
                <span className='text-xl font-semibold flex items-center gap-1'><i class="ri-money-rupee-circle-line"></i> <p>9890</p></span>
            </div>

            <div className='w-full p-4 mt-2 bg-lime-300 rounded-xl text-green-800 flex items-center justify-between'>
                <h3 className='text-md text-normal'>Your estimated savings</h3>
                <span className='text-xl font-semibold flex items-center gap-1'><i class="ri-money-rupee-circle-line"></i> <p>9890</p></span>
            </div>

            <div className='w-full mt-6 flex items-center justify-between gap-4'>
                <div>
                    <p className='text-sm'>Compare your savings account yealds by KPIs</p>
                </div>

                <button className='text-sm px-6 py-2 bg-emerald-600 rounded-md cursor-pointer'>
                    Compare
                </button>
            </div>

        </div>

    </div>
  )
}

export default Card
