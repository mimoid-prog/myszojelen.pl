import React from "react"
import headerStyles from "./header.module.scss"
import titleBg from "../../../images/title-bg.png"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <img src={titleBg} alt="title background" />
      <Link to="/">
        <h1>
          Myszo<span>jeleń</span>
        </h1>
      </Link>
    </div>
  )
}

export default Header
