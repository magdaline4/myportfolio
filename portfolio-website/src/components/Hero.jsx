import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Button, useTheme, Container } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRightAlt, GitHub, LinkedIn, Download } from '@mui/icons-material';
import heroImage from '../assests/images/profile.jpg';

const Home = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: { xs: 4, sm: 6, md: 8, lg: -2 },
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 6 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* Text Content */}
          <Box
            sx={{
              flex: 1,
              zIndex: 2,
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: '600px',
              mx: { xs: 'auto', md: '0' },
            }}
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Hi, I'm <Box component="span" sx={{ color: '#2c3e50' }}>Ida Selvam Magdaline J</Box>
              </Typography>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  color: '#2c3e50',
                  mb: 3,
                  minHeight: '60px',
                }}
              >
                <TypeAnimation
                  sequence={[
                    'Frontend Developer', 1500,
                    'React js Developer', 1500,
                    'JavaScript Developer', 1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </Typography>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  color: '#2c3e50',
                  mb: 4,
                  lineHeight: 1.7,
                  maxWidth: '600px',
                  mx: { xs: 'auto', md: '0' },
                }}
              >
                I design and build beautiful digital experiences that are fast, accessible, and responsive.
                Currently creating amazing products at Creative Studio.
              </Typography>
            </motion.div>

            {/* === Three Buttons in One Line === */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 2,
                  justifyContent: 'center',
                  flexWrap: 'nowrap',
                  overflowX: 'auto',
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowRightAlt />}
                  href="#projects"
                  sx={{
                    borderRadius: '50px',
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                    backgroundColor: '#2c3e50',
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      backgroundColor: '#1a252f',
                    },
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
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                    color: '#2c3e50',
                    borderColor: '#2c3e50',
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      backgroundColor: 'rgba(44, 62, 80, 0.08)',
                    },
                  }}
                >
                  Contact Me
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href="/Resume(Magdaline).pdf"
                  download
                  endIcon={<Download />}
                  sx={{
                    borderRadius: '50px',
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                    color: '#2c3e50',
                    borderColor: '#2c3e50',
                    whiteSpace: 'nowrap',
                    '&:hover': {
                      backgroundColor: 'rgba(44, 62, 80, 0.08)',
                    },
                  }}
                >
                  Download CV
                </Button>
              </Box>
            </motion.div>
          </Box>

          {/* Image Content */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
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
              <Box
                sx={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '20px',
                  backgroundColor: '#2c3e50',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: theme.shadows[10],
                  '& img': {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'relative',
                    zIndex: 2,
                  },
                }}
              >
                <img src={heroImage} alt="Ida Magdaline" />
              </Box>

              <Box
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#2c3e50',
                  borderRadius: '20px',
                  top: { xs: 10, sm: 15, md: 20 },
                  left: { xs: 10, sm: 15, md: 20 },
                  zIndex: 0,
                }}
              />
            </motion.div>
          </Box>
        </Box>

        {/* Social Icons */}
        <Box
          sx={{
            position: { xs: 'static', md: 'fixed' },
            left: { md: '32px' },
            bottom: { md: '32px' },
            display: 'flex',
            flexDirection: { xs: 'row', md: 'column' },
            justifyContent: { xs: 'center', md: 'flex-start' },
            alignItems: 'center',
            gap: 2,
            mt: { xs: 6, md: 0 },
          }}
        >
          {[
            { icon: <GitHub fontSize="large" />, url: 'https://github.com/magdaline4' },
            { icon: <LinkedIn fontSize="large" />, url: 'http://linkedin.com/in/idaselvammagdaline/' },
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
                color: '#2c3e50',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              {link.icon}
            </Button>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
