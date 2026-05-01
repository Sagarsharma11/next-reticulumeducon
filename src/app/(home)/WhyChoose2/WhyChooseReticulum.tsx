import { BookOpen, Users, Building2, CheckCircle, Star, Clock } from "lucide-react";

const stats = [
  { num: "8+", label: "Countries" },
  { num: "500+", label: "Students Placed" },
  { num: "100%", label: "NMC Approved" },
  { num: "98%", label: "Satisfaction Rate" },
];

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Guidance",
    desc: "We present every available option so students never have to compromise on their dream of becoming a doctor.",
  },
  {
    icon: Users,
    title: "Student-Centric Approach",
    desc: "Dream. Believe. Dare. Our expert team reflects on what you truly want and helps you take the bold step toward a fulfilling future.",
  },
  {
    icon: Building2,
    title: "Direct University Access",
    desc: "Direct contact with reputed NMC & WHO approved universities, simplifying admissions for a smooth transition.",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Mentorship",
    desc: "Personal guidance throughout your entire course — from registration to graduation. You're never alone on this journey.",
  },
  {
    icon: Star,
    title: "Highest Satisfaction Rates",
    desc: "Exceptional satisfaction among students and parents alike — making us one of the most dependable consultancies in the field.",
  },
  {
    icon: Clock,
    title: "Free Counselling Available",
    desc: "Get started with zero commitment. Our expert advisors are available to guide you toward the right path — completely free.",
  },
];

export default function WhyChooseReticulum() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-16 px-4 sm:px-8 rounded-2xl">
      {/* Background glows */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-[#c49e44]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#c49e44]/8 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <span className="inline-block rounded-full border border-orange-400/40 bg-white/60 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
          Trusted Medical Consultancy
        </span>
        <h2 className="mt-4 font-serif text-4xl font-bold text-white leading-tight">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Reticulum Educon
          </span>?
        </h2>
        <p className="mt-3 mx-auto max-w-xl text-[15px] text-white/60 leading-relaxed">
          A trusted partner guiding aspiring medical professionals toward their
          dream careers — with authentic, transparent, and reliable counseling
          every step of the way.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 mb-12 grid grid-cols-2 sm:grid-cols-4 overflow-hidden rounded-2xl border border-[#c49e44]/20 bg-[#c49e44]/8 divide-x divide-[#c49e44]/15">
        {stats.map((s) => (
          <div key={s.label} className="py-5 px-4 text-center">

            <div className="font-serif text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              {s.num}
            </div>

            <div className="mt-1 text-[11px] uppercase tracking-widest text-white/50">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Feature Cards Grid */}
      <div className="relative z-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl border border-[#c49e44]/20 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:bg-orange-500/8 cursor-default"
          >
            {/* Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c49e44]/15">
              <Icon
                className="h-6 w-6 text-[#c49e44]"
                strokeWidth={1.8}
                color="lab(57.1026% 64.2584 89.8886)"
              />
            </div>

            {/* Title */}
            <h3 className="mb-2 text-[15px] font-medium text-white">
              {title}
            </h3>

            {/* Description */}
            <p className="text-[13px] leading-relaxed text-white/55">{desc}</p>

            {/* Gold accent line */}
            <div className="mt-4 h-[3px] w-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-600  to-transparent" />
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-4">

        {/* Primary CTA */}
        <a
          href="/contact-us"
          className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30"
        >
          Get Free Counselling
        </a>

        {/* Secondary CTA */}
        <a
          href="#countries"
          className="rounded-full border border-orange-400/40 px-8 py-3 text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-200 hover:bg-orange-500/10 hover:border-orange-500/70"
        >
          Explore Countries
        </a>

      </div>
    </section>
  );
}