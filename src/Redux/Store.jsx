import { configureStore } from "@reduxjs/toolkit";
// import sliceReducer from './Slice'
import sliceReducer from './Slice'
const Store = configureStore({
    reducer: {
        myStoreData:sliceReducer
    }
})
export default Store