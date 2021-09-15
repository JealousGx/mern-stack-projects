import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import axios from "../axios";
import "./Cards.css";

const Cards = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get("/cards");
      setPeople(req.data);
    };

    fetchData();
  }, []);

  console.log(people);
  const swiped = (dir, nameToDelete) => {
    console.log(nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name);
  };
  return (
    <div className="tinderCards">
      <div className="tinderCardsContainer">
        {people &&
          people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.imgUrl})` }}
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
