import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Button, useTheme, Container } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRightAlt, GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import heroImage from '../assests/images/main.webp'


const Home = () => {
  const theme = useTheme();

  return (
    <Box component="section" id="home" sx={{
      marginTop:'40px',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      py: 8,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Container maxWidth="xl">
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 6,
        }}>
          {/* Text Content */}
          <Box sx={{ flex: 1, zIndex: 2 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Typography variant="h1" sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                mb: 2,
              }}>
                Hi, I'm <Box component="span" sx={{ color: ' #2c3e50' }}>Ida Selvam Magdaline J</Box>
              </Typography>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <Typography variant="h2" sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                color: ' #2c3e50',
                mb: 3,
                minHeight: '60px',
              }}>
                <TypeAnimation
                  sequence={[
                    'UI/UX Designer',
                    1500,
                    'Frontend Developer',
                    1500,
                    'Digital Creator',
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </Typography>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <Typography variant="body1" sx={{ 
                fontSize: '1.1rem', 
                color: ' #2c3e50',
                mb: 4,
                lineHeight: 1.7,
                maxWidth: '600px',
              }}>
                I design and build beautiful digital experiences that are fast, accessible, and responsive. 
                Currently creating amazing products at Creative Studio.
              </Typography>
            </motion.div>

           <motion.div 
  initial={{ opacity: 0, y: 20 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8, delay: 0.6 }}
>
  <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
   <Button 
  variant="contained" 
  size="large"
  endIcon={<ArrowRightAlt />}
  href="#projects"
  sx={{
    borderRadius: '50px',
    px: 4,
    py: 1.5,
    fontWeight: 600,
    backgroundColor: '#2c3e50', // Solid dark blue background
    '&:hover': {
      backgroundColor: '#1a252f', // Darker shade on hover
    }
  }}
>
  View My Work
</Button>
    <Button 
      variant="outlined" 
      size="large"
      href="#contact"
      sx={{
        borderRadius: '50px',
        px: 4,
        py: 1.5,
        fontWeight: 600,
        color: '#2c3e50', // Text color
        borderColor: '#2c3e50', // Border color
        '&:hover': { 
          backgroundColor: 'rgba(44, 62, 80, 0.08)', // Light background on hover
          borderColor: '#2c3e50',
          borderWidth: '2px'
        }
      }}
    >
      Contact Me
    </Button>
  </Box>
</motion.div>
          </Box>

          {/* Image Content */}
          <Box sx={{ 
            flex: 1, 
            display: 'flex', 
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '500px',
              }}
            >
              <Box sx={{
                width: '100%',
                aspectRatio: '1/1',
                borderRadius: '20px',
                backgroundColor: ' #2c3e50',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: theme.shadows[10],
                '& img': {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'relative',
                  zIndex: 2,
                }
              }}>
                <img src={heroImage} alt="Alex Johnson" />
              </Box>
              <Box sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: ' #2c3e50',
                borderRadius: '20px',
                top: 20,
                left: 20,
                zIndex: 0,
              }} />
            </motion.div>
          </Box>
        </Box>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            position: 'fixed',
            left: '32px',
            bottom: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            [theme.breakpoints.down('md')]: {
              position: 'static',
              flexDirection: 'row',
              justifyContent: 'center',
              mt: 6,
            }
          }}
        >
          {[
            { icon: <GitHub fontSize="large" />, url: 'https://github.com' },
            { icon: <LinkedIn fontSize="large" />, url: 'https://linkedin.com' },
            { icon: <Twitter fontSize="large" />, url: 'https://twitter.com' },
          ].map((link, index) => (
            <Button
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                minWidth: 'auto',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                color: ' #2c3e50',
                '&:hover': {
                  color: ' #2c3e50',
                  backgroundColor: 'transparent',
                }
              }}
            >
              {link.icon}
            </Button>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;