import React from 'react';
import { Helmet } from 'react-helmet';

const Metadata = () => {
  return (
    <Helmet>
      <title>C3 Cafe - Where Board Games Meet Great Food</title>
      
      <meta name="description" content="C3 Cafe offers a warm and exciting environment for board game enthusiasts to gather, relax, and enjoy great food." />
      
      <meta name="keywords" content="cafe, board games, food, gaming, cafe near me, snacks, beverages, fun activities" />
      
      <meta name="author" content="C3 Cafe" /> 
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="C3 Cafe - Where Board Games Meet Great Food" />
      <meta property="og:description" content="Join us at C3 Cafe for a fun and immersive experience with board games and delicious food!" />
      <meta property="og:image" content="URL to image for sharing" /> 
      <meta property="og:url" content="https://C3-cafe.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="C3 Cafe" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="C3 Cafe - Where Board Games Meet Great Food" />
      <meta name="twitter:description" content="C3 Cafe offers a warm and exciting environment for board game enthusiasts to gather, relax, and enjoy great food." />
      <meta name="twitter:image" content="URL to image for sharing" /> 
      <meta name="twitter:site" content="@YourTwitterHandle" /> 
      
     
      <link rel="canonical" href="https://C3-cafe.vercel.app" />
      
      <meta name="robots" content="index, follow" />
      
      <meta name="theme-color" content="#ffffff" />
      <meta name="rating" content="General" /> 
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </Helmet>
  );
};

export default Metadata;
