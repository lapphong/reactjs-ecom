import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { shades } from '../../theme';

import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';
import img4 from '../../assets/img4.jpeg';
import img5 from '../../assets/img5.jpeg';

export const imgSlide = [
   { imgSrc: img1 },
   { imgSrc: img2 },
   { imgSrc: img3 },
   { imgSrc: img4 },
   { imgSrc: img5 },
];

export default function MainCarousel() {
   const isNonMobile = useMediaQuery('(min-width:600px)');

   return (
      <Carousel
         infiniteLoop={true}
         showThumbs={false}
         showIndicators={false}
         showStatus={false}
         renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <IconButton
               onClick={onClickHandler}
               sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '0',
                  color: 'white',
                  padding: '5px',
                  zIndex: '10',
               }}
            >
               <NavigateBeforeIcon sx={{ fontSize: 40 }} />
            </IconButton>
         )}
         renderArrowNext={(onClickHandler, hasNext, label) => (
            <IconButton
               onClick={onClickHandler}
               sx={{
                  position: 'absolute',
                  top: '50%',
                  right: '0',
                  color: 'white',
                  padding: '5px',
                  zIndex: '10',
               }}
            >
               <NavigateNextIcon sx={{ fontSize: 40 }} />
            </IconButton>
         )}
      >
         {imgSlide.map((texture, index) => (
            <Box key={`carousel-image-${index}`}>
               <img
                  src={texture.imgSrc}
                  alt={`carousel-${index}`}
                  style={{
                     width: '100%',
                     height: '700px',
                     objectFit: 'cover',
                     backgroundAttachment: 'fixed',
                  }}
               />
               <Box
                  color="white"
                  padding="20px"
                  borderRadius="1px"
                  textAlign="left"
                  backgroundColor="rgb(0, 0, 0, 0.4)"
                  position="absolute"
                  top="46%"
                  left={isNonMobile ? '10%' : '0'}
                  right={isNonMobile ? undefined : '0'}
                  margin={isNonMobile ? undefined : '0 auto'}
                  maxWidth={isNonMobile ? undefined : '240px'}
               >
                  <Typography color={shades.secondary[200]}>-- NEW ITEMS</Typography>
                  <Typography variant="h1">Summer Sale</Typography>
                  <Typography
                     fontWeight="bold"
                     color={shades.secondary[300]}
                     sx={{ textDecoration: 'underline' }}
                  >
                     Discover More
                  </Typography>
               </Box>
            </Box>
         ))}
      </Carousel>
   );
}
