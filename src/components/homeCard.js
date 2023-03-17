import {React} from "react";
import { useDispatch } from 'react-redux';
import { fetchDetails } from '../redux/slice/queueSlice';
import "../styles/homeCard.scss"

export default function HomeCard({data}){
    const dispatch=useDispatch();
const handleClick =()=>{
    const albumUrl="https://saavn.me/albums?id="+data.id;
    const playlistUrl="https://saavn.me/playlists?id="+data.id;
    const songsUrl="https://saavn.me/songs?id="+data.id;
    let url="";
    if(data.type === "playlist") url=playlistUrl;
    if(data.type === "album") url=albumUrl;
    if(data.type === "song") url=songsUrl;
    dispatch(fetchDetails({url,dispatch}));
}
    return(
        <div className="homecard-container" onClick={handleClick}>
        <div className="homecard-item">
        <img src={data.image[2].link} />
        <p className="title">{data.title}</p>
        <p>{data.subtitle}</p>
        </div>
        </div>
    )
}
