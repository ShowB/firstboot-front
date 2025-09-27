import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import Header from "../layout/Header";
import Constants from "../constants/Constants";

function Home() {
  const [data, setData] = useState('');
  const [list, setList] = useState({});

  useEffect(() => {
    fetchData();
    initCount();
  }, []);

  const fetchData = async () => {
    try {
      const url = Constants.BASE_URL + '/who-is-poor'
      const response = await axiosInstance.get(url);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const initCount = async () => {
    try {
      const url = Constants.BASE_URL + '/poor/list'
      const response = await axiosInstance.get(url);
      console.log(response);
      setList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const addPoorWeight = async (name) => {
    const url = Constants.BASE_URL + `/poor/${name}`
    await axiosInstance.post(url);
    window.location.reload();
  }

  return (
    <div>
      <Header/>
      <h1>홈 화면</h1>
      <h2>불쌍함 수치</h2>
      {Object.entries(list).map(([name, value]) => (
        <ul key={name}>
          {name}: {value}
        </ul>
      ))}
      <h2>현재 결과</h2>
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
