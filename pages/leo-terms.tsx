import Head from "next/head";
import Link from "next/link";

export default function LeoTerms() {
  return (
    <>
      <Head>
        <title>Leo terms of use</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main
        style={{
          maxWidth: "42rem",
          margin: "0 auto",
          padding: "2rem 1rem",
          lineHeight: 1.6,
        }}
      >
        <h1>Leo terms of use</h1>

        <p>
          Leo is a personal tool made for my own use. It is not a product or
          service offered to anyone else, and no warranty is given.
        </p>

        <p>It may change or be switched off at any time.</p>

        <h2>Contact</h2>
        <p>
          Please use the <Link href="/contact">contact page</Link>.
        </p>

        <p>
          <small>Last updated 28 October 2026.</small>
        </p>
      </main>
    </>
  );
}
