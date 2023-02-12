import React from 'react';
import { ReactComponent as Wave } from '@svgs/wave.svg';

export default function Info() {
  return (
    <section className="maximumWidth info" id="info">
      <Wave className="info__wave" />
      <div className="info__detailsWrap content">
        <h4 className="info__heading heading heading--white">
          What exactly does NoteIT offer?
        </h4>
        <div className="info__details">
          <p>
            Our mission is to provide a platform for students that we, the
            creators, envisioned as students.
          </p>
          <h5>We wanted</h5>
          <ul className="info__list">
            <li>
              Teachers to understand our intelligence level and guide us
              accordingly.
            </li>
            <li>A collaboration platform to learn, share and grow together.</li>
            <li>
              To step out of the box and understand the real-world applications
              of the topics we read.
            </li>
          </ul>
          <p>
            Overall, we desired a versatile and inspiring teaching-learning
            experience.
          </p>

          <h5>The sad part ?</h5>
          <p>
            There were no institutions or platforms that focused on students
            rather than the &ldquo;business&rdquo; aspect at the time.
          </p>
        </div>
      </div>
    </section>
  );
}
