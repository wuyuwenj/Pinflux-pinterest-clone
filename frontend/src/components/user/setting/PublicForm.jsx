import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../../store/user";
import { useParams } from "react-router-dom";
import './setting.css';
import { updateUser } from "../../../store/user";
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...user,
            username,
            email,
        };
        dispatch(updateUser(payload,id));
    }
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
            <div>
                <p className="formlabel">Email</p>
                <input
                    className="modalinput"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit" className="public-form-buttons" onClick={handleSubmit}>
                <p className="save-but-content">Save</p>
            </button>
        </div>

    )
}