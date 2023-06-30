import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPins } from "../../../store/pins";
import { Modal } from "../../../context/Modal";
import BoardEditForm from "../edit/boardEditForm";
import { getBoards, getBoard } from "../../../store/boards";
import PinIndex from "../../pins/index/renderPins";
import "./showBoard.css";
import Loading from "../../LoadingPage/Loading";
import { useFetchPins } from "../../../hooks/useFetchPins";
import { useFetchBoards } from "../../../hooks/useFetchBoards";
import { useFetchBoard } from "../../../hooks/useFetchBoard";
export default function ShowBoard({ userId }) {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [loadingPins, setLoadingPins] = useState(true);
  const [loadingBoard, setLoadingBoard] = useState(true);
  const [loadingBoards, setLoadingBoards] = useState(true);

  useFetchPins(setLoadingPins);
  useFetchBoard({ id, setLoadingBoard });
  useFetchBoards({ id: userId, setLoadingBoards });

  const boards = useSelector(getBoards);
  const pins = useSelector(getPins); //fetch all the pins
  const board = useSelector(getBoard(id));

  const boardPins = useMemo(() => {
    return boards.flatMap((board) => {
      if (board.id === Number(id)) {
        return board.pins.map((pinId) => pins.find((pin) => pin.id === pinId)); //find the pins that are on this board
      }
      return [];
    });
  }, [id, boards, pins]);

  if (loadingBoard || loadingPins || loadingBoards) {
    return <Loading />;
  } else {
    return (
      <div className="showboardpagebg">
        <div>
          <h1 className="boardname">
            {board && board.name}
            <button
              className="showboardloginbt"
              onClick={() => setShowModal(true)}
            >
              Edit
            </button>
          </h1>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <BoardEditForm board={board} />
            </Modal>
          )}
          <br />
          <p>{board && board.body}</p>
          <br />
          {boardPins && boardPins.length === 0 && (
            <p>There aren’t any Pins on this board yet</p>
          )}
          <PinIndex boardpins={boardPins} HaveNav={false} />
        </div>
      </div>
    );
  }
}
