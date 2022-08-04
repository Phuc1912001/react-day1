import React, { useEffect, useState,useRef } from 'react';

import ReactPaginate from 'react-paginate';
import './PaginationTable.css'
function PaginationTwo( {data} ) {
    
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState([]);
   
   
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
   
    const itemsPerPage = 10
  
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      
      setCurrentItems(data.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,data]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
      
      setItemOffset(newOffset);
    };
  
    const newdata = data.filter((item) => item.firstName.toLowerCase().includes(currentItems))
    
    
    
   
    

    return (
      <>
        <div>
        <input
        
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) =>setCurrentItems(e.target.value)}
        />
        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Birthday</th>
                                <th scope="col">Salary</th>
                                <th scope="col">Phone</th>

                                
                                </tr>
                            </thead>
                            <tbody>
                                {newdata.map((item,index) => (
                                    <tr key={index} >                         
                                        <td>{item.id}</td>
                                        <td>{item.firstName}</td> 
                                        <td>{item.lastName}</td> 
                                        <td>{item.email}</td> 
                                        <td>{item.gender}</td> 
                                        <td>{item.birthday}</td> 
                                        <td>{item.salary}</td> 
                                        <td>{item.phone}</td>     
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

export default PaginationTwo;