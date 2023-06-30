import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { getPins } from "../../../store/pins";
import RenderSingle from "./renderSingle";
import Masonry from "react-masonry-css";
import Loading from "../../LoadingPage/Loading";
import Navigation from "../../Navigation";
import { useFetchPins } from "../../../hooks/useFetchPins";
import "./indexPin.css";

export default function PinIndex({ boardpins, HaveNav = true }) {
  const [loadingPins, setLoadingPins] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // get initial window width
  const [gridWidth, setGridWidth] = useState(0);

  useFetchPins(setLoadingPins);

  const pins = useSelector(getPins);

  const revpins = useMemo(() => {
    //using memo to avoid unnecessary calculation when pins and boardpins are not changed
    if (!boardpins) {
      //reverse the pins so that the newest pin is on the top
      return pins.slice().reverse(); //using slice to avoid mutating the original array
    } else {
      return boardpins.slice().reverse();
    }
  }, [pins, boardpins]);

  const colCount = Math.floor(windowWidth / 252); //getting column count based on window width

  const breakpointColumnsObj = useMemo(
    //avoid unnecessary calculation when colCount is not changed
    () => ({
      default: colCount,
    }),
    [colCount]
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); //clean up to aviod memory leak when the component is unmounted
    };
  }, []);

  useEffect(() => {
    //change the width of the grid based on the column count
    let newWidth = 236 * colCount + 20 * colCount; // 236 is the width of a pin, 20 is the margin between pins
    setGridWidth(newWidth);
  }, [colCount]);

  if (loadingPins) {
    return (
      <>
        {HaveNav && <Navigation />}
        <Loading />
      </>
    );
  } else {
    return (
      <div>
        {HaveNav && <Navigation />}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          style={{ width: `${gridWidth}px` }}
        >
          {revpins.map((pin) => (
            <RenderSingle pin={pin} key={pin.id} />
          ))}
        </Masonry>
      </div>
    );
  }
}
