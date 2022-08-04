import classNames from "classnames/bind";
import styles from './Course.module.scss'
import { data } from "./data";
const cx = classNames.bind(styles)



function Course() {
    
    const handleRender = ((item1,index) => {
        console.log(data.obj);
    })
    const handleTest = ((item2,index2) => {
        console.log(item2,index2);
    })
    
    return ( <div>
        {data.map((item,index) => (
            
            <div key={index} className={cx('wrapper')}>
            <div className={cx('wrapper-left')}>
                 <input type="checkbox" />
                 <img src="https://thienanblog.com/wp-content/uploads/2015/04/javascript_logo.png" alt="" />
                 <div className={cx('text-course')}>
                     <h4>{item.name}</h4>
                     <h5>javascript 365</h5>
                     <select id="cars">
                        {item.opt.map((item1,index1) => (
                             <option key={index1} onChange={() => handleRender(item1,index1)} value="volvo" >{item1.name}</option>
                        ))}                        
                     </select>
                 </div>
            </div>
            <div  className={cx('wrapper-right')}>
            <div className={cx('code')}>
                <h4 onClick={() => handleTest(item,index)}>$1299</h4>
                <h5>$132</h5>
            </div>
            <h4>-$633</h4>
        </div>
         </div>
        ))}
    </div> );
}

export default Course;