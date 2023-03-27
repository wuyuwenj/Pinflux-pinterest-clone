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
     const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPins());
        // const fetchData = async () => {
        //     await dispatch(fetchPins());
        //     setLoading(false)
        // };
        // fetchData();
    },[])
    // if(!loading){
        const pins = useSelector(getPins); 
        const a2=1;
    // }

    

    const breakpointColumnsObj = {
        default: 3,
        1100: 2, 
        700: 1
       
    };

    return(
        <div className='grid'>
            {pins.map(pin => <Link to={`/pins/${pin.id}`} className='link'><img className='images' src={pin.imageUrl} alt={pin.title} /></Link> ) }
            {/* <Masonry */}
                {/* breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >    */}
            {/* <h1>hello</h1> */}
            {/* {pins.map(pin => <RenderSingle pin={pin} />)} */}

                {/* {pins.map(pin => pin.image ) } */}

                {/* {pins.map(pin => <RenderSingle pin={pin} />)} */}
                {/* {pins.map(pin => (
                    <div key={pin.id}>
                        <img src={pin.imageUrl} alt={pin.title} />
                        <h3>{pin.title}</h3>
                        <p>{pin.description}</p>
                    </div>
                ))}
            </Masonry> */}
        </div>
        
    )
}

