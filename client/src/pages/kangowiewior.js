import React from "react"
import Layout from "./layouts/Layout"
import style from "../styles/animal.module.scss"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import postrzalka from "../images/postrzalka.jpg"
import postrzalka2 from "../images/postrzalka2.jpg"
import postrzalka3 from "../images/postrzalka3.jpg"
import postrzalka4 from "../images/postrzalka4.jpg"
import colabo from "../images/colabo3.jpg"

const kangowiewior = () => {
  return (
    <Layout>
      <Helmet>
        <title>Odkryłeś Kangowiewióra!</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className={style.animal}>
        <Link to="/zagadki" className={style.goBack}>
          &larr; Wróć do zagadek
        </Link>
        <h2>Brawo!</h2>
        <h3>
          Odkryłeś <span>Kangowiewióra!</span>
        </h3>
        <div className={style.twoColumn}>
          <img src={postrzalka} alt="postrzałka" className={style.mainImg} />
          <div className={style.desc}>
            <p>Kangowiewiór to inaczej Postrzałka kafryjska.</p>
            <p>
              Zamieszkuje tereny południowej Afryki. <span role="img">☀️</span>
            </p>
            <p>
              Jego ulubionym jedzeniem jest trawa. <span role="img">🌿</span>
            </p>
            <p>
              Prowadzi nocny tryb życia. <span role="img">🌘</span>
            </p>
            <p>
              Mieszka w płytkiej norce pod ziemią. <span role="img">🏡</span>
            </p>
            <p>
              Jest uroczy! <span role="img">😍</span>
            </p>

            <Link to="/zagadki" className={style.goBack}>
              &larr; Wróć do zagadek
            </Link>
          </div>
        </div>
        <div className={style.animalsGallery}>
          <img
            src={postrzalka2}
            alt="postrzałka"
            className={style.mobilePhoto}
          />
          <img
            src={postrzalka3}
            alt="postrzałka"
            className={style.mobilePhoto}
          />
          <img
            src={postrzalka4}
            alt="postrzałka"
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

export default kangowiewior
