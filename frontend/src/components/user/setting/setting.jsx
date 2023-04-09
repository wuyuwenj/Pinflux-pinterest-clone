import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import PublicForm from "./PublicForm";
import PersonalInfoForm from "./PersonalInfoForm";
import './setting.css';
import { useParams } from "react-router-dom";
import { fetchUsers } from "../../../store/user";
import { getUser } from "../../../store/user";
const pages={
    1:'Public',
    2:'Personal'
}
export default function Setting(){
    const history = useHistory();
    const dispatch = useDispatch();
    const {id}=useParams();
    const user = useSelector(getUser(id));
    const [page,setPage] = useState('Public');

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    return(
    <div className="settingPage">

        
        <div className="leftset column">
                <div className="Selections">
                
                <div onClick={()=>setPage(pages[1])} className={page===pages[1] ? "selected" : ""}>Public profile</div>
                
            </div>
                <div className="Selections">
                
                    <div onClick={() => setPage(pages[2])} className={page===pages[2] ? "selected" : ""}>Personal information</div>
               
            </div>
        </div>
        <div className="rightset column">
            {user&&page === pages[1] && <PublicForm user={user}/>}
            {user&&page === pages[2] && <PersonalInfoForm/>}
        </div>
    </div>
    )
}