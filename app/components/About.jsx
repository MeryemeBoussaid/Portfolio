import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div 
      id='about' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
    >
      {/* Titres */}
      <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1 , y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-Ovo'
      >
        Introduction
      </motion.h4>

      <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1 , y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-Ovo'
      >
        About me
      </motion.h2>

      {/* Conteneur Principal */}
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20 my-12'
      >
        {/* 📸 Image de profil */}
        <motion.div 
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1 , scale: 1}}
          transition={{duration: 0.6}}
          className='w-48 sm:w-64 md:w-72 rounded-3xl'
        >
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl shadow-lg' />
        </motion.div>

        {/* 📝 Texte + Cartes */}
        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.8}}
          className='flex-1'
        >
          <p className='text-center lg:text-left text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed'>
            I am a computer engineering student at ENSAT, seeking a PFA internship from July 2025. Skilled in backend development and application security, 
            I have implemented secure authentication and DevSecOps principles. Motivated, creative, and a team player, 
            I am eager to contribute to impactful projects while expanding my expertise.
          </p>

          {/* 🛠️ Cartes (alignées en hauteur) */}
          <motion.ul
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 1}}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0 mt-8'
          >
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <motion.li 
                whileHover={{scale: 1.05}}
                key={index}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50 flex flex-col justify-between h-48'
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* 🛠 Tools */}
          <motion.h4 
            initial={{y:-20, opacity: 0}}
            whileInView={{y: 0 , opacity: 1}}
            transition={{delay: 1.3 ,duration: 0.5}}
            className='my-6 text-gray-700 text-center lg:text-left font-Ovo dark:text-white/80'
          >
            Tools I use
          </motion.h4>

          {/* Icônes des outils */}
          <motion.ul
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 1.5 ,duration: 0.6}}
            className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0'
          >
            {toolsData.map((tool, index) => (
              <motion.li 
                whileHover={{scale: 1.1}}
                key={index}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 bg-white shadow-md dark:bg-darkHover'
              >
                <Image src={tool} alt='Tool' className='w-8 sm:w-12' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About;
