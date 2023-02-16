import './style.css'

export default function NavBar(){
  return (
    <div className='navDiv'>
      <nav className="navMenu">
        <a href="/">Software Development</a>
        <a href="cyber">Cyber Security</a>
        <a href="about">About me</a>
        <div className="dot"></div>
      </nav>  
   </div>
  )
}
