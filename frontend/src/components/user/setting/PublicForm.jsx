import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../../store/user";
import { useParams } from "react-router-dom";
export default function PublicForm(props) {
    const sessionUser =useSelector((state)=>state.session.user)
    const {id}=useParams()
    const dispatch = useDispatch();
    const {user}=props;
    const [username,setUsername]=useState(user.username)
    const [email, setEmail] = useState(user.email)

    useEffect(() => {
        dispatch(fetchUser(id))
    }, [])
    useEffect(() => {
    console.log(sessionUser,"sessionUser")
    }, [sessionUser])
    return(
        <div>
            <div>
                <h1 className="settingformtitle">Public profile</h1>
            </div>
            <div>
                <p>People visiting your profile will see the following info</p>
            </div>
            <div>
                <p className="formlabel">Photo</p>
            </div>
            <div>
                {sessionUser&&sessionUser.imgurl ? <img className="pfpPic" src={sessionUser.imgurl} alt="" /> : <div className="Nopic">{sessionUser.username && sessionUser.username[0]}</div>}
            </div>
            <div>
                <p className="formlabel">Username</p>
                <input
                    className="modalinput"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
        </div>

    )
}