import { useState } from "react";
import lenderImg from "/Lender-Accordion-eVault.png";
import titleImg from "/Title-Escrow.png";
import schedulingImg from "/Scheduling.png";
import notaryImg from "/Notary-signing-Agents.png";
import LinkArrow from "./LinkArrow.jsx";
import ArrowRight from "/arrow-right.svg";
import "../App.scss";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "Lender",
      content:
        "Simplify the mortgage process for every closing with a powerful pair of products: our award-winning eClose platform and best-in-class eVault.",
      url: "https://www.snapdocs.com/digital-mortgage-closing-platform",
      image: lenderImg,
    },
    {
      title: "Title & Escrow",
      content:
        "Accelerate every mortgage closing and connect instantly with over 140,000 notary signing agents & attorneys for mobile & RON eClosings.",
      url: "https://www.snapdocs.com/scheduling-platform-for-title-companies",
      image: titleImg,
    },
    {
      title: "Signing Service",
      content:
        "Instantly source, vet, schedule, and pay for a qualified notary anywhere in the country.",
      url: "https://www.snapdocs.com/scheduling-platform-for-signing-services",
      image: schedulingImg,
    },
    {
      title: "Notary Signing Agent",
      content:
        "Access over 250,000 mobile and RON loan signing opportunities each month, gain exposure to 100+ hiring companies, and efficiently manage your business online.",
      url: "https://www.snapdocs.com/join-notary-network",
      image: notaryImg,
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="container">
      <div className="container__header">
        <h2>Connecting the industry through digital closing solutions</h2>
        <p>
          Select your organization type to learn how Snapdocs can help you save
          time and money on every transaction.
        </p>
      </div>
      <div className="row">
        <div className="accordion accordion__left">
          {items.map((item, index) => (
            <div
              key={index}
              className={`accordion__item ${
                openIndex === index ? "accordion__item--open" : ""
              }`}
            >
              <div
                className={`accordion__header ${
                  openIndex === index ? "open" : ""
                }`}
                onClick={() => toggleItem(index)}
              >
                <h3>{item.title}</h3>
              </div>
              {openIndex === index && (
                <div
                  className={`accordion__content ${
                    openIndex === index ? "accordion__content--open" : ""
                  }`}
                >
                  <p>{item.content}</p>
                  <div className="more">
                    <a className="more__link" href={item.url} rel="noreferrer">
                      {"Learn more"}
                      <LinkArrow />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="accordion accordion__right accordion__image--display">
          {items.map((item, index) => (
            <div key={index} className="accordion__item">
              {openIndex === index && (
                <div
                  className={`accordion__content ${
                    openIndex === index ? "accordion__content--open" : ""
                  }`}
                >
                  <img
                    className="accordion__image--resize"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
