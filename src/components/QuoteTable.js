import React from "react";
import { Link } from "react-router-dom";

export default function QuoteTable({ quotes }) {
  return (
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
          {quotes.map((quote) => (
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
  );
}
