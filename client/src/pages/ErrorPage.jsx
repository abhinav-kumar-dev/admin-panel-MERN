import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
            <div className="max-w-3xl text-center">
                {/* Error Code */}
                <h1 className="text-8xl md:text-9xl font-extrabold text-blue-500">
                    404
                </h1>

                {/* Heading */}
                <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-4 text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
                    The page you're looking for doesn't exist, has been moved,
                    or is temporarily unavailable. Please check the URL or
                    navigate back to a valid page.
                </p>

                {/* Illustration */}
                <div className="mt-10 flex justify-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
                        alt="404 Error"
                        className="w-64 md:w-80 opacity-90"
                    />
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300"
                    >
                        Back to Home
                    </Link>

                    <Link
                    to="/contact" 
                    className="px-6 py-3 rounded-xl border border-slate-700 hover:border-blue-500 hover:text-blue-400 text-slate-300 font-medium transition-all duration-300">
                        Need Help?
                    </Link>
                </div>

                {/* Extra Text */}
                <p className="mt-8 text-sm text-slate-500">
                    Error Code: 404 • Resource Not Found
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;