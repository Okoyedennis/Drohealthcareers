import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
// import Bookdetails components
import BooksDetails from "./components/BooksDetails";
// import Skeleton Loading components
import Loading from "./components/Loading";

function App() {
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  let API = "https://www.anapioficeandfire.com/api/books";

  // Fetching the Data
  useEffect(() => {
    axios
      .get(API)
      .then((resp) => {
        setBooks(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const searchText = (e) => {
    setFilter(e.target.value);
  };

  // Search functionality to filter when typing
  let dataSearch = books.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      <Container>
        <div className=" w-full pt-10 md:w-3/5 flex justify-center md:m-auto ">
          <input
            type="text"
            className=" rounded w-4/6 h-10 shadow focus:outline-none p-3 
            focus:scale-110 transform transition duration-300 ease-out"
            value={filter}
            onChange={searchText}
            placeholder="Search for books"
          />
        </div>

        {loading === false ? (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {dataSearch.map((item, index) => {
              return (
                <BooksDetails
                  key={index}
                  publisher={item.publisher}
                  index={index}
                  name={item.name}
                  isbn={item.isbn}
                  author={item.authors}
                  release={item.released}
                />
              );
            })}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {Array.from({ length: 8 }).map((index) => (
              <Loading key={index} />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 90%;
  margin: auto;
`;
