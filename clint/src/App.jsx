import { useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const shortenUrl = async (e) => {
    e.preventDefault();
    const data = await axios.post('/rd/shorten', { url });
    console.log(data);
    // const data = await rawData.json();
    setShortUrl(data?.data?.url);
  };

  return (
    <div className='container mt-5'>
      <h1>URL Shortner</h1>
      <form onSubmit={shortenUrl}>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Full URL</label>
          <input
            type='text'
            className='form-control'
            placeholder='Enter full URL'
            onChange={(event) => {
              setUrl(event.target.value);
            }}
          />
        </div>

        <button type='submit' className='btn btn-primary my-3'>
          Shorten
        </button>

        <div>
          <label htmlFor='exampleInputPassword1'>Short URL: </label>
          <a href={shortUrl} target='_blank'>{shortUrl}</a>
        </div>

      </form>
    </div>
  );
}

export default App;
