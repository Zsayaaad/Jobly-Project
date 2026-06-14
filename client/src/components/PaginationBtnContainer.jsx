import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useAllJobsContext } from "../context/AllJobsContext";
import { useLocation, useNavigate } from "react-router-dom";

const PaginationBtnContainer = () => {
  const {
    data: { currentPage, numOfPages },
  } = useAllJobsContext();

  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);

  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  // console.log(search); //     ?search=&jobStatus=Active&jobType=all&sort=newest
  // console.log(pathname); //   /dashboard/allJobs

  const handlePageChange = (pageNum) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNum);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  return (
    <nav className="flex justify-center items-center gap-4 py-8">
      <button
        className="btn-pagination-nav"
        // disabled={currentPage === 1}
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numOfPages;
          handlePageChange(prevPage);
        }}
      >
        <HiChevronLeft size={35} />
      </button>
      <div className="flex gap-2 flex-wrap justify-center">
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`w-12 h-12 flex items-center justify-center border-2 border-black dark:border-white font-mono font-bold transition-all
                 ${
                   pageNumber === currentPage
                     ? "bg-primary-container brutalist-shadow-sm text-black"
                     : "bg-white dark:bg-black brutalist-shadow hover:bg-surface-container-low"
                 } `}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button
        className="btn-pagination-nav"
        // disabled={currentPage === numOfPages}
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        <HiChevronRight size={35} />
      </button>
    </nav>
  );
};

export default PaginationBtnContainer;
