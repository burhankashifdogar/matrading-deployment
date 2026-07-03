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
  team: Member[];
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
    lead: { name: 'Subhan Ajmal', title: 'Director Marketing & Sales', initials: 'SA', accent: 'from-[#d9e9ff] to-[#c7dbfb]' },
    team: [
      { name: 'Salik Bilal', title: 'Sales Assistant (North)', initials: 'SB', accent: 'from-[#f4f7ff] to-[#e4ecff]' },
      { name: 'Saif Ul Islam', title: 'Sales Assistant (South)', initials: 'SI', accent: 'from-[#f4f7ff] to-[#e4ecff]' },
      { name: 'Sadam Munawar', title: 'Sales Assistant (Central)', initials: 'SM', accent: 'from-[#f4f7ff] to-[#e4ecff]' },
      { name: 'Muhammad Ashraf', title: 'Assistant Marketing', initials: 'MA', accent: 'from-[#f4f7ff] to-[#e4ecff]' }
    ]
  },
  {
    title: 'Finance',
    lead: { name: 'Furqan Ajmal', title: 'Director Finance', initials: 'FA', accent: 'from-[#d9e9ff] to-[#c7dbfb]' },
    team: [
      { name: 'Osama Rasheed', title: 'Manager Finance', initials: 'OR', accent: 'from-[#f4f7ff] to-[#e4ecff]' },
      { name: 'Ammar Ramzan', title: 'Assistant Finance', initials: 'AR', accent: 'from-[#f4f7ff] to-[#e4ecff]' }
    ]
  },
  {
    title: 'Operations',
    lead: { name: 'Usman Ajmal', title: 'Director Operations', initials: 'UA', accent: 'from-[#d9e9ff] to-[#c7dbfb]' },
    team: [
      { name: 'Atif Iqbal', title: 'Manager Operations', initials: 'AI', accent: 'from-[#f4f7ff] to-[#e4ecff]' },
      { name: 'Faran Shakil', title: 'Assistant Operation', initials: 'FS', accent: 'from-[#f4f7ff] to-[#e4ecff]' }
    ]
  },
  {
    title: 'Human Resources',
    lead: { name: 'Sadaf Hammad', title: 'Director HR', initials: 'SH', accent: 'from-[#d9e9ff] to-[#c7dbfb]' },
    team: [
      { name: 'Sundas Atif', title: 'Manager HR', initials: 'SU', accent: 'from-[#f4f7ff] to-[#e4ecff]' },
      { name: 'Abdullah Asghar', title: 'Assistant HR', initials: 'AA', accent: 'from-[#f4f7ff] to-[#e4ecff]' }
    ]
  }
];

function Avatar({ initials, accent }: { initials: string; accent: string }) {
  return (
    <div className={`grid place-items-center w-[68px] h-[68px] rounded-[18px] bg-gradient-to-br ${accent} text-[#063e66] font-extrabold text-[1.3rem] shadow-[0_10px_22px_rgba(8,20,40,0.08)]`}>
      {initials}
    </div>
  );
}

function PersonCard({ member }: { member: Member }) {
  return (
    <article className="grid gap-3 rounded-[18px] border border-[rgba(10,58,104,0.08)] bg-white px-5 py-5 shadow-[0_14px_34px_rgba(8,20,40,0.08)] justify-items-center text-center">
      <Avatar initials={member.initials} accent={member.accent} />
      <div className="grid gap-1">
        <h3 className="m-0 text-[#07345f] text-[1.02rem] leading-tight font-extrabold">{member.name}</h3>
        <p className="m-0 text-[#5b6f86] text-[0.74rem] uppercase tracking-[0.16em] font-bold">{member.title}</p>
      </div>
    </article>
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
              <PersonCard member={leadership} />
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

                  <div className="grid gap-3">
                    {department.team.map((member) => (
                      <div key={member.name} className="grid grid-cols-[52px_minmax(0,1fr)] items-center gap-3 rounded-[14px] border border-[rgba(10,58,104,0.08)] bg-white px-3 py-3 shadow-[0_8px_20px_rgba(8,20,40,0.04)] max-[720px]:grid-cols-[44px_minmax(0,1fr)]">
                        <div className="flex justify-center">
                          <div className="grid place-items-center w-12 h-12 rounded-[14px] bg-[#eef4ff] text-[#063e66] font-extrabold text-[0.9rem]">{member.initials}</div>
                        </div>
                        <div className="min-w-0">
                          <h3 className="m-0 text-[#07345f] text-[0.92rem] font-extrabold leading-tight">{member.name}</h3>
                          <p className="m-0 mt-1 text-[#5b6f86] text-[0.72rem]">{member.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}


