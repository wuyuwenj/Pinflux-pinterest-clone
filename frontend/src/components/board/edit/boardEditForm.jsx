import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteBoard } from "../../../store/boards";
import { updateBoard } from "../../../store/boards";
import { useHistory } from "react-router-dom";
import "./boardEditForm.css";
const BoardEditForm = (props) => {
  const currentUserId = useSelector((state) => state.session.user.id);
  const { board } = props;
  const [name, setName] = useState(board.name);
  const [body, setBody] = useState(board.body);
  const history = useHistory();

  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteBoard(board.id)).then(() => {
      history.push(`/user/${currentUserId}`);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Data = {
      ...board,
      name,
      body,
    };
    dispatch(updateBoard(Data)).then(() => {
      history.push(`/user/${currentUserId}`);
    });
  };
  return (
    <div className="pin-edit-form-container">
      <div className="pin-edit-heading">
        <div>Edit Your Board</div>
      </div>
      <form className="form-form-container" onSubmit={handleSubmit} action="">
        <div className="pin-edit-form">
          <div className="pin-edit-left">
            <div className="pin-edit-inputs">
              <div className="pin-edit-board"></div>
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
          <button
            type="button"
            onClick={handleDelete}
            className="editFormDeleteButton"
          >
            <div>Action</div>
            <h1>Delete board</h1>
            <div>Delete this board and all of its Pins forever.</div>
            <div>You can't undo this.</div>
          </button>
        </div>
        <button type="submit" className="editFormSaveButton">
          <div>Done</div>
        </button>
      </form>
    </div>
  );
};
export default BoardEditForm;
