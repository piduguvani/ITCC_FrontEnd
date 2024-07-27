import React, { useState, useEffect } from 'react';
import useGet from './ServiceHelper/Api/useGet';
import usePost from './ServiceHelper/Api/usePost';

export default function App() {
  const { data, loading, error } = useGet('/objects'); // replace with your endpoint
  const [postData, setPostData] = useState(null);
  const [triggerPost, setTriggerPost] = useState(false);
  
  const { data: data1, loading: loading1, error: error1 } = usePost('/objects', postData, triggerPost);

  useEffect(() => {
    if (triggerPost) {
      setTriggerPost(false); // Reset triggerPost after post request
    }
  }, [data1, error1]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleClick = () => {
    setPostData({ "name": "kartik", "age": 30 });
    setTriggerPost(true);
  };

  return (
    <>
      <div>
        <h1>Data:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      <div>
        <button onClick={handleClick}>Post Data</button>
        {loading1 && <p>Loading...</p>}
        {error1 && <p>Error: {error1.message}</p>}
        {data1 && <pre>{JSON.stringify(data1, null, 2)}</pre>}
      </div>
    </>
  );
}
