import React from "react"
import kangowiewior from "../../images/postrzalka.jpg"
import kangowiewior2 from "../../images/postrzalka2.jpg"
import kangowiewior3 from "../../images/postrzalka3.jpg"
import kangowiewior4 from "../../images/postrzalka4.jpg"
import kangowiewior5 from "../../images/postrzalka5.jpg"
import myszojelen6 from "../../images/myszojelen6.jpg"
import myszojelen2 from "../../images/myszojelen2.jpg"
import myszojelen3 from "../../images/myszojelen3.jpg"
import myszojelen4 from "../../images/myszojelen4.jpg"
import myszojelen5 from "../../images/myszojelen5.jpg"
import style from "../../styles/oldriddles.module.scss"

const Answer = props => {
  return (
    <div className={style.answer}>
      {props.answer === "myszojelen" && (
        <div className={style.answerItem}>
          <div className={style.gallery}>
            <img src={myszojelen4} alt="myszojeleń" className={style.p2} />
            <img src={myszojelen2} alt="myszojeleń" className={style.p5} />
            <img src={myszojelen6} alt="myszojeleń" className={style.p5} />
          </div>
          <div className={style.desc}>
            <div className={style.description}>
              <h2 className={style.answerTitle}>
                Gratulacje! <br />
                Znalazłeś <span>Myszojelenia!</span>
              </h2>
              <p>Myszojeleń to inaczej Kanczyl Srebrnogrzbiety.</p>
              <p>
                Wszyscy myślieli, że wyginął w 1990r. <span role="img">☠️</span>
              </p>
              <p>
                Jednak niedawno okazało się, że żyje! <span role="img">🤗</span>
              </p>
              <p>Zamieszkuje tereny Wietnamu.</p>
              <p>
                Niestety nie ma o nim wielu informacji, ponieważ niewielu
                wiedziało o jego istnieniu. Miejmy nadzieję, że niedługo się to
                zmieni!
              </p>
              <p>
                MYSZOJELEŃ! <span role="img">😍</span>
              </p>
              <p>
                {"("}spróbuj odkyrć drugie zwierzę{")"}
              </p>
            </div>
            <img src={myszojelen5} alt="myszojeleń" className={style.p3} />
            <img src={myszojelen3} alt="myszojeleń" className={style.p1} />
          </div>
        </div>
      )}
      {props.answer === "kangowiewior" && (
        <div className={style.answerItem}>
          <div className={style.gallery}>
            <img src={kangowiewior2} alt="kangowiewiór" className={style.p2} />
            <img src={kangowiewior4} alt="kangowiewiór" className={style.p4} />
            <img src={kangowiewior5} alt="kangowiewiór" className={style.p5} />
          </div>
          <div className={style.desc}>
            <div className={style.description}>
              <h2 className={style.answerTitle}>
                Brawo! <br />
                Odkryłeś <span>Kangowiewióra!</span>
              </h2>
              <p>Kangowiewiór to inaczej Postrzałka kafryjska.</p>
              <p>Zamieszkuje tereny południowej Afryki.</p>
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
            </div>
            <img src={kangowiewior3} alt="kangowiewiór" className={style.p3} />
            <img src={kangowiewior} alt="kangowiewiór" className={style.p1} />
          </div>
        </div>
      )}
      {props.answer === "fail" && (
        <div className={style.fail}>
          <h2 className={style.answerTitle}>
            Niestety, takie połączenie zwierząt nie istnieje :{"("}
            <br />
            Wybierz inne zwierzęta.
          </h2>
        </div>
      )}
    </div>
  )
}

export default Answer
