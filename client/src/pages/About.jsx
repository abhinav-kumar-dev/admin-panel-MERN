const About = () => {
  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-20">
          <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
            About Us
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">
            Building Digital
            <span className="text-blue-500"> Solutions</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-slate-400 text-lg">
            We help businesses and individuals transform ideas into
            modern digital products through innovative software
            development, web applications, and technology solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">

          {/* Left */}
          <div className="bg-white/5 backdrop-blur-xl border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-slate-400 leading-8">
              We started with a simple mission: creating modern,
              scalable, and user-friendly software solutions.
              Our focus is on delivering high-quality digital
              experiences that help businesses grow and succeed.
            </p>

            <p className="text-slate-400 leading-8 mt-4">
              From web applications to enterprise software,
              we combine technology, creativity, and innovation
              to build products that make a real impact.
            </p>
          </div>

          {/* Right */}
          <div className="bg-white/5 backdrop-blur-xl border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-slate-400 leading-8">
              Our mission is to empower businesses with reliable,
              efficient, and modern technology solutions that
              drive growth and innovation.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <p className="text-slate-300">
                  Modern Web Development
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <p className="text-slate-300">
                  Scalable Software Solutions
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <p className="text-slate-300">
                  User-Centric Design
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

          <div className="bg-white/5 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-500">
              50+
            </h3>
            <p className="text-slate-400 mt-2">
              Projects Completed
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-500">
              30+
            </h3>
            <p className="text-slate-400 mt-2">
              Happy Clients
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-500">
              5+
            </h3>
            <p className="text-slate-400 mt-2">
              Years Experience
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-500">
              24/7
            </h3>
            <p className="text-slate-400 mt-2">
              Support
            </p>
          </div>

        </div>

        {/* Team Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Why Choose Us
          </h2>

          <p className="text-slate-400 mt-4">
            We deliver quality, innovation, and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 backdrop-blur-xl border border-slate-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-4">
              Fast Delivery
            </h3>

            <p className="text-slate-400">
              Efficient workflows ensure projects are delivered
              on time without compromising quality.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-4">
              Modern Technology
            </h3>

            <p className="text-slate-400">
              We use the latest technologies and frameworks
              to build future-ready applications.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-slate-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-4">
              Client Focused
            </h3>

            <p className="text-slate-400">
              Every solution is tailored to meet specific
              business goals and requirements.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;