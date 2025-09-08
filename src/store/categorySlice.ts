import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import sampleData from "../../utils/sampleData.json";

interface Widgets {
	id: number;
	name: string;
	show: boolean;
	data: { parameter: string; value: number }[];
}

interface Category {
	id: number;
	name: string;
	widgets: Widgets[];
}

const initialState: Category[] = sampleData;

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		removeWidget: (
			state,
			action: PayloadAction<{ id: number; widgetId: number }>
		) => {
			const { id, widgetId } = action.payload;
			state.forEach((c) => {
				if (c.id === id) {
					c.widgets = c.widgets.filter((w) => w.id !== widgetId);
				}
			});
		},
		showWidget: (
			state,
			action: PayloadAction<{ id: number; widgetId: number; show: boolean }>
		) => {
			const { id, widgetId, show } = action.payload;
			state.forEach((c) => {
				if (c.id === id) {
					c.widgets.forEach((w) => {
						if (w.id === widgetId) w.show = show;
					});
				}
			});
		},
		addWidget: (state, action: PayloadAction<{ id: number; data: Widgets }>) => {
			const { id, data } = action.payload;
			state.forEach((c) => {
				if (c.id === id) {
					c.widgets.push(data);
				}
			});
		},
	},
});

export const { removeWidget, showWidget, addWidget } = categoriesSlice.actions;

export default categoriesSlice.reducer;
