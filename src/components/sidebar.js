import {BsClockHistory} from "react-icons/bs";
import {FaItunesNote} from "react-icons/fa";
import {BiAlbum} from "react-icons/bi";
import {BiPodcast} from "react-icons/bi";
import {GiMicrophone} from "react-icons/gi";
import "../styles/sidebar.scss"
export default function Sidebar(){
    return(
        <div className="sidebar-container">
            <div className="sidebar-top">
            <h5>Browse</h5>
            <ul type="none">
          <li>New Releses</li>
          <li>Top Charts</li>
          <li>Top Playlists</li>
          <li>Podcasts</li>
          <li>Top Artists</li>
          <li>Radio</li>
            </ul>
            </div>

            <div className="sidebar-bottom">
            <h5>Library</h5>
            <ul type="none">
          <li><BsClockHistory/> History</li>
          <li><FaItunesNote/>  Songs</li>
          <li><BiAlbum/>  Album</li>
          <li><BiPodcast/>  Podcasts</li>
          <li><GiMicrophone/>  Artists</li>
            </ul>
            <button>New Playlist +</button>
            </div>
              
        </div>
    )
}