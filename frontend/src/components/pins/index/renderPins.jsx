import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPins, getPins } from "../../../store/pins";
import RenderSingle from "./renderSingle";
import Masonry from "react-masonry-css";
import "./indexPin.css";
import { Link } from "react-router-dom";
import { fetchUsers, getUsers } from "../../../store/user";
import Loading from "../../LoadingPage/Loading";
import Navigation from "../../Navigation";

export default function PinIndex({ boardpins, nav = true }) {
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // get initial window width
  const [gridWidth, setGridWidth] = useState(0);

  function updateGridMargin() {
      setWindowWidth(window.innerWidth)
      const grid = document.querySelector('.my-masonry-grid');
      let width = 236 * Math.floor(windowWidth / 252) + (20*Math.floor(windowWidth / 252));
      setGridWidth(width);
      if(grid)grid.style.width = width+'px';
  }


  const dispatch = useDispatch();
  useEffect(() => {
    Promise.all([dispatch(fetchPins()), dispatch(fetchUsers())]).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    updateGridMargin();
  }, [window.innerWidth]);
  const pins = useSelector(getPins);
  const breakpointColumnsObj = {
    default: Math.floor(windowWidth / 252),
  };

  const revpins = useMemo(() => {
    if (!boardpins) {
      return pins.slice().reverse();
    } else {
      return boardpins.slice().reverse();
    }
  }, [pins, boardpins]);
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <div>
        {nav && <Navigation />}

        <div className="grid">
          {/* {pins.map(pin => <Link key={pin.id} to={`/pins/${pin.id}`} className='link'><img className='images' src={pin.imageUrl} alt={pin.title} /></Link> ) } */}

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            style={{ width: gridWidth + "px" }}
          >
            {revpins.map((pin) => (
              <Link key={pin.id} to={`/pins/${pin.id}`} className="link">
                <img className="images" src={pin.imageUrl} alt={pin.title} />
                <h3 className="pintitle">{pin.title}</h3>
              </Link>
            ))}
          </Masonry>
        </div>
      </div>
    );
  }
}
