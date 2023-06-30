<p align="center">
  <img width="200" height="200" src="https://github.com/wuyuwenj/Pinflux-pinterest-clone/blob/main/frontend/public/logo-no-background.png">
</p>

<h1>Pinflux</h1>

[Pinflux](https://pinflux.onrender.com/) is a [Pinterest](https://www.pinterest.com/) clone. Pinflux is a platform that enables users to explore and share various pins by creating personalized boards. Similar to Pinterest, it serves as a hub for people to find inspiration and connect with others.

## Technologies
  <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" /> <img alt="Ruby" src="https://img.shields.io/badge/ruby-%23CC342D.svg?style=flat-square&logo=ruby&logoColor=white" /> <img alt="Rails" src="https://img.shields.io/badge/rails-%23CC0000.svg?style=flat-square&logo=redux&logoColor=white" /> <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=redux&logoColor=white" /> <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=redux&logoColor=white" /> <img alt="Rails" src="https://img.shields.io/badge/rails-%23CC0000.svg?style=flat-square&logo=redux&logoColor=white" /> <img alt="redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white" /> <img alt="AWS" src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat-square&logo=amazon-aws&logoColor=white" />
  
## Site Views

Main Page

![](https://github.com/wuyuwenj/Pinflux-pinterest-clone/blob/main/frontend/public/pinIndex.png)

Create Pin

![](https://github.com/wuyuwenj/Pinflux-pinterest-clone/blob/main/frontend/public/createpin.png)

Follow Modal

![](https://github.com/wuyuwenj/Pinflux-pinterest-clone/blob/main/frontend/public/follow.png)

Setting Page

![](https://github.com/wuyuwenj/Pinflux-pinterest-clone/blob/main/frontend/public/setting.png)


## Code Snippets

The solution makes use of FormData to create pins with images using AWS and Redux. A loading page is used, along with chained actions in the dispatch function and useHistory, to provide a smooth user experience. This approach allows pins to be displayed instantly after they are created successfully.




```
# createpin.jsx

 const handleSubmit = (e)=>{
        e.preventDefault();
        
        setLoading(true)
        const formData = new FormData();
        formData.append('pin[title]', title);
        formData.append('pin[body]', body);
        formData.append('pin[alt_text]', alttext);
        formData.append('pin[destination_link]', deslink);
        formData.append('pin[author_id]', sessionUser.id);
        formData.append('pin[image]', imgfile);
       
        dispatch(createPin(formData)).then(() => {
            setLoading(false)
        }).then(() => {
            history.push('/')
        })
        
        
    }
 ```
 

Utilizing custom hooks for fetching data to improve readability and reuseablility of components, and allows components to automatically re-render when the fetched data changes. Additionally, using useMemo to cache rendering pins, optimizing performance by avoiding unnecessary recalculations of revpins array when the dependencies (pins and boardpins) haven't changed.

```

#useFetchPins.js

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPins } from '../store/pins';
export const useFetchPins = (setLoadingPins) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPins()).then(() => {
        setLoadingPins(false);
    });
  }, [dispatch]);
};


#renderPins.jsx

export default function PinIndex({ boardpins, HaveNav = true }){
  const [loadingPins, setLoadingPins] = useState(true);

  useFetchPins(setLoadingPins);//using custom hook to fetch pins

  const pins = useSelector(getPins);

  const revpins = useMemo(() => {//using memo to avoid unnecessary calculation when pins and boardpins are not changed
    if (!boardpins) {//reverse the pins so that the newest pin is on the top
      return pins.slice().reverse();//using slice to avoid mutating the original array
    } else {
      return boardpins.slice().reverse();
    }
  }, [pins, boardpins]);
}

  #showBoard.jsx

  export default function ShowBoard({ userId }) {
  const { id } = useParams();
  const [loadingPins, setLoadingPins] = useState(true);
  const [loadingBoard, setLoadingBoard] = useState(true);

  useFetchPins(setLoadingPins);//reusing useFetchPins here
  useFetchBoard({ id, setLoadingBoard });
  }

```
