import WidgetCard from "./WidgetCard"
import type { ICategory } from "../store/categorySlice";

const Category = ({ category }: { category: ICategory }) => {
	const widgets = category.widgets.filter((c) => c.show);
	const widgetWithEmpty = widgets.length < 3 ? [...widgets, {}, {}, {}].slice(0, 3) : [...widgets];

	return (
		<div className="px-4 bg-neutral-200 pb-4 pt-1 rounded-2xl mx-2">
			<p className="font-semibold">{category.name}</p>
			<div className="container flex gap-4 mt-2">
				{widgetWithEmpty.map((w) => (
					<WidgetCard key={w.id} id={w.id} show={w.show} name={w.name} data={w.data} categoryId={category.id} />
				))}
			</div>
		</div>
	)
}

export default Category