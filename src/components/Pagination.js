import React from "react";

export default function Pagination({ page, setPage, totalPages }) {
  return (
    <>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className={`px-4 py-2 bg-gray-200 rounded ${
            page === 1 ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className={`px-4 py-2 bg-gray-200 rounded ${
            page === totalPages ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}
