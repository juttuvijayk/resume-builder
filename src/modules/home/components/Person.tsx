import Image from 'next/image';

const persons = [
  {
    name: 'J VIJAYKUMAR',
    role: 'Project Creator & Lead Developer',
    avatar: '/userimg.png',
    github: 'https://github.com/juttuvijayk',
    linkedin: 'https://www.linkedin.com/in/juttuvijaykumar',
  },
];

const PersonCard = ({ children }: { children: React.ReactNode }) => (
  <div className="transition ease-in-out delay-100 duration-300 px-6 py-8 flex flex-col items-center text-center shadow bg-zinc-900/60 border border-zinc-800/60 hover:bg-zinc-800/80 hover:border-zinc-700/80 hover:shadow-xl rounded-xl">
    {children}
  </div>
);

const ProfileSocial = ({ github, linkedin }: { github: string; linkedin: string }) => (
  <div className="flex gap-4">
    <a href={github} target="_blank" rel="noreferrer">
      <Image src="/icons/github.svg" alt="github" width="24" height="24" className="invert" />
    </a>
    <a href={linkedin} target="_blank" rel="noreferrer">
      <Image src="/icons/linkedin.svg" alt="linkedin" width="24" height="24" className="invert" />
    </a>
  </div>
);

export default function Person() {
  return (
    <>
      {persons.map((person) => (
        <PersonCard key={person.name}>
          <Image
            src={person.avatar}
            alt={person.name}
            className="rounded-full"
            height="96"
            width="96"
          />
          <p className="text-white mt-4 font-bold">{person.name}</p>
          <p className="text-zinc-400 mb-6">{person.role}</p>
          <ProfileSocial github={person.github} linkedin={person.linkedin} />
        </PersonCard>
      ))}
    </>
  );
}
