import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { deleteBoard } from "../../../store/boards"
import { updateBoard } from "../../../store/boards"
const BoardEditForm = (props) => {
    const { board } = props
    const [name, setName] = useState(board.name)
    const [body, setBody] = useState(board.body)
    const dispatch = useDispatch();
    console.log(board, "passedpin")
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteBoard(board.id));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const Data = {
            ...board,
            name,
            body
        }
        dispatch(updateBoard(Data));
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
                                    id="pin-edit-name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="pin-edit-description">
                                <label htmlFor="pin-edit-description">body</label>
                                <input
                                    id="pin-edit-description"
                                    type="text"
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="edit-form-buttons">
                    <div onClick={handleDelete}
                        className={`button-delete`}>
                        <h1>Delete</h1>
                    </div>

                    <button type="submit" className={`button-save`}>
                        <h1>Save</h1>
                    </button>
                </div>
            </form>
        </div>
    )

}
export default BoardEditForm