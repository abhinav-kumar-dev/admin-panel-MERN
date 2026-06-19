import { useState } from "react";

const faqs = [
    {
        question: "What technologies do you use?",
        answer:
            "We work with React, Node.js, Express.js, MongoDB, Next.js, Cloud Platforms, and modern web technologies."
    },
    {
        question: "Do you provide cloud deployment?",
        answer:
            "Yes, we deploy applications on AWS, Azure, Vercel, DigitalOcean, and other cloud platforms."
    },
    {
        question: "Can you build custom software?",
        answer:
            "Absolutely. We develop custom software solutions tailored to business requirements."
    },
    {
        question: "How long does a project take?",
        answer:
            "Project duration depends on scope and complexity, typically ranging from a few weeks to several months."
    },
    {
        question: "Do you provide maintenance support?",
        answer:
            "Yes, we offer ongoing maintenance, monitoring, security updates, and feature enhancements."
    }
];

const Home = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const stats = [
        { value: "500+", title: "Projects Delivered" },
        { value: "100+", title: "Enterprise Clients" },
        { value: "50+", title: "Cloud Deployments" },
        { value: "99.9%", title: "System Uptime" }
    ];

    return (
        <div className="bg-slate-950 text-white">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <span className="px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/20 text-sm">
                            Future Ready Technology Solutions
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
                            Building Modern
                            <span className="text-blue-500"> Digital Solutions</span>
                        </h1>

                        <p className="text-slate-400 mt-6 text-lg leading-relaxed">
                            We help startups and enterprises build scalable web
                            applications, cloud infrastructure, data-driven systems,
                            and innovative digital products.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
                                Get Started
                            </button>

                            <button className="px-6 py-3 rounded-xl border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="/images/hero-tech.png"
                            alt="Technology"
                            className="w-full max-w-lg rounded-2xl border border-slate-800"
                        />
                    </div>

                </div>
            </section>

            {/* Stats */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-slate-800 rounded-2xl p-6 text-center"
                        >
                            <h3 className="text-4xl font-bold text-blue-500">
                                {item.value}
                            </h3>

                            <p className="text-slate-400 mt-2">
                                {item.title}
                            </p>
                        </div>
                    ))}

                </div>
            </section>

            {/* Software Development */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <img
                        src="/images/software-dev.png"
                        alt="Software Development"
                        className="w-full rounded-2xl border border-slate-800"
                    />

                    <div>
                        <h2 className="text-4xl font-bold mb-4">
                            Software Development
                        </h2>

                        <p className="text-slate-400 leading-relaxed mb-4">
                            We design and develop modern web applications, enterprise software,
                            customer portals, and business management systems using the latest
                            technologies. Our development approach focuses on scalability,
                            security, maintainability, and exceptional user experience.
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-4">
                            From startup MVPs to large-scale enterprise solutions, our team
                            leverages React, Node.js, Express.js, MongoDB, and cloud-native
                            architectures to build high-performance applications that grow
                            alongside your business.
                        </p>

                        <p className="text-slate-400 leading-relaxed">
                            Whether you need a custom CRM, ERP, e-commerce platform, SaaS
                            application, or internal business tool, we transform ideas into
                            reliable digital products that deliver measurable results.
                        </p>

                    </div>

                </div>
            </section>

            {/* Cloud Computing */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-4xl font-bold mb-4">
                            Cloud Computing
                        </h2>

                        <p className="text-slate-400 leading-relaxed mb-4">
                            Cloud computing enables businesses to innovate faster, reduce
                            infrastructure costs, and improve application reliability. We help
                            organizations migrate, deploy, and manage applications on modern
                            cloud platforms with industry best practices.
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-4">
                            Our expertise includes cloud architecture design, containerization,
                            serverless solutions, CI/CD pipelines, automated deployments, and
                            infrastructure monitoring. This ensures your applications remain
                            secure, scalable, and highly available.
                        </p>

                        <p className="text-slate-400 leading-relaxed">
                            Whether you're launching a new product or modernizing legacy systems,
                            our cloud solutions provide the flexibility and performance needed
                            to support future business growth.
                        </p>
                    </div>

                    <img
                        src="/images/cloud-computing.png"
                        alt="Cloud Computing"
                        className="w-full rounded-2xl border border-slate-800"
                    />

                </div>
            </section>

            {/* Data Science */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <img
                        src="/images/data-science.png"
                        alt="Data Science"
                        className="w-full rounded-2xl border border-slate-800"
                    />

                    <div>
                        <h2 className="text-4xl font-bold mb-4">
                            Data Science & Analytics
                        </h2>

                        <p className="text-slate-400 leading-relaxed mb-4">
                            Data has become one of the most valuable assets for modern
                            organizations. We help businesses unlock the full potential of
                            their data through advanced analytics, visualization, and
                            intelligent reporting solutions.
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-4">
                            By combining data engineering, machine learning, and business
                            intelligence, we transform raw information into actionable insights
                            that support strategic decision-making and operational efficiency.
                        </p>

                        <p className="text-slate-400 leading-relaxed">
                            From interactive dashboards and performance tracking systems to
                            predictive analytics and AI-powered recommendations, we empower
                            organizations to make smarter, data-driven decisions with confidence.
                        </p>
                    </div>

                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-4xl mx-auto px-6 py-20">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-slate-800 rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? null : index
                                    )
                                }
                                className="w-full px-5 py-4 flex justify-between items-center text-left"
                            >
                                <span>{faq.question}</span>

                                <span className="text-blue-500 text-xl">
                                    {openIndex === index ? "-" : "+"}
                                </span>
                            </button>

                            {openIndex === index && (
                                <div className="px-5 pb-5 text-slate-400">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}

                </div>

            </section>

            {/* CTA Section */}
            <section className="max-w-6xl mx-auto px-6 pb-20">

                <div className="rounded-3xl border border-blue-500/20 bg-white/5 p-10 text-center">

                    <h2 className="text-4xl font-bold">
                        Ready To Build Your Next Project?
                    </h2>

                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                        Let's work together to create innovative software,
                        cloud-native applications, and digital experiences
                        that drive business growth.
                    </p>

                    <button className="mt-8 px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
                        Start Your Project
                    </button>

                </div>

            </section>

        </div>
    );
};

export default Home;
