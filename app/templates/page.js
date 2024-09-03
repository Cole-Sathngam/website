'use client'

import React from 'react';
import Image from 'next/image';
import { 
  AppBar, Toolbar, Typography, Button, Card, CardContent, 
  CardMedia, Grid, Container, Box, Paper
} from '@mui/material';
import { Home, Search, BusinessCenter, Phone } from '@mui/icons-material';

const RealEstateAgencyFrontPage = () => {
  return (
    <Box 
      sx={{
        backgroundImage: "url('')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative', // For absolute positioning of debug info
      }}
    >
      {/* Debug info */}
      <Paper 
        elevation={3} 
        sx={{ 
          position: 'absolute', 
          top: 10, 
          left: 10, 
          zIndex: 9999, 
          p: 2, 
          backgroundColor: 'rgba(255, 255, 255, 0.9)'
        }}
      >
        <Typography variant="body2">Debug Info:</Typography>
        <Typography variant="body2">
          Background Image Path: /images/testDirect.png
        </Typography>
        <Typography variant="body2">
          If you see this, the component is rendering.
        </Typography>
      </Paper>

      <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            Dream Home Realty
          </Typography>
          <Button sx={{ color: 'white' }}>Home</Button>
          <Button sx={{ color: 'white' }}>Listings</Button>
          <Button sx={{ color: 'white' }}>About</Button>
          <Button sx={{ color: 'white' }}>Contact</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
            Welcome to Dream Home Realty
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'black' }}>
            Your journey to finding the perfect home starts here
          </Typography>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: 'black' }}>
              Featured Property
            </Typography>
            <Card>
              <CardMedia
                component="div"
                sx={{ position: 'relative', height: 300 }}
              >
                <Image
                  src="/api/placeholder/1200/600"
                  alt="Featured Property"
                  layout="fill"
                  objectFit="cover"
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Luxury Waterfront Villa
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Experience modern living with this stunning 4-bedroom villa 
                  overlooking the ocean. Perfect for those who appreciate luxury and nature.
                </Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: 'black' }}>
              Our Services
            </Typography>
            <Grid container spacing={3}>
              {[
                { icon: <Home />, title: 'Property Sales', description: 'Find your dream home with our extensive listings.' },
                { icon: <Search />, title: 'Property Search', description: 'Use our advanced search to find the perfect property.' },
                { icon: <BusinessCenter />, title: 'Investment Advice', description: 'Get expert advice on real estate investments.' },
                { icon: <Phone />, title: 'Customer Support', description: '24/7 support for all your real estate needs.' },
              ].map((service, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        {service.icon}
                      </Box>
                      <Typography gutterBottom variant="h6" component="div" align="center">
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="center">
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default RealEstateAgencyFrontPage;