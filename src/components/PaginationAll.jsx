import React, { useState } from "react";
import Paginations from "./Paginations";
import { datas } from "../utils/Products";
import CardList from "./CardList";

const PaginationAll = () => {
  const [Products, setProducts] = useState(datas);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = Products.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="w-full">
      <CardList CardArtikels={currentPosts} />
      <div className="angka-pagination">
        <Paginations
          totalPosts={Products.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default PaginationAll;
