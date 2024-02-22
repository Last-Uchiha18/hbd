import './header.css'

function Header() {

  return (
        <header id="homeComponent">
            <div>
              <a href="">Chhota Don</a>
            </div>
            <div className= 'right-section'>
                <ul className='nav-links'>
                  <li className='item1'><a href="">Happy Birthday Dude!!</a></li>
                  <li className='item1'><a href="">Already 22!</a></li>
                </ul>
            </div>
        </header>
  )
}

export default Header