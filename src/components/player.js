
import {BiRepeat} from 'react-icons/bi';
import {AiFillStepBackward} from 'react-icons/ai';
import {BsPlayFill} from 'react-icons/bs';
import {AiFillStepForward} from 'react-icons/ai';
import {ImShuffle} from 'react-icons/im';
import {BsThreeDots} from 'react-icons/bs';
import {HiSpeakerWave} from 'react-icons/hi2';
import {AiOutlineArrowsAlt} from 'react-icons/ai';

import "../styles/player.scss";
import { useSelector } from 'react-redux';


export default function Player(){
    const queue = useSelector(state =>state.Queue.value);
    console.log(queue);
    let url="";
    if(queue.length){
        url = queue[0].downloadUrl[0].link
    }
    if(queue.songs){
        url = queue.songs[0].downloadUrl[0].link
    }
    return(
        <div className='player-container'>
            <div className='player-left'>
          <img src="	https://c.saavncdn.com/807/Pathaan-Hindi-2022-20221222104158-50x50.jpg"/>
          <p>pathaan's theme</p>
            </div>
            <div className='player-mid'>
                <p><BiRepeat/></p>
                <p><AiFillStepBackward/></p>
                <p><BsPlayFill/></p>
                <p><AiFillStepForward/></p>
                <p><ImShuffle/></p>

            </div>
            <div className='player-right'>
                <p>00:00/5:00</p>
                <p><BsThreeDots/></p>
                <p><HiSpeakerWave/></p>
               <p><AiOutlineArrowsAlt/></p>
            </div>

                
        </div>
    )
}