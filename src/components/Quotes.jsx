import React from "react";
import { useCounter } from "../hooks/useCounter.js";
import { useFetch } from "../hooks/useFetch.js";

export const Quotes = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  return (
    <div className="container mt-5">
      <h2>Breaking Bad Quotes</h2>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading....</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  );
};
