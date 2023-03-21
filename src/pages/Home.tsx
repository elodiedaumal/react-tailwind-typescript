import React from 'react';
import { SelectedPage } from '../shared/types';
import useMediaQuery from '../hooks/useMediaQuery';
import ActionButton from '../shared/ActionButton';
import HomeHero from '../assets/HomePageText.png';
import HomeGraphic from '../assets/HomePageGraphic.png';
import RedBull from '../assets/SponsorRedBull.png';
import Forbes from '../assets/SponsorForbes.png';
import Fortune from '../assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery('(min-width:1060px)');
  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
      <motion.div
        className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className='z-10 mt-32 md:basis-3/5'>
          <motion.div
            className='md:-mt-20 '
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className='relative '>
              <div className='before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-10]'>
                <img src={HomeHero} alt='home page text' />
              </div>
            </div>
            <p className='mt-8 text-sm md:text-start'>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          <motion.div
            className='mt-8 flex items-center gap-8 '
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -80 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton
              setSelectedPage={setSelectedPage}
              children={'Join Now'}
            />
            <AnchorLink
              className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
              onClick={() => {
                setSelectedPage(SelectedPage.ContactUs);
              }}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end'>
          <img src={HomeGraphic} alt='home page garphic' />
        </div>
      </motion.div>
      {isAboveMediumScreen && (
        <div className='h-[150px] w-full bg-primary-100 py-10'>
          <div className='mx-auto w-5/6'>
            <div className='flex w-3/5 items-center justify-between gap-8'>
              <img src={RedBull} alt='RedBull' />
              <img src={Forbes} alt='Forbes' />
              <img src={Fortune} alt='Fortune' />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
