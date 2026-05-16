import { useEffect, useState } from 'react';

const API_KEY = '73cd934d24a2127fede67992';

const useCurrencyRate = (baseCurrency) => {

    const [rates, setRates] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        if (!baseCurrency) return;

        const fetchRates = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`/api/exchangerate/v6/${API_KEY}/latest/${baseCurrency}`);
                const data = await response.json();
                console.log(data);

                setRates(data.conversion_rates)

            } catch (error) {

                setError(error.message || "Fetching data is error");
            } finally {
                setLoading(false);
            }
        }
        fetchRates()
    }, [baseCurrency])

    return { rates, loading, error }
}

export default useCurrencyRate;