import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AxiosInstance from '../api/AxiosInstance';
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import MainContent from "../layout/MainContent";
import './Partner.css';

function Partner() {
  const [partners, setPartners] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await AxiosInstance.get('/api/partner/v1');
        setPartners(response.data.partners);
      } catch (error) {
        console.error("Error fetching partners:", error);
      }
    };

    fetchPartners();
  }, []);

  return (
    <div className="partner-container">
      <Header/>
      <div className="main-layout">
        <Sidebar menuKey='partner' location={location}/>
        <MainContent>
          <div>
            <h2>파트너 관리</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #ddd' }}>
                  <th style={{ padding: '8px', textAlign: 'left' }}>ID</th>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Partner Code</th>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Partner Name</th>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Email</th>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Tel</th>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Created By</th>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Created At</th>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Updated By</th>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Updated At</th>
                </tr>
              </thead>
              <tbody>
                {partners.map((partner) => (
                  <tr key={partner.id} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}>{partner.id}</td>
                    <td style={{ padding: '8px' }}>{partner.partnerCode}</td>
                    <td style={{ padding: '8px' }}>{partner.partnerName}</td>
                    <td style={{ padding: '8px' }}>{partner.email}</td>
                    <td style={{ padding: '8px' }}>{partner.tel}</td>
                    <td style={{ padding: '8px' }}>{partner.createdBy}</td>
                    <td style={{ padding: '8px' }}>{partner.createdAt}</td>
                    <td style={{ padding: '8px' }}>{partner.updatedBy}</td>
                    <td style={{ padding: '8px' }}>{partner.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MainContent>
      </div>
    </div>
  );
}

export default Partner;
