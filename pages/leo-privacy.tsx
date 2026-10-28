import Head from "next/head";
import Link from "next/link";

export default function LeoPrivacy() {
  return (
    <>
      <Head>
        <title>Leo privacy notice</title>
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
        <h1>Leo privacy notice</h1>

        <p>
          Leo is a private notification bot used only by Phillip Collins. It is
          not offered to anyone else.
        </p>

        <h2>What it handles</h2>
        <p>
          Summaries of my own email (sender, subject and a short preview), my
          calendar, my task lists, the status of my own code projects, and
          status reports from my own computers. It also fetches public weather
          and market figures.
        </p>

        <h2>Where it goes</h2>
        <p>
          From my Microsoft 365 account to a private computer in my home, and
          then to my own Microsoft Teams chat. Microsoft handles messages in
          Teams under its own terms.
        </p>

        <h2>What it does not do</h2>
        <p>
          It does not share, sell or send this information to any other person
          or service, and it is not used for advertising.
        </p>

        <h2>Storage</h2>
        <p>
          It keeps only a small record of when it last ran, and a reference to
          my own Teams chat, on my own computer.
        </p>

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
