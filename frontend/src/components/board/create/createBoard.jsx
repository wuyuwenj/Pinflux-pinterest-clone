import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { createBoard } from "../../../store/boards";
import { fetchBoards } from "../../../store/boards";
import "./createBoard.css"
import Loading from "../../LoadingPage/Loading";

const CreateBoardPage = () => {    
    const currentUserId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [body, setBody] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [loading, setLoading] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault()
        Promise.all([

        dispatch(createBoard({ name, body, private:false, owner_id:currentUserId })),
        dispatch(fetchBoards())
        ]).then(() => {
            setLoading(false)
        })

        setTimeout(setRedirect(true), 5000)
    }


    if (redirect) {
        return (
            <Redirect to={`/user/${currentUserId}`} />
        )
    }


    if (loading) {
        return (<>
            <Loading />
        </>)
    } else {
    return (
        <div className="pagebg">
            <div className="formbox">
                <form onSubmit={handleSubmit}>
                    <h2>Create a New Board</h2>

                    <br />
                    <br />
                    <h3>Board Name</h3>
                    <input type="text"
                        className="boardtitleInput"
                        value={name}
                        placeholder='Board Name'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <br />
                    <h3>Description</h3>
                    <input type="text"
                        className="boardtitleInput"
                        value={body}
                        placeholder='What is your board about?'
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <br />
                    <input className="Createboardbtn" type="submit" value='Create' />
                </form>


            </div>
        </div>
    );
    }
}
export default CreateBoardPage;