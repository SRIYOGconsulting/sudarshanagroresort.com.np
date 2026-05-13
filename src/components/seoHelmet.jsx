import { Helmet } from "react-helmet-async";

const SeoHelmet = ({
  title,
  description,
  image,
  url
}) => {
  return (
    <Helmet>
      {/* TITLE */}
      <title>{title}</title>

      {/* BASIC SEO */}
      <meta
        name="description"
        content={description}
      />

    <meta name="google-site-verification" content="mPMcqSmR9UwtO8RI8RoCL4GE7vztochFjIs0ZEn9K50" />

      {/* CANONICAL */}
      <link rel="canonical" href={url} />

      {/* OPEN GRAPH */}
      <meta property="og:type" content="website" />

      <meta
        property="og:site_name"
        content="Sudarshan Agro Resort"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:url"
        content={url}
      />

      {/* TWITTER */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />
    </Helmet>
  );
};

export default SeoHelmet;

