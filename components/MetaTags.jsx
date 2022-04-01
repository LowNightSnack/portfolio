import Head from "next/head";

const MetaTags = ({ canonicalLink }) => {
  return (
    <Head>
      <title>Mamoor J. Khan</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" content="Mamoor Jaan Khan's portfolio" />
      <meta
        name="description"
        content="With the latest from Mamoor Jaan Khan!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalLink} />
      <meta property="og:title" content="Mamoor Jaan Khan's portfolio" />
      <meta
        property="og:description"
        content="With the latest from Mamoor Jaan Khan!"
      />
      <meta property="og:image" content="/favicon.ico" />
    </Head>
  );
};

export default MetaTags;
