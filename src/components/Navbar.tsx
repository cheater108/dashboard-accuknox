
const Navbar = () => {
    return (
        <nav className="flex py-1 px-4 bg-white justify-between">
            <div className="flex">
                <p className="text-neutral-500">Home / &nbsp;</p>
                <p className="font-semibold">Dashboard</p>
            </div>
            <div>
                <input className="bg-sky-100 px-4 py-1 text-sm rounded-md border-blue-300 border" type="text" placeholder="Search Anything..." />
            </div>
        </nav>
    )
}

export default Navbar