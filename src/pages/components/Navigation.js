import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/zagadki">Rozwiąż zagadki</Link>
      </li>
      <li>
        <Link to="/komentarze">Napisz komentarz</Link>
      </li>
    </ul>
  )
}

export default Navigation
