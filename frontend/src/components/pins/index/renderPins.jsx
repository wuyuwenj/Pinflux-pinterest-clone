import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPins, getPins } from '../../../store/pins';
import RenderSingle from './renderSingle';
import Masonry from 'react-masonry-css'
import "./indexPin.css"
import { Link } from 'react-router-dom';

export default function PinIndex() {
    const [loading, setLoading] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // get initial window width

     const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPins());
        // const fetchData = async () => {
        //     await dispatch(fetchPins());
        //     setLoading(false)
        // };
        // fetchData();
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[])
    // if(!loading){
        const pins = useSelector(getPins); 
    // }

    

    const breakpointColumnsObj = {
        default: Math.floor(windowWidth/252)
       
    };

    return(
        <div className='grid'>
            {/* {pins.map(pin => <Link key={pin.id} to={`/pins/${pin.id}`} className='link'><img className='images' src={pin.imageUrl} alt={pin.title} /></Link> ) } */}
            
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {pins.map(pin => (
                        <Link key={pin.id} to={`/pins/${pin.id}`} className='link'>
                        <img className="images" src={pin.imageUrl} alt={pin.title} />
                        <h3>{pin.title}</h3>
                        <p>{pin.description}</p>
                    </Link>

                ))}
            </Masonry>
        </div>
        
    )
}

