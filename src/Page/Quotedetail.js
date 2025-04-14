import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Quotedetail() {
  const { id } = useParams();
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/quotes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        // console.log(data);
      });
  }, [id]);
  if (!quote) return <p className="text-center mt-4">Loading Quote Detail</p>;
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-gray-500 text-sm mb-2">Quote No: {quote.id}</h4>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Quote Details
          </h2>

          <p className="text-xl text-gray-700 italic mb-4">"{quote.quote}"</p>
          <p className="text-right text-gray-600 font-medium">
            - {quote.author}
          </p>
        </div>

        <Link
          to="/"
          className="mt-6 inline-block text-blue-600 hover:underline"
        >
          Back To Home
        </Link>
      </div>
    </>
  );
}
