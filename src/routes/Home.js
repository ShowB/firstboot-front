import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../layout/Header";
import Constants from "../constants/Constants";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const url = Constants.BASE_URL + '/who-is-poor'
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addPoorWeight = async (name) => {
    const url = Constants.BASE_URL + `/poor/${name}`
    await axios.post(url);
    window.location.reload();
  }

  return (
    <div>
      <Header />
      <h1>홈 화면</h1>
      <ul>
        불쌍한 사람: {data}
      </ul>
      <div style={{marginTop: '0.2em', display: 'block'}}>
        <button onClick={() => addPoorWeight('SHOWB')}>창섭이가 더 불쌍해</button>
      </div>
      <div style={{marginTop: '0.2em', display: 'block'}}>
        <button onClick={() => addPoorWeight('SUZY')}>아현이가 더 불쌍해</button>
      </div>
    </div>
  );
}

export default Home;
