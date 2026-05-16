import React from 'react'

function CurrencySelector({ label, currencies, selectedCurrency, onChange }) {
    return (
        <div className='w-full'>
            <label htmlFor="amount" className='mb-2 text-gray-400 text-sm'>{label}</label>
            <select className='w-full rounded-md border text-sm font-medium p-2' value={selectedCurrency} onChange={(e) => onChange(e.target.value)}>
                {currencies.map((currency, index) => <option value={currency} key={index}>{currency}</option>)}
            </select>
        </div>
    )
}

export default CurrencySelector
