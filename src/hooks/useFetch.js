import { useEffect, useState } from 'react';
import { useAuth } from '@contexts/AuthProvider';

export default function useFetch() {
  const [fetchArgs, startFetching] = useState(null);
  const [fetchStatus, setFetchStatus] = useState('idle');
  const [data, setData] = useState(null);
  const { accessToken } = useAuth();

  async function fetchWrapper() {
    let { url, options = {} } = fetchArgs;
    options = {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      setFetchStatus('fetching');
      const res = await fetch(url, {
        credentials: 'include',
        ...options,
      });
      setFetchStatus(res.status);
      const clonedResponse = res.clone();
      if (res.status === 401) {
        console.log(401);
      }
      if (
        res.headers.get('content-type') === 'application/json; charset=utf-8'
      ) {
        const parsedData = await clonedResponse.json();
        setData(parsedData);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setFetchStatus('failed');
    }
  }

  // Handle updates to fetchArgs
  useEffect(() => {
    if (fetchArgs) {
      fetchWrapper();
    }
  }, [fetchArgs]);

  return [startFetching, fetchStatus, data];
}
