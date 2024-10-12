import React from 'react'
import Foot from '../assets/footer/footer.jpg'
import Logo from '../assets/logo.png'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt, 
 } from 'react-icons/fa'


const BannerImg = {
    backgroundImage: `url(${Foot})`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
}

const FooterLinks = [
    {
        title: 'Home',
        link: '#/'
      },
    {
        title: 'About',
        link: '#/about'
      },
    {
        title: 'Contact',
        link: '#/contact'
      },
    
   
  ]





const Footer = () => {
  return ( 
      <div style={BannerImg}
      className='text-white mb-2'>
          <div className='container'>
              {/* company details */}
              <div
                  data-aos='zoom-in'
                  className='grid md:grid-cols-3 pb-[35px] '>
                  
             
              <div className='py-2 sm:py-8 px-4'>
                      <h1 className='sm:text-3xl text-xl font-bold sm:text-left 
                      text-justify mb-3 flex items-center gap-3'>
                          <img src={Logo} alt=""
                          className='max-w-[50px]'/>
                          GlowStride</h1>
                  <p className='font-extralight'>Glowstride 
                       mission is to provide stylish and comfortable apparel that
                      empowers
                      individuals to express their unique identities.
                  </p>
              </div>
                  {/* footer links */}
                  <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                      <div>
                          <div className='py-2 sm:py-8 px-4'>
                              <h1 className='sm:text-xl text-xl font-bold sm:text-left 
                              text-justify mb-3 '>
                                  Important Links
                              </h1>
                              <ul className='flex flex-col gap-3 '>
                                  {FooterLinks.map((link) => (
                                      <li className='cursor-pointer hover:text-primary 
                                      hover:translate-x-1 duration-300 text-gray-200'
                                      key={link.title}>
                                          <span>{ link.title}</span>
                                      </li>
                                  ))}
                              </ul>
                          </div>
                      </div>

                {/* social links */}
                      <div>
                          <di v className='flex items-center gap-1 mt-3 sm:gap-3 sm:mt-6'>
                              <a href="#">
                                  <FaInstagram className='text-3xl'/>
                              </a>
                              <a href="#">
                                  <FaFacebook className='text-3xl'/>
                              </a>
                              <a href="#">
                                  <FaLinkedin className='text-3xl'/>
                              </a>
                              
                          </di>

                          <div className='mt-6'>
                              <div className='flex items-center gap-3'>
                                  <FaLocationArrow />
                                  <p>Nairobi South B</p>
                              </div>
                              <div className='flex items-center gap-3 mt-3'>
                                  < FaMobileAlt />
                                  <p>+254 101897909</p>
                              </div>
                          </div>
                    </div>

                  </div>
              </div>
          </div>
    </div>
  )
}

export default Footer