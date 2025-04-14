import React, { useEffect, useState } from "react";

import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

export default function Home() {
  const [quote, setQuote] = useState([]);
  const [page, setPage] = useState(1);
  const [randomquote, setRandomquote] = useState(null);
  const [loading, setLoading] = useState(true);
  // const limit=10;

  useEffect(() => {
    fetch(`https://dummyjson.com/quotes?limit=10&skip=${(page - 1) * 10}`)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.quotes);
        // console.log(data.quotes);
      });
  }, [page]);

  function fetchnote() {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setRandomquote(data);
        // console.log(data);
      });
  }
  return (
    <>
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Quotes App</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={fetchnote}
        >
          Get Random Quote
        </button>
        {randomquote && (
          <div className="bg-gray-100 p-4 mb-4 rounded">
            <p className="text-lg font-semibold">"{randomquote.quote}"</p>
            <p className="text-right">- {randomquote.author}</p>
          </div>
        )}

        {/* Quotes Table */}
        <div className="max-w-full overflow-x-auto">
          
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="border px-4 py-2 font-bold">Quote No</th>
                  <th className="border px-4 py-2 font-bold">Quote</th>
                  <th className="border px-4 py-2 font-bold">Author</th>
                  <th className="border px-4 py-2 font-bold">Details</th>
                </tr>
              </thead>
              <tbody>
                {quote.map((quote) => (
                  <tr>
                    <td className="border px-4 py-2">{quote.id}</td>
                    <td className="border px-4 py-2 italic">"{quote.quote}"</td>
                    <td className="border px-4 py-2">{quote.author}</td>
                    <td className="border px-4 py-2">
                      <Link
                        to={`/quotedetail/${quote.id}`}
                        className="text-blue-500 hover:underline"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
         
        </div>

        <Pagination page={page} setPage={setPage} totalPages={50} />
      </div>
    </>
  );
}

