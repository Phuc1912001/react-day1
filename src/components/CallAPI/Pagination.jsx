import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';
import './pagination.css'
function PaginatedItems( {user} ) {
    console.log(user);
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5
  
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      
      setCurrentItems(user.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(user.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,user]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % user.length;
      
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <div>
        <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Street</th>
                            <th scope="col">City</th>
                            <th scope="col">ZipCode</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item,index) => (
                                <tr key={index}>                         
                                <td>{item.id}</td>
                                <td>{item.name}</td> 
                                <td>{item.username}</td> 
                                <td>{item.email}</td> 
                                <td>{item.address.street}</td> 
                                <td>{item.address.city}</td> 
                                <td>{item.address.zipcode}</td> 
                                   
                                </tr>                           
                            ))}
                            
                        </tbody>
                    </table>
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="pagenum"
          previousLinkClassName='pagenum'
          nextLinkClassName='pagenum'
          activeLinkClassName='active'
        />
      </>
    );
  }

export default PaginatedItems;