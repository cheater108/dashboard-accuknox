import { createSlice } from "@reduxjs/toolkit";

interface SidenavState {
	open: boolean;
}

const initialState: SidenavState = {
	open: false,
};

const sideNavSlice = createSlice({
	name: "sidenav",
	initialState,
	reducers: {
		toogleSideNav: (state) => {
			state.open = !state.open;
		},
	},
});

export const { toogleSideNav } = sideNavSlice.actions;
export default sideNavSlice.reducer;
