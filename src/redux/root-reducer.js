import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import basketReducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["data"]
}

const rootReducer = combineReducers({
  data: basketReducer,
});

export default persistReducer(persistConfig, rootReducer);
