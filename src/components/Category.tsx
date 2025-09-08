import WidgetCard from "./WidgetCard"

const Category = () => {
	return (
		<div className="px-4 bg-neutral-200 pb-4 pt-1 rounded-2xl mx-2">
			<p className="font-semibold">CSPM Executive Dashboard</p>
			<div className="container flex gap-4 mt-2">
				{Array.from({ length: 3 }).map(() => (
					<WidgetCard />
				))}
			</div>
		</div>
	)
}

export default Category