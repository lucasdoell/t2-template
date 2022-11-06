import Head from "next/head";
import { useRouter } from "next/router";

type props = {
  title: string;
  description: string;
};

export default function SEO({ title, description }: props) {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {/* <meta
        property="og:url"
        content={`your-url-here.cc/${router.asPath}`}
      /> */}
      {/* TODO: replace URL with your own */}
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={title} />
    </Head>
  );
}
