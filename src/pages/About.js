import { Link } from "react-router-dom";

import MetaDecorator from "../components/MetaDecorator";

export default function About() {
  return (
    <>
      <MetaDecorator title="Happy Plant - About" />
      <section className="mx-auto mt-6 prose">
        <h1>
          Everybody asks "What is the plant?" but nobody asks "How is the
          plant?"
        </h1>
        <p>
          That's why I, Farhan with Sakib and Nur Amin did this project that
          shows if a plant is happy or sad.
        </p>
        <p>
          Just kidding. We did this for project showcase for our 5th term's
          subject "Microprocessor and Embedded Systems".
        </p>
        <p>
          See <Link to="/how">how it works</Link>.
        </p>
      </section>
    </>
  );
}
