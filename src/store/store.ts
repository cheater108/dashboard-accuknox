import { configureStore } from "@reduxjs/toolkit";
import sideNavReducer from "./slices";

export const store = configureStore({
	reducer: {
		sideNavReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
