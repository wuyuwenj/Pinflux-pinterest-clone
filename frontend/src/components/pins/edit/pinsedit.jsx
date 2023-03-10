import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { deletePin, updatePin } from "../../../store/pins"
import { Redirect } from "react-router-dom"

import "./pinsedit.css"

const PinEditForm = (props) => {
    const {pin}=props
    const [title, setTitle] = useState(pin.title)
    const [body, setBody]=useState(pin.body)
    const dispatch=useDispatch();
    const [redirect, setRedirect] = useState(false)


    const handleDelete=(e)=>{
        e.preventDefault()
        dispatch(deletePin(pin.id));
        setTimeout(setRedirect(true), 5000)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const Data={
            ...pin,
            title,
            body
        }
        dispatch(updatePin(Data));
        setTimeout(setRedirect(true), 5000)

    }
    if (redirect) {
        return (
            <Redirect to='/' />
        )
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
                                    className="modalinput"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="pin-edit-body">
                                <label htmlFor="pin-edit-body">body</label>
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
export default PinEditForm