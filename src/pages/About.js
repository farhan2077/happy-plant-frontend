import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = `Happy Plant - About`;
  });

  return (
    <>
      <section className="px-0 mt-5 text-gray-700 md:px-14">
        <h1 className="text-xl font-bold sm:text-4xl">
          Everybody asks "What is the plant?" but nobody asks "How is the
          plant?"
        </h1>
        <p className="my-6">
          That's why I, Farhan with Sakib and Nur Amin did this project that
          shows if a plant is happy or sad.
        </p>
        <p className="my-6">
          Just kidding. We did this as a project showcase for our 5th term's
          course called "Microprocessor and Embedded Systems".
        </p>
      </section>
    </>
  );
}
