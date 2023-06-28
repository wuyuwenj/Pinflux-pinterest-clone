import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { deletePin, updatePin } from "../../../store/pins"
import { useHistory } from "react-router-dom"
import Loading from "../../LoadingPage/Loading"
import "./pinsedit.css"

const PinEditForm = (props) => {
    const { pin, setShowModal }=props
    const [title, setTitle] = useState(pin.title)
    const [body, setBody]=useState(pin.body)
    const dispatch=useDispatch();
    const [redirect, setRedirect] = useState(false)
    const history = useHistory();
    const [isLoading, setLoading] = useState(false);

    const handleDelete=(e)=>{
        e.preventDefault()
        dispatch(deletePin(pin.id)).then(() => {
            setLoading(false)
        }).then(() => {
            history.push('/')
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        const Data={
            ...pin,
            title,
            body
        }
        console.log(pin)
        dispatch(updatePin(Data)).then(() => {
            setLoading(false)
        }).then(()=>{
            setShowModal(false)
        })
        e.stopPropagation();
    }
    // console.log('passinghere')
    if (isLoading){
        return (<>
            <Loading />
        </>)    
        }else{
    return(
        <div className="pin-edit-form-container">
            <div className="pin-edit-heading">
                <div>Edit this pin</div>
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
                <div className="pinEditButContainer">
                    <button type="button" onClick={handleDelete} className="edit-delete-buttons">
                        <div>Delete</div>
                    </button>

                    
        
                <button type="submit" className="edit-save-buttons">
                    <div>Save</div>
                </button>
                </div>
                
            </form>
        </div>
    )
    }
  
}
export default PinEditForm