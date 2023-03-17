import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { useSelector,useDispatch } from 'react-redux';
import "../styles/queue.scss";
import { selectCurrent } from '../redux/slice/currentPlayingSlice';

export default function Queue() {
const queue = useSelector((state) => state.Queue.value);
const dispatch = useDispatch();
let data=[];
if(queue.length){
    data=queue;
}
if(queue.songs){
    data=queue.songs;
}

    return(
        <div className="queue-container">
            <div className="queue-head">
                <p className='queue-head-title'>Queue</p>
                <div className="queue-head-action">
                    <p><BsThreeDots/></p>
                    <button>Save</button>
                    <button>Clear</button>
                </div>
            </div>
            <div className='queue-body'>
                <h5>It's pretty quiet in here.</h5>
                <p>Go find some tunes!</p>
                <button className='playlist'>Play Weekly Top Songs</button>
                <button>Browse New Releses</button>
                <div className='queue-body-main'>
                    {data.map((e)=>{
                        return(
                            <div className='queue-body-list' onClick={()=>dispatch(selectCurrent(e))}>
                          <img src={e.image[2].link} />
                         <div> <p>{e.name}</p>
                          <p>{e.primaryArtists}</p></div>
                          <p className='heart'><AiOutlineHeart/></p>
                          <p>{Math.floor(e.duration/60)}:{e.duration - (Math.floor(e.duration /60)*60).toFixed(2)}</p>
                          </div>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    );
}