import React, { useEffect, useState } from "react";
import { Quotes } from "./components/Quotes";

export const Test = () => {
  const [state, setState] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    getCharacter();
  }, []);

  const getCharacter = async (character) => {
    const URL = `https://www.breakingbadapi.com/api/characters?name=${encodeURI(
      character
    )}`;
    const response = await fetch(URL);
    const data = await response.json();

    const characters = data.map((character) => ({
      id: character.char_id,
      name: character.name,
      nickname: character.nickname,
      img: character.img,
    }));
    setState(characters);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCharacter(inputValue);
  };

  return (
    <div className="container mt-5 ">
      <Quotes />
      <div className="container mt-5">
        <h2>Breaking Bad Characters</h2>
        <hr />
        <div className="form-group">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search..."
              name="name"
              className="form-control"
              onChange={handleInputChange}
              value={inputValue}
              autoComplete="off"
            />
            <button className="btn btn-primary mt-3" type="submit">
              Search!
            </button>
          </form>
        </div>
      </div>
      <h2>Characters:</h2>
      <div className="container mt-5 d-flex flex-wrap justify-content-around">
        {state.map(({ id, name, nickname, img }) => (
          <div className="card m-3" style={{ width: "18rem" }} key={id}>
            <img src={img} alt={name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{nickname}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
