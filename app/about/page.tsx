import Separator from '../../components/Separator/Separator'
import './style.css'

const About = () => {
  return (
    <div className="sectionContentContainer">
      <div>
        <h1 className='aboutTitle'>About Me</h1>
      </div>

      <p className='aboutTxt'>
        Hi! I'm Kenan Bouvier, I enjoy solving problems with particular interest in <a className='linkTag'>SDE</a>, <a className='linkTag'>Cyber Security</a> and <a className='linkTag'>Algorithms</a> My contacts and links are down at the footer!
        </p>
      <Separator/>
    </div>
  )
}

export default About
