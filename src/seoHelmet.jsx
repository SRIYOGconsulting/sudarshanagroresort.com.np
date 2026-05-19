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
        property="og:image:alt"
        content={title}
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:locale"
        content="en_US"
      />

      {/* TWITTER */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:site"
        content="@SudarshanResort"
      />

      <meta
        name="twitter:creator"
        content="@SudarshanResort"
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

