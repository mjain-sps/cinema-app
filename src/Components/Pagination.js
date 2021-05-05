import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../CSS/paginate.css";
function Pagination({ maxPages, history, currentPath, currentPage }) {
  const [pageNumber, setPageNumber] = useState(currentPage);
  const [redirected, setRedirected] = useState(false);
  return (
    <div className="pagination--wrapper">
      hello
      {/* <span>
        {" "}
        {pageNumber} -{maxPages}
      </span>
      <button
        onClick={() => setPageNumber(pageNumber - 1)}
        disabled={pageNumber === 1}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPageNumber(pageNumber + 1);
          setRedirected(true);
        }}
        disabled={pageNumber === maxPages}
      >
        Next
      </button>
      {redirected ? <Redirect to={`${currentPath}/?p=${pageNumber}`} /> : ""} */}
    </div>
  );
}

export default Pagination;
