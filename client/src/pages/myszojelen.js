import React from "react"
import Layout from "./layouts/Layout"
import style from "../styles/animal.module.scss"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import myszojelen1 from "../images/myszojelen.jpg"
import myszojelen2 from "../images/myszojelen2.jpg"
import myszojelen3 from "../images/m1.jpg"
import myszojelen4 from "../images/myszojelen4.jpg"
import colabo from "../images/colabo4.jpg"

const myszojelen = () => {
  return (
    <Layout>
      <Helmet>
        <title>Odkryłeś Myszojelenia!</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className={style.animal}>
        <Link to="/zagadki" className={style.goBack}>
          &larr; Wróć do zagadek
        </Link>
        <h2>Gratulacje!</h2>
        <h3>
          Odkryłeś <span>Myszojelenia!</span>
        </h3>
        <div className={style.twoColumn}>
          <img src={myszojelen1} alt="myszojeleń" className={style.mainImg} />
          <div className={style.desc}>
            <p>Myszojeleń to inaczej Kanczyl Srebrnogrzbiety.</p>
            <p>
              Zamieszkuje tereny Wietnamu. <span role="img">🌳</span>
            </p>
            <p>
              Wszyscy myślieli, że wyginął w 1990r. <span role="img">☠️</span>
            </p>
            <p>
              Jednak niedawno okazało się, że żyje! <span role="img">🤗</span>
            </p>
            <p>
              Niestety nie ma o nim wielu informacji, ponieważ niewielu
              wiedziało o jego istnieniu. Miejmy nadzieję, że niedługo się to
              zmieni! <span role="img">👍</span>
            </p>
            <p>
              MYSZOJELEŃ! <span role="img">😍</span>
            </p>

            <Link to="/zagadki" className={style.goBack}>
              &larr; Wróć do zagadek
            </Link>
          </div>
        </div>
        <div className={style.animalsGallery}>
          <img
            src={myszojelen2}
            alt="myszojeleń"
            className={style.mobilePhoto}
          />
          <img
            src={myszojelen3}
            alt="myszojeleń"
            className={style.mobilePhoto}
          />
          <img
            src={myszojelen4}
            alt="myszojeleń"
            className={style.mobilePhoto}
          />
          <img
            src={colabo}
            alt="galeria postrzałek"
            className={style.desktopPhoto}
          />
        </div>
      </div>
    </Layout>
  )
}

export default myszojelen
