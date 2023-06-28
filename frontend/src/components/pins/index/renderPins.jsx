import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import {  useSelector } from "react-redux";
import {  getPins } from "../../../store/pins";
import RenderSingle from "./renderSingle";
import Masonry from "react-masonry-css";
import "./indexPin.css";
import { Link } from "react-router-dom";
import {  getUsers } from "../../../store/user";
import Loading from "../../LoadingPage/Loading";
import Navigation from "../../Navigation";
import { useFetchPins } from "../../../hooks/useFetchPins";
import { useFetchUsers } from "../../../hooks/useFetchUsers";

export default function PinIndex({ boardpins, nav = true }) {
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // get initial window width
  const [gridWidth, setGridWidth] = useState(0);
const handleScroll = useCallback(() => {
    const grid = document.querySelector(".grid");
    const scrollBottom =
      grid.scrollHeight - grid.scrollTop - grid.clientHeight;
    if (scrollBottom < 100) {
    //   console.log("fetch more pins",grid.scrollHeight,grid.scrollTop, grid.clientHeight);
    }
  }, []);
    const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  function updateGridMargin() {
      setWindowWidth(window.innerWidth)
      const grid = document.querySelector('.my-masonry-grid');
      let width = 236 * Math.floor(windowWidth / 252) + (20*Math.floor(windowWidth / 252));
      setGridWidth(width);
      if(grid)grid.style.width = width+'px';
  }


    useFetchPins(setLoading)
    useFetchUsers()

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleResize,handleScroll]);
  
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
        {nav && <Navigation />}
        <Loading />
      </>
    );
  } else {
    return (
      <div >
        {nav && <Navigation />}

        <div className="grid" onscroll={handleScroll}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
            style={{ width: gridWidth + "px" }}
          >
            {revpins.map((pin) => (
              <RenderSingle pin={pin}/>
            ))}
          </Masonry>
        </div>
      </div>
    );
  }
}
