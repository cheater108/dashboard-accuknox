import { configureStore } from "@reduxjs/toolkit";
import sideNavReducer from "./sidenavSlice";
import categoryReducer from "./categorySlice";

export const store = configureStore({
	reducer: {
		sideNavReducer,
		categoryReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
