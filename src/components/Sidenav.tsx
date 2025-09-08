import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { toogleSideNav } from "../store/sidenavSlice";

const Sidenav = () => {
    const open = useSelector((state: RootState) => state.sideNavReducer.open);
    const dispatch = useDispatch();

    if (!open) return null;

    return (
        <section className="fixed right-0 top-0 w-2/5 bg-white h-lvh flex flex-col">
            <div className="bg-blue-800 py-2 px-4 text-white">
                <p className="font-semibold">Add a Widget</p>
            </div>
            <div className="flex-1"></div>
            <div className="flex flex-row-reverse gap-2 py-2 px-4">
                <button className="border-blue-800 border-[1.5px] px-4 py-1 text-blue-800 rounded-md cursor-pointer" onClick={() => dispatch(toogleSideNav())}>Cancel</button>
                <button className="bg-blue-800 text-white px-4 py-1 rounded-md">Confirm</button>
            </div>
        </section>
    )
}

export default Sidenav