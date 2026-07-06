import Image from 'next/image';
import Link from 'next/link';

const inspectionPoints = [
  'Pre-purchase confidence before you commit',
  'Condition check with clear issue highlights',
  'Ideal for buyers, sellers, and private listings'
];

export default function InspectionPage() {
  return (
    <div className="bg-[#f4f7fc] pb-16">
      <section className="w-full px-[clamp(16px,4vw,64px)] pt-8">
        <div className="grid w-full grid-cols-[1fr_1.15fr] items-center gap-10 max-[980px]:grid-cols-1">
          <div className="grid gap-5 justify-items-start">
            <span className="inline-flex w-fit items-center rounded-full border border-[rgba(6,62,102,0.12)] bg-white px-4 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-[#063e66] shadow-[0_10px_22px_rgba(8,20,40,0.05)]">
              Inspection Services
            </span>
            <h1 className="m-0 max-w-[14ch] text-[#063e66] text-[clamp(2.4rem,4vw,4.4rem)] leading-[0.96] tracking-[-0.06em] font-extrabold">
              Buy with confidence.
            </h1>
            <p className="m-0 max-w-[58ch] text-[#52647a] text-[0.98rem] leading-[1.8]">
              Get a professional vehicle inspection before buying or selling. We check the car's condition, highlight issues, and help you make a confident decision.
            </p>

            <div className="grid gap-3 pt-1 w-full max-w-[480px]">
              {inspectionPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-[16px] border border-[rgba(6,62,102,0.08)] bg-white px-4 py-3 shadow-[0_10px_22px_rgba(8,20,40,0.04)]"
                >
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#1fa7b8]" aria-hidden="true" />
                  <span className="text-[0.94rem] leading-[1.6] text-[#32475f]">{point}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[12px] border border-[rgba(10,58,104,0.18)] bg-white px-5 py-[0.95rem] text-[0.92rem] font-bold text-[#063e66] transition hover:-translate-y-px hover:bg-[#f7fbfe] no-underline"
              >
                Enquire Now
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[rgba(13,27,42,0.1)] bg-white shadow-[0_20px_46px_rgba(8,20,40,0.12)]">
            <div className="relative min-h-[560px] max-[980px]:min-h-[380px]">
              <Image
                src="/inspection.jpg"
                alt="Vehicle inspection service"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,22,40,0.05),rgba(5,22,40,0.55))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[20px] border border-[rgba(255,255,255,0.16)] bg-[rgba(255,255,255,0.12)] p-5 text-white backdrop-blur-[10px]">
                <div className="text-[0.72rem] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.72)]">
                  Professional review
                </div>
                <div className="mt-1 text-[1.15rem] font-bold leading-tight">
                  Clear findings, practical advice, and a better buying decision.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}