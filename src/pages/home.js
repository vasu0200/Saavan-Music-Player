import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {v4 as uuid} from "uuid"
import "../styles/home.scss";
import {fetchHomepageData} from "../redux/slice/homePageSlice";
import HomeCard from "../components/homeCard";
function Home() {
  const trending=useSelector(state=>state.HomePage.trending);
  const albums=useSelector(state=>state.HomePage.albums);
  const playlists=useSelector(state=>state.HomePage.playlists);
  const charts=useSelector(state=>state.HomePage.charts);
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(fetchHomepageData())
  },[])

    return (
      <div className="home-container">
        <h1 className="home-title">Trending Now</h1>
      <div className="home-module">
      {trending.albums && trending.albums.map((e)=> {
        let obj={...e};
        let title = obj.name;
        delete obj.name;
        obj.title=title;
        return <HomeCard data={obj} key={uuid()}/>
      })}
        
      </div>
      <h1 className="home-title">Top Charts</h1>
      <div className="home-module">
        
        {charts.map(e=> <HomeCard data={e} key={uuid()}/>)}
      </div>
      <h1 className="home-title">Albums</h1>
      <div className="home-module">
      {albums.map && albums.map((e)=> {
        let obj={...e};
        let title = obj.name;
        delete obj.name;
        obj.title=title;
        return <HomeCard data={obj} key={uuid()}/>
      })}
        
      </div>
      <h1 className="home-title">Playlists</h1>
      <div className="home-module">
       
        {playlists.map(e=> <HomeCard data={e} key={uuid()}/>)}
      </div>
      </div>
    );
  }
  
  export default Home;
  