import { useState,useEffect } from "react";
import PaginatedItems from "./Pagination";


function CallApi() {

    const [user,setUser] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => res.json())
        .then(post => setUser(post))
    },[])


    return ( <div>
            
                <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                    
                    <PaginatedItems user={user}/>
                    </div>
                </div>
            </div>
            
    </div> );
}

export default CallApi;