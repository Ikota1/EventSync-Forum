import styles from '../../style';
import GetStarted from '../GetStarted/GetStarted';
import Lottie from 'lottie-react';
import animationData from '../../assets/Ly6OsxGIXU.json'

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px16 px-6`}>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>The Next <br className='sm:block hidden' /> {' '} <span className='text-gradient'>Generation</span> {' '}</h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted />
        </div>
      </div>

      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>Event Platform.</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Out team of experts uses a methodology to identify the event most likely to fit your neads. We examine daily all kinds of specific events.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative flex-col`}>

      <Lottie animationData={animationData} />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </div>
  </section>
)


export default Hero