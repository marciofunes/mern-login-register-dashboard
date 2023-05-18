import React from 'react'
import './sidebar.css'
import logo from '../../../Assets/logo.png'
import { IoMdSpeedometer } from 'react-icons/io'
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar, MdBook, MdAgriculture } from 'react-icons/md'
import { BsTrophy, BsCreditCard2Front, BsQuestionCircle } from 'react-icons/bs'
import { AiOutlinePieChart } from 'react-icons/ai'
import { BiTrendingUp, BiLogOutCircle } from 'react-icons/bi'
import { GoRadioTower } from 'react-icons/go'


const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        {/*<img src={logo} alt="Logo" />*/}
        <h2>CPQD <br></br>Digital Twin</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          MENU
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">
                Meus Projetos
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdBook className="icon" />
              <span className="smallText">
                Meus Modelos
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">
                Explorar
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <GoRadioTower className="icon" />
              <span className="smallText">
                Dojot
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdAgriculture className="icon" />
              <span className="smallText">
                PlatIA
              </span>
            </a>
          </li>
        </ul>
      </div>


      <div className="settingsDiv">
        <h3 className="divTitle">
          CONFIGURAÇÕES
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">
                Conta
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">
                Novidades
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">
                Suporte
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsCreditCard2Front className="icon" />
              <span className="smallText">
                Pagamento
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="/" className="menuLink flex">
              <BiLogOutCircle className="icon" />
              <span className="smallText">
                Log Out
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Precisa de Ajuda?</h3>
          <p>Tendo problemas o CPQD Digital Twin, entre em contato conosco para mais perguntas.</p>
          <button className="btn">Help Center</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar