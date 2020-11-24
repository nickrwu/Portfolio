import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Nicholas Wu'}</title>
        <html lang={lang || 'en'} prefix="og: http://ogp.me/ns#"/>
        <meta name="description" content={description || 'Portfolio'} />

        {/* OGP Metadata */}
        <meta property="og:title" content={title || 'Nicholas Wu'}/>
        <meta property="og:description" content={description || 'Portfolio'}/>
        <meta name = "image" property="og:image" content="%PUBLIC_URL%/featured.jpg"/>
        <meta property="og:url" content="https://nickrwu.studio"/>
      </Helmet>
      <App />
    </>
  );
};
