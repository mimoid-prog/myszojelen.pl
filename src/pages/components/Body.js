import React from "react"
import bodyStyles from "../../styles/body.module.scss"
import m1 from "../../images/m1shaped.png"
import m4 from "../../images/m4shaped.png"

const Body = () => {
  return (
    <div className={`bodyContainer container`}>
      <div className={bodyStyles.body}>
        <div className={bodyStyles.column1}>
          <p>Był ostatnio zaobserwowany w Wietnamie</p>
          <p>Choć naukowcy myśleli, że już dawno wyginął</p>
          <p>Zwany również jako Kanczyl Srebrnogrzbiety</p>
          <h2>MYSZOJELEŃ!</h2>
          <h3>Zagrożony wyginięciem!</h3>
          <h2>MYSZOJELEŃ!</h2>
          <h3>Najmniejszy przeżuwacz świata!</h3>
          <h2>MYSZOJELEŃ!</h2>
        </div>
        <div className={bodyStyles.column2}>
          <img src={m1} alt="Uroczy myszojeleń" className={bodyStyles.img1} />
        </div>
      </div>
      <div className={`${bodyStyles.body} ${bodyStyles.section2}`}>
        <div className={bodyStyles.column2}>
          <img
            src={m4}
            alt="Mały myszojeleń ze swoją mamą i myszojeleń z wyciągniętym językiem"
            className={bodyStyles.img4}
          />
        </div>
        <div className={bodyStyles.column1}>
          <p>Mamamamamama małe nóżki</p>
          <p>A do tego duży tułów</p>
          <p>Ma kopytka i twarz jak gryzoń</p>
          <h2>MYSZOJELEŃ!</h2>
          <h3>Zagrożony wyginięciem!</h3>
          <h2>MYSZOJELEŃ!</h2>
          <h3>Najmniejszy przeżuwacz świata!</h3>
          <h2>MYSZOJELEŃ!</h2>
          <h3>Nie pomyl go przypadkiem z sarną!</h3>
          <h2>MYSZOJELEŃ!</h2>
        </div>
      </div>
    </div>
  )
}

export default Body
