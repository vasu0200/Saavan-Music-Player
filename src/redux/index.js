import { configureStore } from "@reduxjs/toolkit";
import homePageSlice from "./slice/homePageSlice";
import queueSlice from "./slice/queueSlice";
import currentplayingSlice from "./slice/currentPlayingSlice";

const store =configureStore({
    reducer:{
        HomePage:homePageSlice.reducer,
        Queue:queueSlice.reducer,
        CurrentPlaying:currentplayingSlice.reducer,
    }
});
export default store;