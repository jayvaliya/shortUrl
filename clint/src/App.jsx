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
    <div className='container'>
      <form onSubmit={shortenUrl}>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Full URL</label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter URL'
            onChange={(event) => {
              setUrl(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor='exampleInputPassword1'>Short URL: </label>
          <a href={shortUrl} target='_blank'>{shortUrl}</a>
        </div>

        <button type='submit' className='btn btn-primary'>
          Shorten
        </button>
      </form>
    </div>
  );
}

export default App;
