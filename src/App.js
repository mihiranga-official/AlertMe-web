import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import alert from './images/alert.png';

export default function App() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>

            <img src={alert} alt="AlertMe" width="40" loading='lazy' />
            AlertMe

          </MDBNavbarBrand>
          <MDBNavbarBrand href='#'>


            AlertMe

          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}