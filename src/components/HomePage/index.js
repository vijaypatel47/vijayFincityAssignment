import {Link} from 'react-router-dom'
import './index.css'

const HomePage = () => (
  <div className="home-container">
    <div className="left-container">
      <h1 className="troff-name">Madelyn Torff</h1>
      <div className="ui-ux-container">
        <h1 className="designer-heading">UI/US DESIGNER</h1>
        <h1 className="name"> Hello, My name is Madelyn Torff</h1>
        <p>
          {' '}
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page
        </p>
        <div className="button-container">
          <Link to="/addProjects" className="link">
            <button className="projectBtn" type="button">
              Projects
            </button>
          </Link>
          <button className="linkedBtn" type="button">
            Linkedin{' '}
          </button>
        </div>
      </div>
    </div>
    <div className="nav_header">
      <div className="item-of-header">
        <Link to="/">
          <button type="button" className="header-button">
            About
          </button>
        </Link>
        <Link to="/addProjects">
          <button type="button" className="header-button">
            Projects
          </button>
        </Link>
        <Link to="/contacts">
          <button type="button" className="header-button">
            Contacts
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default HomePage
