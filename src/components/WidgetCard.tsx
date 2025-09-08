interface WidgetCardProps {
    name?: string;
    data?: string[];
}

const WidgetCard = ({ name, data }: WidgetCardProps) => {
    if (!name && !data) {
        return (
            <div className="h-[200px] w-[400px] bg-[#f5f4f4ab] flex justify-center items-center rounded-2xl">
                <div className="px-4 py-1 bg-transparent text-gray-500 border-gray-400 border-[1.5px] rounded-md">Add Widget</div>
            </div>
        )
    }

    return (
        <div className="h-[200px] w-[400px] bg-[#f5f4f4ab] flex justify-center items-center rounded-2xl">
            <p>{name}</p>
            <div>
                <img src="" alt="" />

            </div>
        </div>
    )
}

export default WidgetCard