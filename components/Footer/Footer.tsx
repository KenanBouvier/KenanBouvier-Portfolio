import Image from 'next/image'
import './style.css'
import ghIcon from '../../public/ghwhite.png'
import linkedIn from '../../public/linkedin.png'
import emailIcon from '../../public/emailicon.png'

export default function Footer() {
  return (

    <div className='footerDiv'>
      <div className='developedDiv'>
      <p className='developed'>[Website developed using Next.js. Source code can be found 
      <a href="https://github.com/KenanBouvier/developer-portfolio-website" className='linkTag'> here.</a>]
      </p>
      </div>
      <div className='footerLinks'>
        <a href="mailto:kenanbouvier@gmail.com" target="_blank" className='iconDiv'>
          <Image src={emailIcon} alt="ghicon" className="footerghicon" />
        </a>

        <a href="https://github.com/kenanbouvier" target="_blank" className='iconDiv'>
          <Image src={ghIcon} alt="ghicon" className="footerghicon" />
        </a>

        <a href="https://www.linkedin.com/in/kenanbouvier/" target="_blank" className='iconDiv'>
          <Image src={linkedIn} alt="ghicon" className="footerghicon" />
        </a>

      </div>
      <p className='footerTxt'>
        © 2022 Kenan Bouvier. All rights reserved.</p> 
    </div>
  )
}
