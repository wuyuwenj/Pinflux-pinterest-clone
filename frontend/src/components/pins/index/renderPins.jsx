import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPins, getPins } from '../../../store/pins';
import RenderSingle from './renderSingle';
import Masonry from 'react-masonry-css'
import "./indexPin.css"
import { Link } from 'react-router-dom';
import { fetchUsers, getUsers } from '../../../store/user';

export default function PinIndex({boardpins}) {
    const [loading, setLoading] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // get initial window width
    function updateGridMargin() {
        setWindowWidth(window.innerWidth)
        const grid = document.querySelector('.my-masonry-grid');
        let width = 236 * Math.floor(windowWidth / 252) + (20*Math.floor(windowWidth / 252));
        // padding=10
        // grid.style.marginLeft = padding+'px';
        // grid.style.marginRight = padding+'px';
        grid.style.width = width+'px';

    }
     const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPins());
        dispatch(fetchUsers());
        // const fetchData = async () => {
        //     await dispatch(fetchPins());
        //     setLoading(false)
        // };
        // fetchData();
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        // window.addEventListener('resize', updateGridMargin);

        return () => window.removeEventListener('resize', handleResize);
        // return () => window.removeEventListener('resize', updateGridMargin);
    }, [windowWidth])
    // useEffect(() => {
    //     const handleResize = () => setWindowWidth(window.innerWidth);
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);
    useEffect(()=>{
        updateGridMargin()
    }, [window.innerWidth])
    // if(!loading){
    const pins = useSelector(getPins); 
    // }
    // const users=useSelector(getUsers)
    // let usersArr;

    const breakpointColumnsObj = {
        default: Math.floor(windowWidth/252)
       
    };
    let revpins;
    if(!boardpins){
    revpins = pins.slice().reverse()
    }else{
        revpins = boardpins.slice().reverse()
    }
    return(
        <div className='grid'>
            {/* {pins.map(pin => <Link key={pin.id} to={`/pins/${pin.id}`} className='link'><img className='images' src={pin.imageUrl} alt={pin.title} /></Link> ) } */}
            
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >


                {revpins.map(pin => (
                        <Link key={pin.id} to={`/pins/${pin.id}`} className='link'>
                        <img className="images" src={pin.imageUrl} alt={pin.title} />
                        <h3 className='pintitle'>{pin.title}</h3>
                    </Link>

                ))}
            </Masonry>
        </div>
        
    )
}

