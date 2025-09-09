import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { toogleSideNav } from "../store/sidenavSlice";
import { useState } from "react";
import { showWidget } from "../store/categorySlice";

const Sidenav = () => {
    const open = useSelector((state: RootState) => state.sideNavReducer.open);
    const categories = useSelector((state: RootState) => state.categoryReducer);
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(1);

    const handleHide = (widgetId: number, show: boolean) => {
        dispatch(showWidget({ id: selected, widgetId, show: !show }))
    }

    if (!open) return null;

    return (
        <div className="fixed right-0 top-0 w-lvw h-lvh bg-black/30">
            <section className="fixed right-0 top-0 w-2/5 bg-white h-lvh flex flex-col">
                <div className="bg-blue-800 py-2 px-4 text-white">
                    <p className="font-semibold">Add a Widget</p>
                </div>
                <div className="py-2">
                    <p className="px-4">Personalize your dashboard by adding the following widgets.</p>
                    <div className="flex pt-3 px-1">
                        {categories.map(c => (
                            <div className={`font-semibold ${c.id === selected ? "border-b-blue-800 border-b-2" : ""} w-[70px] flex justify-center pb-2 cursor-pointer`} key={c.id}
                                onClick={() => setSelected(c.id)}
                            >{c.name.split(" ")[0]}</div>
                        ))}
                    </div>
                </div>
                <div className="mt-1 p-2">
                    {categories.find((c) => c.id === selected)?.widgets.map((w) => (
                        <div className="flex border px-4 p-1 gap-3 items-center mb-2 rounded-md">
                            <input type="checkbox" checked={w.show} onChange={() => handleHide(w.id as number, w.show as boolean)} />
                            <p>{w.name}</p>
                        </div>
                    ))}
                </div>
                <div className="flex-1"></div>
                <div className="flex flex-row-reverse gap-2 py-2 px-4">
                    <button className="border-blue-800 border-[1.5px] px-4 py-1 text-blue-800 rounded-md cursor-pointer" onClick={() => dispatch(toogleSideNav())}>Cancel</button>
                    <button className="bg-blue-800 text-white px-4 py-1 rounded-md cursor-pointer" onClick={() => dispatch(toogleSideNav())}>Confirm</button>
                </div>
            </section>
        </div>
    )
}

export default Sidenav