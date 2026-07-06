import Link from 'next/link';

type Member = {
  name: string;
  title: string;
  initials: string;
  accent: string;
};

const directors: Member[] = [
  {
    name: 'Subhan Ajmal',
    title: 'Director Marketing & Sales',
    initials: 'SA',
    accent: 'from-[#d9e9ff] to-[#c7dbfb]'
  },
  {
    name: 'Furqan Ajmal',
    title: 'Director Finance',
    initials: 'FA',
    accent: 'from-[#d9e9ff] to-[#c7dbfb]'
  },
  {
    name: 'Usman Ajmal',
    title: 'Director Operations',
    initials: 'UA',
    accent: 'from-[#d9e9ff] to-[#c7dbfb]'
  },
  {
    name: 'Sadaf Hammad',
    title: 'Director HR',
    initials: 'SH',
    accent: 'from-[#d9e9ff] to-[#c7dbfb]'
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
        <div className="w-full px-[clamp(16px,4vw,64px)] text-left">
          <div className="grid gap-3 max-w-[760px] justify-items-start text-left">
            <span className="text-[0.72rem] font-black tracking-[0.26em] uppercase text-[#063e66]">Our Expertise</span>
            <h1 className="m-0 text-[#063e66] text-[clamp(2.1rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.05em] font-extrabold">Our Directors</h1>
            <p className="m-0 text-[#4d6178] text-[0.98rem] leading-[1.8] max-w-[64ch]">
              Meet the directors behind M.A Trading. The team section now focuses only on leadership roles.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-[clamp(16px,4vw,64px)] pb-16">
        <div className="grid grid-cols-4 gap-4 items-start max-[1080px]:grid-cols-2 max-[720px]:grid-cols-1 pt-8">
          {directors.map((member) => (
            <PersonCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <section className="w-full px-[clamp(16px,4vw,64px)] pb-16">
        <div className="rounded-[18px] border border-[rgba(10,58,104,0.08)] bg-white px-5 py-5 shadow-[0_14px_34px_rgba(8,20,40,0.06)]">
          <p className="m-0 text-[#4d6178] text-[0.94rem] leading-[1.8]">
            Looking to get in touch with the team? Use the contact page and we will route your message to the right director.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-[12px] bg-[#063e66] px-5 py-[0.95rem] text-[0.92rem] font-bold text-white shadow-[0_14px_28px_rgba(10,58,104,0.18)] transition hover:-translate-y-px hover:bg-[#052f4f] no-underline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}