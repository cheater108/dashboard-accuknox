import { useDispatch } from "react-redux";
import { toogleSideNav } from "../store/sidenavSlice";
import type { Widgets } from "../store/categorySlice";



const WidgetCard = ({ name, data, show }: Widgets) => {
    const dispatch = useDispatch();

    if ((!name && !data) || !show) {
        return (
            <div className="h-[200px] w-[400px] bg-[#f5f4f4ab] flex justify-center items-center rounded-2xl">
                <div className="px-4 py-1 bg-transparent text-gray-500 border-gray-400 border-[1.5px] rounded-md cursor-pointer" onClick={() => dispatch(toogleSideNav())}>Add Widget</div>
            </div>
        )
    }

    return (
        <div className="h-[200px] w-[400px] bg-white flex flex-col rounded-2xl p-2 px-4">
            <p className="font-semibold">{name}</p>
            <div className="mt-4">
                <img src="null" alt="" />
                {data?.map((d, ind) => (
                    <p key={ind} className="text-sm">{d.parameter} - {d.value}</p>
                ))}
            </div>
        </div>
    )
}

export default WidgetCard