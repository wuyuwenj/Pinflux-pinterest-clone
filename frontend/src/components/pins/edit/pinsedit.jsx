import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { deletePin, updatePin } from "../../../store/pins"

const PinEditForm = (props) => {
    const {pin}=props
    const [title, setTitle] = useState(pin.title)
    const [body, setBody]=useState(pin.body)
    const dispatch=useDispatch();
    console.log(pin.id,"passedpin")
    const handleDelete=(e)=>{
        e.preventDefault()
        dispatch(deletePin(pin.id));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const Data={
            ...pin,
            title,
            body
        }
        dispatch(updatePin(Data));
    }

    return(
        <div className="pin-edit-form-container">
            <div className="pin-edit-heading">
                <h1>Edit this pin</h1>
            </div>
            <form className="form-form-container" onSubmit={handleSubmit} action="">
                <div className="pin-edit-form">
                    <div className="pin-edit-left">
                        <div className="pin-edit-inputs">
                            <div className="pin-edit-board">
                            </div>
                            <div className="pin-edit-title">
                                <label htmlFor="pin-edit-title">Title</label>
                                <input
                                    id="pin-edit-title"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
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
export default PinEditForm