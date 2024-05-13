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
