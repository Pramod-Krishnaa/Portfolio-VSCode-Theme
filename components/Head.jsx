import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Pramod is an anime lover who codes during the time I get bored of anime"
      />
      <meta
        name="keywords"
        content="pramod, Pramod Krishnaa, Krishnaa, DPK, Pramod"
      />
      <meta property="og:title" content="Pramod's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://pramod.netlify.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Pramod',
};
