import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const MetaTags = ({ 
  title = 'Sercan Sever | Full Stack Developer',
  description = 'Full Stack Developer specializing in .NET Core, React, and Node.js',
  image = 'https://srcnsvr.com/profile.webp',
  url = 'https://srcnsvr.com',
  type = 'website',
  keywords = 'Sercan Sever, Full Stack Developer, .NET Core, React, Node.js, Web Development',
  author = 'Sercan Sever',
  schemaMarkup = null
}) => {
  return (
    <Helmet prioritizeSeoTags encodeSpecialCharacters={true}>
      <title>{title}</title>
      <meta name="description" content={description} data-rh="true" />
      <meta name="keywords" content={keywords} data-rh="true" />
      <meta name="author" content={author} data-rh="true" />
      <link rel="canonical" href={url} data-rh="true" />
      <meta name="generator" content="React + Vite" />

      <meta property="og:type" content={type} data-rh="true" />
      <meta property="og:title" content={title} data-rh="true" />
      <meta property="og:description" content={description} data-rh="true" />
      <meta property="og:image" content={image} data-rh="true" />
      <meta property="og:url" content={url} data-rh="true" />
      <meta property="og:site_name" content="Sercan Sever Portfolio" data-rh="true" />

      <meta name="twitter:card" content="summary_large_image" data-rh="true" />
      <meta name="twitter:title" content={title} data-rh="true" />
      <meta name="twitter:description" content={description} data-rh="true" />
      <meta name="twitter:image" content={image} data-rh="true" />
      <meta name="twitter:creator" content="@_srcnsvr" data-rh="true" />

      <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#020202" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#e6e6e6" media="(prefers-color-scheme: dark)" />

      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

MetaTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  schemaMarkup: PropTypes.object
};

export default MetaTags;