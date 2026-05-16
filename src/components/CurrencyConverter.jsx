import React, { useEffect, useState } from 'react'
import useCurrencyRate from '../hooks/useCurrencyRate'
import CurrencySelector from './CurrencySelector';

function CurrencyConverter() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("MMK");
    const [convertAmount, setConvertAmount] = useState(null);

    const convertCurrency = () => {
        if (!(rates[toCurrency])) {
            setConvertAmount("N/A");
            return;
        }
        setConvertAmount((amount * rates[toCurrency]).toFixed(2))
        console.log(convertAmount);
    }

    useEffect(() => {
        setConvertAmount(null);
    }, [amount])


    const { rates, loading, error } = useCurrencyRate(fromCurrency);

    return (
        <div className='max-w-md mx-auto bg-white p-7 rounded-md'>
            <h2 className='py-4 font-bold text-2xl items-center'>Currency Converter</h2>
            <div className='mb-4'>
                <label htmlFor="amount" className='mb-2 text-gray-400 text-sm'>Amount</label>
                <input type="number" className='w-full rounded-md border p-2' value={amount}
                    onChange={(e) => onChange(e.target.value)} />
            </div>

            <div className='flex gap-3 mb-4'>
                <CurrencySelector label={"From"} currencies={Object.keys(rates)} selectedCurrency={fromCurrency} onChange={setFromCurrency} />
                <CurrencySelector label={"To"} currencies={Object.keys(rates)} selectedCurrency={toCurrency} onChange={setToCurrency} />
            </div>
            <button className='w-full bg-blue-500 text-black p-3 rounded-md hover:bg-blue-700 duration-150 cursor-pointer'
                onClick={convertCurrency}>
                Convert
            </button>
            <div className='mt-4 text-center font-medium text-xl'>
                {loading && <p className='text-gray-500'>Loading.....</p>}
                {error && <p className='text-red-500'>Error......</p>}
                {convertAmount === null && <p className='text-gray-500'>Click the select amount</p>}
                {!loading && !error && convertAmount !== null &&
                    (<p>{amount} {fromCurrency} = {convertAmount} {toCurrency}</p>)}
            </div>
        </div >

    )
}

export default CurrencyConverter
