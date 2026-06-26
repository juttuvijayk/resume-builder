import { AnimationGeneratorType, motion, useAnimation } from 'framer-motion';
import { NavBarActions, StyledButton } from '../builder/nav-bar/atoms';

import { BsGithub } from 'react-icons/bs';
import { Button } from '@mui/material';
import FeatureSection from './components/Feature';
import Image from 'next/image';
import Link from 'next/link';
import Person from './components/Person';

const HomeLayout = () => {
  const controls = useAnimation();
  const animationEffectsHoverEnter = { scale: 1.05 };
  const animationEffectsHoverLeave = { scale: 1 };
  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transitionEffects = {
    type: 'spring' as AnimationGeneratorType,
    stiffness: 400,
    damping: 17,
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} className="scroll-smooth bg-[#020202] min-h-screen text-white">
      <nav className="sticky top-0 z-20 h-14 w-full bg-black/80 backdrop-blur-md border-b border-zinc-800/80 flex py-2.5 px-4 xl:px-60 items-center shadow-level-8dp">
        <Link href="/">
          <Image src={'/icons/resume-icon.svg'} alt="logo" height="36" width="36" />
        </Link>
        <div className="flex-auto flex justify-between items-center ml-5">
          <NavBarActions>
            <Link href="/builder" passHref={true}>
              <StyledButton variant="text" style={{ color: '#ffffff' }}>Editor</StyledButton>
            </Link>
          </NavBarActions>
          <NavBarActions>
            <Link href="#contribute" passHref={true} className="max-md:hidden">
              <StyledButton variant="text" style={{ color: '#ffffff' }}>Contribute</StyledButton>
            </Link>
            <Link href="#about-us" passHref={true}>
              <StyledButton variant="text" style={{ color: '#ffffff' }}>About us</StyledButton>
            </Link>
            <a
              href={'https://github.com/juttuvijayk/resume-builder'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="h-6 w-6" fill="white" />
            </a>
          </NavBarActions>
        </div>
      </nav>
      <div
        style={{
          background: 'linear-gradient(180deg, #0a0a0a 0%, #020202 100%)',
          fontFamily: "'Roboto Slab', serif",
        }}
      >
        <div className="mx-6 md:mx-40 xl:mx-60 mb-6">
          <motion.div
            className="grid grid-cols-12 pt-12 md:pt-24"
            initial={{ opacity: 0 }}
            animate={animationEffectsFirstLoad}
            transition={transitionEffects}
          >
            <div className="col-span-12 sm:col-span-4">
              <motion.img
                id="resume-3d"
                src="/illustration.png"
                alt="resume-illustration"
                className="w-6/12 sm:w-9/12 grayscale hover:grayscale-0 transition-all duration-300 ease-in-out cursor-pointer"
                onMouseEnter={() => {
                  controls.start(animationEffectsHoverEnter, transitionEffects);
                }}
                onMouseLeave={() => {
                  controls.start(animationEffectsHoverLeave, transitionEffects);
                }}
                animate={controls}
              />
            </div>
            <div className="col-span-12 sm:col-span-8">
              <h3 className="text-xl md:text-2xl mb-2 text-zinc-400">SIMPLEST WAY TO BUILD A</h3>
              <h1 className="text-5xl mb-12 text-white font-extrabold">Professional Resume</h1>

              <div className="flex mb-10">
                <div className="bg-white w-1 rounded-lg"></div>
                <p className="text-lg ml-3 text-zinc-300">
                  &ldquo;The secret to getting ahead is getting started&rdquo;
                  <br />
                  —Mark Twain
                </p>
              </div>
              <Link href="/builder" passHref={true}>
                <Button variant="contained" style={{ backgroundColor: '#ffffff', color: '#000000', fontWeight: 'bold' }} className="mb-2">
                  BUILD YOUR RESUME
                </Button>
              </Link>
              <p
                className="xl:invisible text-zinc-500"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                Desktop screen recommended
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="mx-6 md:mx-40 xl:mx-60 my-32"
        style={{ fontFamily: "'Roboto Slab', serif" }}
        initial={{ opacity: 0 }}
        animate={animationEffectsFirstLoad}
        transition={transitionEffects}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeatureSection />
        </div>
      </motion.div>

      <div className="bg-zinc-950/40 border border-zinc-800/80 my-32 rounded-2xl mx-6 md:mx-40 xl:mx-60">
        <div
          id="contribute"
          className="py-12 px-6"
          style={{ fontFamily: "'Roboto Slab', serif" }}
        >
          <div className="grid grid-cols-12 items-center text-center">
            <div className="col-span-12 lg:col-span-4 mb-4 lg:mb-0 flex flex-col items-center gap-2">
              <Image src={'/icons/palette.svg'} alt="palette" height="48" width="48" className="invert brightness-200" />
              <p className="text-zinc-200 text-xl mt-2">
                Do you want to make your own <strong>template?</strong>
              </p>
            </div>
            <div className="col-span-12 lg:col-span-1 mb-4 lg:mb-0 text-zinc-400 text-4xl">
              <p>+</p>
            </div>
            <div className="col-span-12 lg:col-span-2 flex flex-col items-center gap-2">
              <Image src={'/icons/terminal.svg'} alt="terminal" height="48" width="48" className="invert brightness-200" />
              <p className="text-zinc-200 text-xl mt-2">
                Do you write <strong>React</strong> code?
              </p>
            </div>
            <div className="invisible lg:visible lg:col-span-2 text-zinc-400 text-4xl mx-6">
              <p>=</p>
            </div>
            <div className="col-span-12 lg:col-span-3 mx-auto flex flex-col items-center gap-2">
              <div className="mb-6">
                <Image src={'/icons/wave.svg'} alt="wave" height="48" width="48" className="invert brightness-200" />
              </div>
              <div>
                <a
                  href="https://github.com/juttuvijayk/resume-builder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="contained" style={{ backgroundColor: '#ffffff', color: '#000000', fontWeight: 'bold' }} className="mt-2 lg:mt-5 mb-3">
                    CONTRIBUTE
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about-us"
        className="mx-6 md:mx-40 xl:mx-60 my-32"
        style={{ fontFamily: "'Roboto Slab', serif" }}
      >
        <h2 className="text-white font-extrabold text-3xl mb-2 text-center lg:text-left">About us</h2>
        <p className="text-zinc-400 mb-8 text-center lg:text-left">
          A bunch of developers and designers — who love to build open source projects and learn
          along!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Person />
        </div>
        <p className="text-zinc-500 my-8 text-center lg:text-left">
          Read our design story on&nbsp;
          <a
            href="https://medium.com/@yakshag/e-resume-build-a-professional-resume-design-case-study-3dc02a6359ea"
            target="_blank"
            rel="noreferrer"
            className="underline text-zinc-300 hover:text-white"
          >
            Medium
          </a>
          ↗
        </p>
      </div>
    </motion.div>
  );
};

export default HomeLayout;
