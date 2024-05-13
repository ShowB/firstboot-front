import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../layout/Header";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://54.180.237.91:50031/who-is-poor');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <Header />
      <h1>홈 화면</h1>
      <ul>
        불쌍한 사람: {data}
      </ul>
    </div>
  );
}

export default Home;
