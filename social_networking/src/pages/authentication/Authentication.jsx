import { Grid, Card } from '@mui/material'; // Ensure Card is imported
import React from 'react';
import networking from '../../assets/images/networking.png';
import Loginpage from './Loginpage'; // Ensure LoginPage is imported
import Registerpage from './Registerpage';

const Authentication = () => {
  return (
    <div>
      <Grid container style={{ height: '100vh' }}>
        {/* Image Section */}
        <Grid item xs={12} md={7}>
          <img
            src={networking}
            alt="Authentication"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensures the image fills the space proportionally
            }}
          />
        </Grid>

        {/* Content Section */}
        <Grid
          item
          xs={12}
          md={5}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <div className="px-20 flex flex-col justify-center h-full">
            <Card className="card p-8">
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1 className="logo-center">MovieGram</h1>
                <p className="text-center text-sm w-[70%]">
                  Bringing Cinephiles Together - Celebrate the Magic of Movies
                </p>
              </div>
              {/*<Loginpage /> */}
              <Registerpage/>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
