import { Helmet } from "react-helmet-async";

const SeoHelmet = ({ title, description, image, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
<meta name="google-site-verification" content="mPMcqSmR9UwtO8RI8RoCL4GE7vztochFjIs0ZEn9K50" />
      <meta name="description" content={description} />
      {/* for og */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
};

export default SeoHelmet;
