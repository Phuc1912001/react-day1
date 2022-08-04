

import {data} from './data'
import PaginationTwo from './PaginationTable';
function Table() {
    
    return ( <div>
        <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select field to sort</option>
                            <option value="1">Id</option>
                            <option value="2">First Name</option>
                            <option value="3">Last Name</option>
                            <option value="3">Email</option>
                            <option value="3">Gender </option>
                            <option value="3">Birthday</option>
                            <option value="3">Salary</option>
                            <option value="3">Phone</option>
                        </select>    
                        
                       <PaginationTwo data={data} />
                            
                    </div>
                </div>
            </div>
    </div> );
}

export default Table;