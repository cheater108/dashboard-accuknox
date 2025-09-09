import { useDispatch } from "react-redux";
import { toogleSideNav } from "../store/sidenavSlice";
import type { Widgets } from "../store/categorySlice";
import { Plus, X } from "lucide-react";
import { useState } from "react";



const WidgetCard = ({ name, data, show }: Widgets) => {
    const dispatch = useDispatch();
    const [hover, setHover] = useState(false);

    if ((!name && !data) || !show) {
        return (
            <div className="h-[200px] w-[400px] bg-[#f5f4f4ab] flex justify-center items-center rounded-2xl">
                <div className="px-4 py-1 bg-transparent text-gray-500 border-gray-400 border-[1.5px] rounded-md cursor-pointer flex gap-1 items-center" onClick={() => dispatch(toogleSideNav())}>
                    <Plus size={24} /> Add Widget
                </div>
            </div>
        )
    }

    return (
        <div className="h-[200px] w-[400px] bg-white flex flex-col rounded-2xl p-2 px-4 relative"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <p className="font-semibold">{name}</p>
            <div className="mt-2 flex items-center gap-8">
                <img width={150} src="/sample_chart.jpeg" alt="smaple chart" />
                <div>
                    {data?.map((d, ind) => (
                        <p key={ind} className="text-sm">{d.parameter} - {d.value}</p>
                    ))}
                </div>
            </div>
            {hover && <X size={20} className="absolute top-2 right-2 cursor-pointer" />}
        </div>
    )
}

export default WidgetCard