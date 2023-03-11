import React from 'react';
import Head from 'next/head';

const HeadContent = () => {
  const title = 'Plastic Origins';
  const description =
    'A citizen science project that uses AI to map river plastic pollution – powered by Surfrider Foundation Europe';
  const keywords =
    'plastic, pollution, river, mapping, citizen science, Surfrider Foundation Europe';
  const image = '/images/seo/seo_image.png';
  const siteUrl = 'https://www.plastic-origins.eu';

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
        key="viewport"
      />
      <meta name="theme-color" content="#ffffff" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Plastic Origins" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={siteUrl + image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@plastic_origins" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={siteUrl + image} />
      <meta name="twitter:url" content={siteUrl} />
      <link rel="canonical" href={siteUrl} />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
    </Head>
  );
};

export default HeadContent;
