import Separator from '../Separator/Separator'
import './style.css'
export default function Header() {
    return (
      <>
      <div className='header'>
          <p className='name'>
            Kenan Bouvier
          </p>
          <p className='dev'>
            {/* kenanbouvier@protonmail.com */}
            Software Engineer
          </p>
          <p className='email'>
            {/* Full Stack Development */}
            {/* London, United Kingdom */}
            {/* kenanbouvier@protonmail.com */}
          </p>
      </div>
          {/* <Separator/> */}
          </>
    )
  }