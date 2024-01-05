import {FaEnvelope} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import './index.css'

const Contacts = () => (
  <div className="contacts">
    <div className="icons-cont">
      <AiOutlineInstagram className="icons" />
      <BsLinkedin className="icons" />
      <FaEnvelope className="icons" />
    </div>
    <p className="copy-right">Copyright © 2024. All rights reserved </p>
  </div>
)

export default Contacts
