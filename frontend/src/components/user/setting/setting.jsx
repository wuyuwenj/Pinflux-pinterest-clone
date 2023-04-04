import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import PublicForm from "./PublicForm";
import PersonalInfoForm from "./PersonalInfoForm";
import './setting.css';
const pages={
    1:'Public',
    2:'Personal'
}
export default function Setting(){
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const [page,setPage] = useState('Public');
    useEffect(() => {
        console.log(page,"page")
    }, [page])
    return(
    <div className="settingPage">

        
        <div className="leftset column">
            <div>
                
                <p onClick={()=>setPage(pages[1])}>Public profile</p>
                
            </div>
            <div>
                
                <p onClick={() => setPage(pages[2])}>Personal information</p>
               
            </div>
        </div>
        <div className="rightset column">
            {user&&page === pages[1] && <PublicForm user={user}/>}
            {user&&page === pages[2] && <PersonalInfoForm/>}
        </div>
    </div>
    )
}