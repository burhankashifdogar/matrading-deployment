import Link from 'next/link';

type Member = {
  name: string;
  title: string;
  initials: string;
  accent: string;
};

type Department = {
  title: string;
  lead: Member;
};

const departmentStops = [125, 375, 625, 875];

const leadership: Member = {
  name: 'Muhammad Ajmal',
  title: 'Chief Executive Officer',
  initials: 'MA',
  accent: 'from-[#0a3a68] to-[#0f5f91]'
};

const departments: Department[] = [
  {
    title: 'Sales & Marketing',
    lead: { name: 'Subhan Ajmal', title: 'Director Marketing & Sales', initials: 'SA', accent: 'from-[#d9e9ff] to-[#c7dbfb]' }
  },
  {
    title: 'Finance',
    lead: { name: 'Furqan Ajmal', title: 'Director Finance', initials: 'FA', accent: 'from-[#d9e9ff] to-[#c7dbfb]' }
  },
  {
    title: 'Operations',
    lead: { name: 'Usman Ajmal', title: 'Director Operations', initials: 'UA', accent: 'from-[#d9e9ff] to-[#c7dbfb]' }
  },
  {
    title: 'Human Resources',
    lead: { name: 'Sadaf Hammad', title: 'Director HR', initials: 'SH', accent: 'from-[#d9e9ff] to-[#c7dbfb]' }
  }
];

function Avatar({
  initials,
  accent,
  textClassName = 'text-[#063e66]',
  sizeClassName = 'w-[68px] h-[68px] rounded-[18px] text-[1.3rem]'
}: {
  initials: string;
  accent: string;
  textClassName?: string;
  sizeClassName?: string;
}) {
  return (
    <div className={`grid place-items-center ${sizeClassName} bg-gradient-to-br ${accent} ${textClassName} font-extrabold shadow-[0_10px_22px_rgba(8,20,40,0.08)]`}>
      {initials}
    </div>
  );
}

function LeadershipCard({ member }: { member: Member }) {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute -inset-3 rounded-[26px] bg-gradient-to-br from-[#0a3a68]/25 via-[#0f5f91]/15 to-transparent blur-xl" />
      <article className="group relative grid gap-4 overflow-hidden rounded-[20px] border-2 border-[rgba(10,58,104,0.12)] bg-white px-6 pb-6 pt-0 shadow-[0_18px_40px_rgba(8,20,40,0.14)] justify-items-center text-center transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(15,95,145,0.35)] hover:shadow-[0_26px_54px_rgba(8,20,40,0.2)]">
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[6px] bg-gradient-to-r from-[#0a3a68] via-[#0f5f91] to-[#0a3a68]" />
        <span className="mt-6 rounded-full bg-[#eef4ff] px-3 py-1 text-[0.65rem] font-black tracking-[0.2em] uppercase text-[#0f5f91]">Leadership</span>
        <Avatar
          initials={member.initials}
          accent={member.accent}
          textClassName="text-white"
          sizeClassName="w-[72px] h-[72px] rounded-[18px] text-[1.35rem] ring-2 ring-white/40"
        />
        <div className="grid gap-1">
          <h3 className="m-0 text-[#07345f] text-[1.08rem] leading-tight font-extrabold">{member.name}</h3>
          <p className="m-0 text-[#5b6f86] text-[0.74rem] uppercase tracking-[0.16em] font-bold">{member.title}</p>
        </div>
      </article>
    </div>
  );
}

export default function OurTeamPage() {
  return (
    <div className="bg-[#f5f8fe]">
      <section className="bg-white pt-8 pb-10">
        <div className="w-full px-[clamp(16px,2vw,24px)] max-w-[1180px] mx-auto text-left">
          <div className="grid gap-3 max-w-[760px] justify-items-start text-left">
            <span className="text-[0.72rem] font-black tracking-[0.26em] uppercase text-[#063e66]">Our Expertise</span>
            <h1 className="m-0 text-[#063e66] text-[clamp(2.1rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.05em] font-extrabold">Our Leadership &amp; Team</h1>
            <p className="m-0 text-[#4d6178] text-[0.98rem] leading-[1.8] max-w-[64ch]">
              Meet the people behind M.A Trading. Our team works across sales, finance, operations, and HR to deliver a smooth automotive experience.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-[clamp(16px,2vw,24px)] pb-16">
        <div className="max-w-[1180px] mx-auto">
          <div className="relative grid justify-items-center pt-8 pb-4">
            <div className="relative w-full max-w-[420px]">
              <LeadershipCard member={leadership} />
            </div>
          </div>

          <div className="relative hidden lg:block h-12">
            <div className="absolute left-1/2 top-0 h-12 w-px bg-[rgba(10,58,104,0.16)] -translate-x-1/2" />
          </div>

          <div className="relative hidden lg:block h-32 pointer-events-none">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 160" preserveAspectRatio="none" aria-hidden="true">
              <line x1="500" y1="0" x2="500" y2="58" stroke="rgba(10,58,104,0.16)" strokeWidth="2" />
              <line x1="125" y1="58" x2="875" y2="58" stroke="rgba(10,58,104,0.16)" strokeWidth="2" />
              {departmentStops.map((x) => (
                <line key={x} x1={x} y1="58" x2={x} y2="160" stroke="rgba(10,58,104,0.16)" strokeWidth="2" />
              ))}
            </svg>
          </div>

          <div className="grid grid-cols-4 gap-4 items-start max-[1080px]:grid-cols-2 max-[720px]:grid-cols-1">
            {departments.map((department) => (
              <div key={department.title} className="grid gap-4">
                <article className="grid gap-4 rounded-[18px] border border-[rgba(10,58,104,0.08)] bg-white p-4 shadow-[0_14px_34px_rgba(8,20,40,0.06)]">
                  <div className="grid gap-3 justify-items-center text-center rounded-[16px] bg-[linear-gradient(135deg,#f4f8ff_0%,#e9f1ff_100%)] px-4 py-5">
                    <Avatar initials={department.lead.initials} accent={department.lead.accent} />
                    <h2 className="m-0 text-[#07345f] text-[1.08rem] font-extrabold leading-tight">{department.lead.name}</h2>
                    <p className="m-0 text-[#5b6f86] text-[0.74rem] uppercase tracking-[0.16em] font-bold">{department.lead.title}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-[clamp(16px,2vw,24px)] pb-16">
        <div className="max-w-[960px] mx-auto">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#0a3a68]/25 via-[#0f5f91]/15 to-transparent blur-2xl" />
            <article className="group relative grid overflow-hidden rounded-[28px] border-2 border-[rgba(10,58,104,0.12)] bg-white shadow-[0_24px_60px_rgba(8,20,40,0.16)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[rgba(15,95,145,0.35)] hover:shadow-[0_32px_70px_rgba(8,20,40,0.22)] md:grid-cols-[300px_1fr]">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[6px] bg-gradient-to-r from-[#0a3a68] via-[#0f5f91] to-[#0a3a68]" />
              <div className="grid gap-4 justify-items-center content-center text-center bg-gradient-to-br from-[#0a3a68] to-[#0f5f91] px-8 py-12">
                <Avatar
                  initials={leadership.initials}
                  accent="from-white/15 to-white/5"
                  textClassName="text-white"
                  sizeClassName="w-[88px] h-[88px] rounded-[22px] text-[1.7rem] ring-2 ring-white/30"
                />
                <div className="grid gap-1">
                  <p className="m-0 text-white text-[1.15rem] font-extrabold">{leadership.name}</p>
                  <p className="m-0 text-[rgba(255,255,255,0.75)] text-[0.72rem] uppercase tracking-[0.16em] font-bold">{leadership.title}</p>
                </div>
              </div>
              <div className="relative grid gap-4 content-center px-[clamp(24px,4vw,48px)] py-10">
                <span aria-hidden="true" className="pointer-events-none absolute -top-2 right-6 select-none text-[7.5rem] font-black leading-none text-[#0f5f91]/20 transition-colors duration-300 group-hover:text-[#0f5f91]/30">&rdquo;</span>
                <span className="relative text-[0.72rem] font-black tracking-[0.26em] uppercase text-[#0f5f91]">Message From Our CEO</span>
                <h2 className="relative m-0 text-[#063e66] text-[1.4rem] font-extrabold leading-tight">Welcome to MA Trading</h2>
                <p className="relative m-0 text-[#1c3a56] text-[1.05rem] leading-[1.8] max-w-[62ch]">
At MA Trading, we are committed to delivering quality vehicles and reliable automotive services with honesty and professionalism.                </p>
                <p className="relative m-0 text-[#1c3a56] text-[1.05rem] leading-[1.8] max-w-[62ch]">
Thank you for your trust and support. We look forward to serving you with excellence and building lasting relationships.                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

    </div>
  );
}