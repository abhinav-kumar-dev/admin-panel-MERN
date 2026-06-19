import { useState, useEffect } from "react";

const Services = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        let response = await fetch("https://admin-panel-backend-mtq8.onrender.com/api/v1/services", {
            method: "GET"
        });

        if (response.ok) {
            response = await response.json();
            setData(response.data);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const serviceImages = {
  "Software Development":
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

  "Cloud Computing":
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa",

  "Data Science":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71",

  "Cybersecurity":
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",

  "AI & Machine Learning":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995",

  "IT Consulting":
    "https://images.unsplash.com/photo-1552664730-d307ca884978",
};

    return (
        <div className="bg-slate-950 min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Our Services
                    </h1>
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                        Explore our technology solutions designed to help businesses
                        grow, innovate, and succeed in the digital world.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {data.map((item, index) => {
                        return (
                            <div key={index} className="bg-white/5 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300">
                                <img
                                    src={serviceImages[item.service]}
                                    alt={item.service}
                                    className="w-full h-52 object-cover"
                                />

                                <div className="p-6">
                                    <h2 className="text-xl font-semibold text-white">
                                        {item.service}
                                    </h2>

                                    <p className="text-slate-400 mt-3">
                                        {item.description}
                                    </p>

                                    <div className="mt-5 flex justify-between items-center">
                                        <span className="text-blue-400 font-bold">
                                            {item.price}
                                        </span>

                                        <span className="text-slate-500 text-sm">
                                            {item.provider}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    );
};

export default Services;
