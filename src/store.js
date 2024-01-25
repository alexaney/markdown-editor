import markdownReducer from "./reducer";
import { createStore } from "redux";

const markdownStore = createStore(markdownReducer);

export default markdownStore;