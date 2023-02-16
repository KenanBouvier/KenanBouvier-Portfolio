import Separator from '../../components/Separator/Separator';
import './style.css'

export default function CyberSecurity(){
  return (
    <div className="sectionContentContainer">
      <div>
        <h1 className='aboutTitle'>Cyber Security</h1>
      </div>

      <p className='aboutTxt'>
        My interests in development reach out to the Cyber Security field: specifically offensive security and penetration testing. I am <a href="https://verified.elearnsecurity.com/certificates/bd7f98bb-c879-4ec8-98b4-6431fbf5c3ea" className='linkTag' target='_blank'>eJPT certified</a> and currently preparing for my OSCP certification. I also enjoy practicing on sites such as <a href="https://tryhackme.com/p/NanekB" className='linkTag' target="_blank">TryHackMe</a> and HackTheBox.
      </p>
      <h1 className='ctfTitle'>Capture the flag contests</h1>
      <p className='aboutTxt'>
        I also especially like spending time in capture the flag contests! I create writeups for challenges I am interested in for the contests I participate in. That site can be found <a href="https://kenanbouviercyber.netlify.app/"  className='linkTag'>here.</a> 
      </p>
      <Separator/>
    </div>
  )
}
