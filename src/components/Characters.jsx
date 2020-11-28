import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useForm } from "../hooks/useForm";

export const Characters = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
  });
  const { name } = formValues;
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/characters?name=${name}`
  );

  const { nickname, img } = !!data && data[0];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(nickname);
  };

  return (
    <div className="container mt-5">
      <h2>Look for your favorite character from Breaking Bad</h2>
      <hr />
      <form className="">
        <input
          type="text"
          className="form-control"
          placeholder="search.."
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>

      <hr />
      <div className="container">
        <h3>{nickname}</h3>
        <img src={img} alt={img} />
      </div>
    </div>
  );
};
