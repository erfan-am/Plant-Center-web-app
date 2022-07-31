import React from 'react'

export default function Nav(){
  return (
    <>
        <nav className="navbarr">
      <div className="logo">
        <a className="logo_text" href="#">
          <img src="https://raw.githubusercontent.com/yesidacosta/web-navbars/main/navbar-two-row/img/logo.png" alt="NeosPizza"/>
        </a>
      </div>
      <ul className="menu">
        <li className="menu_item">
          <a href="" className="menu_link">Ordene</a>
        </li>
        <li className="menu_item">
          <a href="" className="menu_link">Sucursales</a>
        </li>
        <li className="menu_item">
          <a href="" className="menu_link">Sobre nosotros</a>
        </li>
        <li className="menu_item">
          <a href="" className="menu_link">Contacto</a>
        </li>
      </ul>

      <div className="phone">
        <span className="phone_order">Pedidos al número</span>
        <span className="phone_number">777-888-2323</span>
      </div>

      <div className="login">
        <a className="login_link login_link--button" href="#">Login</a>
        <a className="login_link" href="#">Signup</a>
      </div>

      <div className="btn_pizza fas fa-pizza-slice"></div>
      <div className="btn_login fas fa-user"></div>
      <div className="btn_menu fas fa-bars"></div>
    </nav>
    <section className="pizza-fast">
      <div className="col-full">
        <ul className="pizza_list">
          <li className="pizza_item">
            <i className="fas fa-pizza-slice"></i>
            <a className="pizza_link" href="#">Porción</a>
          </li>
          <li className="pizza_item">
            <img src="https://raw.githubusercontent.com/yesidacosta/web-navbars/main/navbar-two-row/img/pizza_2.svg" alt="" width="32"/>
            <a className="pizza_link" href="#">Pizza</a>
          </li>
          <li className="pizza_item">
            <i><img src="https://raw.githubusercontent.com/yesidacosta/web-navbars/main/navbar-two-row/img/pizza_3.svg" alt="" width="32"/></i>
            <a className="pizza_link" href="#">Familiar</a>
          </li>
          <li className="pizza_item">
            <i><img src="https://raw.githubusercontent.com/yesidacosta/web-navbars/main/navbar-two-row/img/pizza_5.svg" alt="" width="32"/></i>
            <a className="pizza_link" href="#">Frituras</a>
          </li>
          <li className="pizza_item">
            <i><img src="https://raw.githubusercontent.com/yesidacosta/web-navbars/main/navbar-two-row/img/pizza_6.svg" alt="" width="40"/></i>
            <a className="pizza_link" href="#">Combos</a>
          </li>
        </ul>
      </div>
    </section>
</>
  )
}
