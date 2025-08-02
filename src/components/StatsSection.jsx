
const stats = [
    {
        value: "30",
        label: "Questions Total",
        color: "text-cyan-400 border-cyan-400",
    },
    {
        value: "30s",
        label: "Per Question",
        color: "text-pink-500 border-pink-500",
    },
    {
        value: "3",
        label: "Difficulty Levels",
        color: "text-cyan-400 border-cyan-400",
    },
    {
        value: "30",
        label: "Max Score",
        color: "text-green-400 border-green-400",
    },
];

const StatsSection = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto px-4">
            {stats.map((stat, idx) => (
                <div
                    key={idx}
                    className={`bg-[#130b3a] border-2 ${stat.color} rounded-xl py-6 px-4 text-center`}
                >
                    <h3
                        className={`text-3xl font-bold ${
                            stat.color.split(" ")[0]
                        }`}
                    >
                        {stat.value}
                    </h3>
                    <p className="text-gray-400 mt-1 text-sm">{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

export default StatsSection;
