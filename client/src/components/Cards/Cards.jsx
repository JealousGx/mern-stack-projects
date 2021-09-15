import { useState } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css";

const Cards = () => {
  const [people, setPeople] = useState([
    {
      name: "Jealous Gx",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zTn5z9aooYCpiz7-0DUBNgHaKl%26pid%3DApi&f=1",
    },
    {
      name: "Spectre 007",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JFqsSF76ukFnugOuzPL2nQHaKe%26pid%3DApi&f=1",
    },
    {
      name: "Elon Musk",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mprIMHqW-sIj-nNb2js2agHaIj%26pid%3DApi&f=1",
    },
    {
      name: "Jeff Bezos",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gZbebNssegiidR0Qet_HpQHaGc%26pid%3DApi&f=1",
    },
    {
      name: "Mark Zuckerberg",
      url: "https://getinfolist.com/wp-content/uploads/2016/04/cartoon-2319837_1920____-7e60611016f2417a9c38b5b1cf27fd18.jpg",
    },
    {
      name: "Bill Gates",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP._WBwU_AQDTQhGpmKLnplBwHaLh%26pid%3DApi&f=1",
    },
  ]);

  const swiped = (dir, nameToDelete) => {
    console.log(nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name);
  };
  return (
    <div className="tinderCards">
      <div className="tinderCardsContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Cards;
