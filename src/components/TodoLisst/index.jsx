import { useRef, useState } from "react";


function TodoLisst() {

    const [job,setJob] = useState('')
    const [renderJobs,setRenderJobs] = useState([])
    const [index1,setIndex] = useState(0)
    const [show,setShow] = useState(false)

    const inputRef = useRef()

    //thêm jobs

    const handleAdd = () => {
        
        setRenderJobs(prev => [...prev,job])
        setJob('')
    }

    //xoá jobs
    const handleDelete = ((item,index) => {
        const newJobs = [...renderJobs]  
        console.log(newJobs[index]);
        newJobs.splice(index, 1)
        setRenderJobs(newJobs)
 
    })

    //sửa jobs
    const handleEdit = ((item,index) => {
        const newJobs2 = [...renderJobs]
        inputRef.current.value = newJobs2[index]
       setIndex(index)
       setShow(!show)
       
    })
    const handleUpdate =() => {
        
       const newJob3 = [...renderJobs]
       console.log(newJob3[index1]);
       newJob3[index1] = inputRef.current.value
       setRenderJobs(newJob3)
       
       setJob('')
       
    }

    return ( <div>
        <div>
            <input
             type="text" 
             value={job}
             ref ={inputRef}
            onChange={(e) => setJob(e.target.value)}
            />
            <button onClick={handleAdd}>add</button>
             {show && <button onClick={handleUpdate}>cập nhập</button>}
            <ul>
                {renderJobs.map((item,index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleDelete(item,index)}>xoá</button>
                        <button onClick={() => handleEdit(item,index)}>Sủa</button>

                    </li>
                ))}
            </ul>
        </div>
    </div> );
}

export default TodoLisst;