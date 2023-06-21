/* eslint-disable react/prop-types */
const Paginations = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex gap-4 justify-center my-8">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "bg-[#ff4800]" : " bg-white border text-[#ff4800] border-[#ff4800]"}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Paginations;
