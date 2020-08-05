import React from "react"
import headerStyles from "../../styles/header.module.scss"
import titleBg from "../../images/title-bg.png"
import { Link } from "gatsby"
import Navigation from "./Navigation"

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.logoBox}>
        <img src={titleBg} alt="title background" />
        <Link to="/">
          <h1>
            Myszo<span>jeleń</span>
          </h1>
        </Link>
      </div>
      <Navigation />
    </div>
  )
}

export default Header
