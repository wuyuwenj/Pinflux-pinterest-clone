import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { deleteBoard } from "../../../store/boards"
import { updateBoard } from "../../../store/boards"
import { Redirect } from "react-router-dom"
import "./boardEditForm.css"
const BoardEditForm = (props) => {
    const currentUserId = useSelector(state => state.session.user.id)
    const { board } = props
    const [name, setName] = useState(board.name)
    const [body, setBody] = useState(board.body)
    const [redirect, setRedirect] = useState(false)

    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteBoard(board.id));
        setTimeout(setRedirect(true), 5000)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const Data = {
            ...board,
            name,
            body
        }
        dispatch(updateBoard(Data));
        setTimeout(setRedirect(true), 5000)

    }

    if (redirect) {
        return (
            <Redirect to={`/user/${currentUserId}`} />
        )
    }
    return (
        <div className="pin-edit-form-container">
            <div className="pin-edit-heading">
                <h1>Edit this Board</h1>
            </div>
            <form className="form-form-container" onSubmit={handleSubmit} action="">
                <div className="pin-edit-form">
                    <div className="pin-edit-left">
                        <div className="pin-edit-inputs">
                            <div className="pin-edit-board">
                            </div>
                            <div className="pin-edit-name">
                                <label htmlFor="pin-edit-name">name</label>
                                <input
                                    className="modalinput"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="pin-edit-body">
                                <label htmlFor="pin-edit-body">description</label>
                                <input
                                    className="modalinput"
                                    type="text"
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div>

                    <button type="button" onClick={handleDelete} className="edit-delete-buttons">
                        <h1>Delete</h1>
                    </button>



                    <button type="submit" className="edit-save-buttons">
                        <h1>Save</h1>
                    </button>
                </div>
            </form>
        </div>
    )

}
export default BoardEditForm