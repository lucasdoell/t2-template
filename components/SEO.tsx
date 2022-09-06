import Head from "next/head";

type props = {
  title: string;
  description: string;
  image: string;
};

export default function SEO({ title, description, image }: props) {
  return (
    <Head>
      <title>{title}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {/* TODO: <meta property="og:url" content="https://url" /> */}
      <meta
        property="og:image"
        // TODO: content={`https://url/images/${image}`}
      />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={title} />
    </Head>
  );
}
