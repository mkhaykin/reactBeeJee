import PropTypes from "prop-types";

const Pagination = ({ totalPages, currentPage }) => {
  const pageNumbers = [];

  let li = Math.max(currentPage - 3, 1);
  let ri = Math.min(currentPage + 3, totalPages);

  if (li > 1) {
    for (let i = 1; i < Math.min(li, 4); i++) {
      pageNumbers.push(i);
    }
    pageNumbers.push(-1);
  }

  for (let i = li; i <= ri; i++) {
    pageNumbers.push(i);
  }

  if (ri < totalPages) {
    pageNumbers.push(-2);
    for (let i = Math.max(ri + 1, totalPages - 2); i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) =>
          number > 0 ? (
            <li
              key={ number }
              className={`page-item ${currentPage === number ? "active" : ""}`}
            >
              <a key={{ number }} href={`/?page=${number}`} className="page-link">
                {number}
              </a>{" "}
            </li>
          ) : (
            <li
              key={ number }
              className="page-item disabled"
            >
              <span key={{ number }} className="page-link">...</span>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
