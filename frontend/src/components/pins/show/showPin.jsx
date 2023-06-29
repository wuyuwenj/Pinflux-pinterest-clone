import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getPin } from "../../../store/pins";
import { getUser } from "../../../store/user";
import { Link } from "react-router-dom";
import { Modal } from "../../../context/Modal";
import { getBoards } from "../../../store/boards";
import { addPinBoardMapping } from "../../../store/pinboard";
import PinEditForm from "../edit/pinsedit";
import Loading from "../../LoadingPage/Loading";
import { useFetchPin } from "../../../hooks/useFetchPin";
import { useFetchUsers } from "../../../hooks/useFetchUsers";
import { useFetchBoards } from "../../../hooks/useFetchBoards";
import "./show.css";


export default function ShowPin({ userId }) {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [selectedboard, setSelectedboard] = useState("");
  const [boxHeight, setBoxHeight] = useState(null);
  const [loadingPin, setLoadingPin] = useState(true);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingBoards, setLoadingBoards] = useState(true);
  const history = useHistory();

  useFetchBoards({ id: userId, setLoadingBoards });
  useFetchUsers(setLoadingUsers);
  useFetchPin({ id, setLoadingPin });

  const boards = useSelector(getBoards);
  const pin = useSelector(getPin(id));
  const pinowner = useSelector(getUser(pin?.authorId));
console.log(boards,pin,pinowner,'sg',userId)
    useEffect(() => {
    if (!pin) return;
      const img = new Image();
      img.src = pin.imageUrl;
      img.onload = function () {
        setBoxHeight(img.height * (440 / img.width));
      };
  }, [pin]);
  useEffect(() => {
    if (!selectedboard && boards[0]) {
      setSelectedboard(boards[0].name);
    }
  }, [boards]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let board;

    const pinId = pin.id;

    board = await boards.find((board) => board.name === selectedboard);
    dispatch(addPinBoardMapping(pinId, board.id)).then(() => {
      history.push("/");
    });
  };

  if (loadingPin || loadingUsers || loadingBoards) {
    return <Loading />;
  } else {
    return (
      pinowner && (
        <div className="pinshowpagebg">
          <form
            className="showformbox"
            onSubmit={handleSubmit}
            style={{ height: boxHeight ? `${boxHeight}px` : "auto" }}
          >
            <div className="left-container">
              <img src={pin.imageUrl} alt="" className="showimg" />
            </div>
            <div className="right-container">
              <button
                type="button"
                className="Editbutton"
                onClick={() => setShowModal(true)}
              >
                Edit
              </button>

              {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                  <PinEditForm pin={pin} setShowModal={setShowModal} />
                </Modal>
              )}
              <label htmlFor="boards" />
              <select
                name="boards"
                value={selectedboard}
                onChange={(e) => setSelectedboard(e.target.value)}
                className="boarddropdown"
              >
                {boards.map((board) => (
                  <option key={board.id} value={board.name}>
                    {board.name}
                  </option>
                ))}
              </select>
              <input className="saveButton" type="submit" value="Save" />
              <br />
              <br />
              <br />
              <div className="showuserButton-container">
                <Link to={`/user/${pinowner.id}`} className="showuserButton">
                  <span className="showUsername">{pinowner.username[0]}</span>
                  <span className="showfullUsername">{pinowner.username}</span>
                </Link>
                {/* <FollowButton followeeId={pinowner.id} followerId={sessionUser.id}  /> */}
              </div>
              <br />
              <br />
              <br />
              {/* <div>Uploaded by {pin.author.username}</div> */}
              <div className="Pintitle">{pin.title}</div>
              <div className="Pinbody">{pin.body}</div>
              <div>{pin.alt_text}</div>
              <br />
            </div>
          </form>
        </div>
      )
    );
  }
}
