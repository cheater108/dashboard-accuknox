import { useDispatch } from "react-redux"
import { toogleSideNav } from "../store/sidenavSlice";
import { Plus } from "lucide-react";

const Header = () => {
    const dispatch = useDispatch();
    return (
        <section className="header flex justify-between items-center px-4 my-4">
            <p className="font-bold text-xl">CNAPP Dashboard</p>
            <div>
                <div onClick={() => dispatch(toogleSideNav())} className="bg-white rounded-md px-4 py-1 cursor-pointer">
                    <p className="text-sm text-neutral-400 flex items-center gap-2"> <Plus size={20} /> Add Widget</p>
                </div>
            </div>
        </section>
    )
}

export default Header