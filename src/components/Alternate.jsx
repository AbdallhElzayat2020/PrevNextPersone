import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Alternate = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  //nextPerson
  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  };
  //Prev Person
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1 + people.length) % people.length;

      returnnewIndex;
    });
  };
  //Random Person
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber === index + 1;
    }
  };
  return (
    <main className="">
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <h4 className="job">{job}</h4>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Suprise Me
        </button>
      </article>
    </main>
  );
};
export default Alternate;
