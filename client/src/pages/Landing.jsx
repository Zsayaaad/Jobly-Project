import { Link } from "react-router-dom";
import {
  BenefitsSection,
  ExploreApp,
  FeaturesSection,
  Navbar,
} from "../components";

const Landing = () => {
  return (
    <div className="bg-background text-on-background font-body min-h-screen">
      {/* TopNavBar */}
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-container-margin py-xl">
        {/* Hero Section */}
        <section className="grid grid-cols-12 gap-gutter mb-xl items-center">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="font-h1 text-[64px] leading-none md:text-[80px] mb-lg uppercase">
              JOB TRACKING
              <br />
              <span className="bg-primary-container text-black px-4 border-4 border-black inline-block brutalist-shadow-lg transform -rotate-1">
                FOR THE BRAVE
              </span>
            </h1>
            <p className="font-body text-h3 mb-lg max-w-xl">
              The raw, high-performance command center for recruitment
              professionals and obsessive job seekers. No fluff. Just results.
            </p>
            <div className="flex flex-wrap gap-md">
              <Link to="/login">
                <button className="btn-hero-action bg-primary-container">
                  GET STARTED
                </button>
              </Link>
              {/* <Link to="dashboard">
                <button className="">
                  VIEW DEMO
                </button>
              </Link> */}
              <ExploreApp
                className="btn-hero-action bg-white"
                text="View Demo"
              />
            </div>
          </div>

          {/* Illustration / Bento Style Job Cards */}
          <div className="col-span-12 lg:col-span-5 relative h-[500px] mt-lg lg:mt-0">
            <div className="absolute top-0 right-0 w-72 bg-white text-black border-4 border-black p-md brutalist-shadow-lg z-30 transform rotate-3">
              <div className="flex justify-between items-start mb-sm">
                <span className="font-mono-label text-mono-label bg-black text-white px-xs uppercase">
                  Pending
                </span>
                <span className="material-symbols-outlined">more_vert</span>
              </div>
              <h3 className="font-h3 text-h3 mb-xs">Senior UI Designer</h3>
              <p className="font-mono-data text-mono-data uppercase mb-md">
                Berlin, DE • $120k
              </p>
              <div className="h-2 w-full bg-secondary-container border-2 border-black">
                <div className="h-full bg-primary-container w-2/3 border-r-2 border-black"></div>
              </div>
            </div>

            <div className="absolute top-32 left-0 w-80 bg-primary-container text-black border-4 border-black p-md brutalist-shadow-lg z-20 transform -rotate-2">
              <div className="flex justify-between items-start mb-sm">
                <span className="font-mono-label text-mono-label bg-black text-white px-xs uppercase">
                  Interview
                </span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <h3 className="font-h3 text-h3 mb-xs">Lead Developer</h3>
              <p className="font-mono-data text-mono-data uppercase mb-md">
                Remote • $160k
              </p>
              <img
                alt="Team member"
                className="w-full h-32 object-cover border-2 border-black grayscale mb-xs"
                data-alt="Modern professional workspace with a diverse team collaborating in a bright high-tech office environment"
                src="/image.png"
              />
            </div>

            <div className="absolute bottom-0 right-10 w-64 bg-zinc-900 text-white border-4 border-black p-md brutalist-shadow-lg z-10 transform rotate-1">
              <span className="font-mono-label text-mono-label bg-primary-container text-black px-xs uppercase mb-sm inline-block">
                Urgent
              </span>
              <h3 className="font-h3 text-h3 mb-xs">Product Lead</h3>
              <p className="font-mono-data text-mono-data uppercase">
                London, UK
              </p>
            </div>
          </div>
        </section>

        <BenefitsSection />

        {/* Dynamic Content Section / Social Proof */}
        <section className="mt-xl grid grid-cols-12 gap-gutter">
          <div className="col-span-12 md:col-span-4 bg-zinc-900 text-white p-lg brutalist-shadow-lg border-4 border-black">
            <h2 className="font-h2 text-h2 mb-md uppercase">98%</h2>
            <p className="font-mono-label text-mono-label uppercase text-primary-container mb-lg">
              Efficiency Boost
            </p>
            <p className="font-body text-body text-zinc-400">
              Our users report a significant reduction in administrative
              overhead during the first month of migration to Jobify.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 bg-primary-container text-black p-lg brutalist-shadow-lg border-4 border-black flex flex-col md:flex-row items-center gap-lg">
            <div className="grow">
              <h2 className="font-h2 text-h2 mb-sm uppercase">
                READY TO EXECUTE?
              </h2>
              <p className="font-body text-h3 mb-0 uppercase">
                Join 15,000+ top-tier professionals.
              </p>
            </div>
            <Link to="/login">
              <button className="bg-white text-black font-mono-label text-mono-label px-xl py-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all uppercase font-black text-xl shrink-0">
                START TRACKING
              </button>
            </Link>
          </div>
        </section>

        {/* Feature Grid (Modern Brutalism) */}
        <FeaturesSection />
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest text-on-background border-t-4 border-on-background py-xl px-container-margin">
        <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-gutter">
          <div className="col-span-12 md:col-span-4">
            <div className="text-3xl font-black italic tracking-tighter text-on-background uppercase mb-md">
              JOBIFY
            </div>
            <p className="font-mono-label text-mono-label uppercase mb-lg text-secondary">
              Built for the relentless seeker.
            </p>
            <div className="flex gap-md">
              <span className="material-symbols-outlined p-2 border-2 border-on-background bg-primary-container text-black brutalist-shadow">
                share
              </span>
              <span className="material-symbols-outlined p-2 border-2 border-on-background bg-surface-container text-on-background brutalist-shadow">
                alternate_email
              </span>
              <span className="material-symbols-outlined p-2 border-2 border-on-background bg-surface-container text-on-background brutalist-shadow">
                rss_feed
              </span>
            </div>
          </div>
          <div className="col-span-6 md:col-span-4 flex flex-col gap-sm">
            <h5 className="font-mono-label font-black uppercase mb-sm">
              Navigation
            </h5>
            <a
              className="text-secondary hover:text-primary hover:underline"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-secondary hover:text-primary hover:underline"
              href="#"
            >
              Job Board
            </a>
            <a
              className="text-secondary hover:text-primary hover:underline"
              href="#"
            >
              Analytics
            </a>
            <a
              className="text-secondary hover:text-primary hover:underline"
              href="#"
            >
              Pricing
            </a>
          </div>
          <div className="col-span-6 md:col-span-4 flex flex-col gap-sm">
            <h5 className="font-mono-label font-black uppercase mb-sm">
              Legal
            </h5>
            <a
              className="text-secondary hover:text-primary hover:underline"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-secondary hover:text-primary hover:underline"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-secondary hover:text-primary hover:underline"
              href="#"
            >
              Security Protocols
            </a>
            <a
              className="text-secondary hover:text-primary hover:underline"
              href="#"
            >
              API Docs
            </a>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto mt-xl pt-lg border-t-2 border-outline flex justify-between items-center font-mono-data uppercase text-secondary gap-sm">
          <span>© 2026 JOBIFY CORE SYSTEM</span>
          <span className="text-primary">v1.0</span>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
