import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Url.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeartSolid } from '@fortawesome/free-solid-svg-icons';

function Url(){
    const location=useLocation();
    const searchParams=new URLSearchParams(location.search);
    const subject=searchParams.get('subject');
    const title=searchParams.get('title');
    const content=searchParams.get('content');

    let avi, index;

    for (let i = 0; i < localStorage.length; i++) {
    let theme = JSON.parse(localStorage.getItem(i))
    if (title == theme.title) {
        avi = theme
        index=i;
    }}
    console.log(avi.isCartState)
    const [isCartState, setIsCartState] = useState(avi.isCartState);
    
    useEffect(()=>{
        if(isCartState){
            //찜 했을 경우
            const cartButton = document.getElementById('heart');

            if (isCartState) {
                cartButton.innerHTML = '<FontAwesomeIcon icon="fa-solid fa-heart" />'; // Filled heart icon
            } else {
                cartButton.innerHTML = '<FontAwesomeIcon icon={faHeart} />'; // Empty heart icon
            }
        }
    },[isCartState]);

    const handleCartClick = () => {
        setIsCartState(!isCartState);
        avi.isCartState = !isCartState;
        localStorage.setItem(index, JSON.stringify(avi));
    };

    return(
        <>
            <article id="url">
                <div>
                    <embed id="main-url"
                    src={`https://www.youtube.com/embed/${avi.url}?showinfo=0&modestbranding=1&rel=0`}
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplasy; clipboard-wri encrypted-media; gyroscope; picture-in-pictu web-share"
                    allowfullscreen></embed>
                </div>
            </article>
            <article id="contents">
                <div>
                    <h3>{avi.title}</h3>
                    <p>{avi.content}</p>
                    <button id="heart" onClick={handleCartClick}>
                        {isCartState ? <FontAwesomeIcon icon="fa-solid fa-heart" /> : <FontAwesomeIcon icon={faHeart} />}
                    </button>
                </div>
            </article>
        </>
    )
}

export default Url;