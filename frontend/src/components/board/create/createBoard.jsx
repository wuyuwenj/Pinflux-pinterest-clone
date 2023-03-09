import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { createBoard } from "../../../store/boards";
import { fetchBoards } from "../../../store/boards";

const CreateBoardPage = () => {    
    const currentUserId = useSelector(state => state.session.user.id)
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [body, setBody] = useState('')
    const [redirect, setRedirect] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(createBoard({ name, body, private:false, owner_id:currentUserId }))
        dispatch(fetchBoards())

        setTimeout(setRedirect(true), 5000)
    }


    if (redirect) {
        return (
            <Redirect to={`/user/${currentUserId}`} />
        )
    }


    return (
        <div className="imageShowPage">
            <div className="imageShowBox">
                <form onSubmit={handleSubmit}>
                    <h2>Create a New Board</h2>

                    <br />
                    <br />
                    <h3>Board Name</h3>
                    <input type="text"
                        className="titleInput"
                        value={name}
                        placeholder='Board Name'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <br />
                    <h3>Board Body</h3>
                    <input type="text"
                        className="titleInput"
                        value={body}
                        placeholder='description'
                        onChange={(e) => setBody(e.target.value)}
                    />
                    <input className="saveShow" type="submit" value='Create' />
                </form>


            </div>
        </div>
    );
}
export default CreateBoardPage;