import { useEffect, useState } from "react";
import { getData } from "./getData";

export const useFetchCharacter = (person) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getData(person).then((character) => {
      setState({
        data: character,
        loading: false,
      });
    });
  }, [person]);

  return state;
};

// <div className="container mt-5">
//   <h1>Form test</h1>
//   <hr />
//   <div className="form-group">
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Search..."
//         name="name"
//         className="form-control"
//         onChange={handleInputChange}
//       />
//       <button className="btn btn-primary mt-3" type="submit">
//         Search!
//       </button>
//     </form>
//   </div>
// </div>
