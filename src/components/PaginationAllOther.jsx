import React, { useState } from "react";
import Paginations from "./Paginations";
import { datas } from "../utils/Other.Product";
import CardList from "./Other.Pagination/CardListOther";

const PaginationAll = () => {
    const [Products, setProducts] = useState(datas);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = Products.slice(firstPostIndex, lastPostIndex);

    return (
        <div className="w-full flex justify-center items-center">
            <div className="max-w-full">
                <CardList CardArtikels={currentPosts} />
                <div className="angka-pagination flex justify-center items-center mt-4">
                    <Paginations
                        totalPosts={Products.length}
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default PaginationAll;


// import React, { useState } from "react";
// import Paginations from "./Paginations";
// import { datas } from "../utils/Other.Product";
// import CardList from "./Other.Pagination/CardListOther";

// const PaginationAll = () => {
//     const [Products, setProducts] = useState(datas);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [postsPerPage, setPostsPerPage] = useState(6);

//     const lastPostIndex = currentPage * postsPerPage;
//     const firstPostIndex = lastPostIndex - postsPerPage;
//     const currentPosts = Products.slice(firstPostIndex, lastPostIndex);

//     return (
//         <div className="w-full">
//             <CardList CardArtikels={currentPosts} />
//             <div className="angka-pagination">
//                 <Paginations
//                     totalPosts={Products.length}
//                     postsPerPage={postsPerPage}
//                     setCurrentPage={setCurrentPage}
//                     currentPage={currentPage}
//                 />
//             </div>
//         </div>
//     );
// };

// export default PaginationAll;
