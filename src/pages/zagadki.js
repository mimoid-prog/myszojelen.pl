import React, { useState } from "react"
import Layout from "./layouts/Layout"
import style from "../styles/riddles.module.scss"
import mysz from "../images/mysz.jpg"
import wiewiorka from "../images/wiewiorka.jpg"
import jelen from "../images/jelen.jpg"
import kangur from "../images/kangur.jpg"
import { navigate } from "gatsby"
import Header from "./components/Header"
import { Helmet } from "react-helmet"

const Test = props => {
  const [chosenAnimals, setChosenAnimals] = useState({ 0: "", 1: "" })
  const [equationMessage, setEquationMessage] = useState("")

  const animalClick = animal => {
    if (chosenAnimals[0] === "") {
      setChosenAnimals({ ...chosenAnimals, 0: animal })
    } else if (chosenAnimals[1] === "") {
      setChosenAnimals({ ...chosenAnimals, 1: animal })
    }
    if (chosenAnimals[0] === "" || chosenAnimals[1] === "")
      setEquationMessage("")
  }

  const getAnimalImage = num => {
    let image
    if (chosenAnimals[num] === "mysz")
      image = <img src={mysz} alt="mysz" className={style.image} />
    else if (chosenAnimals[num] === "kangur")
      image = <img src={kangur} alt="kangur" className={style.image} />
    else if (chosenAnimals[num] === "jelen")
      image = <img src={jelen} alt="jeleń" className={style.image} />
    else image = <img src={wiewiorka} alt="wiewiórka" className={style.image} />
    return image
  }

  const checkAnimals = () => {
    if (chosenAnimals[0] !== "" && chosenAnimals[1] !== "") {
      if (
        (chosenAnimals[0] === "mysz" && chosenAnimals[1] === "jelen") ||
        (chosenAnimals[1] === "mysz" && chosenAnimals[0] === "jelen")
      ) {
        navigate("/myszojelen")
      } else if (
        (chosenAnimals[0] === "kangur" && chosenAnimals[1] === "wiewiorka") ||
        (chosenAnimals[1] === "kangur" && chosenAnimals[0] === "wiewiorka")
      ) {
        navigate("/kangowiewior")
      } else {
        setEquationMessage(
          "Niestety takie połączenie zwierząt nie istnieje! :("
        )
      }
    } else {
      setEquationMessage("Musisz zaznaczyć dwa zwierzaki!")
    }
  }

  const removeAnimal = num => {
    if (num) setChosenAnimals({ ...chosenAnimals, 1: "" })
    else setChosenAnimals({ ...chosenAnimals, 0: "" })
    setEquationMessage("")
  }

  return (
    <Layout>
      <Helmet>
        <title>Rozwiąż bardzo trudne zagadki</title>
        <meta
          name="description"
          content="Pochwal się swoją wiedzą na temat Myszojelenia oraz innych zwierząt i rozwiąż trudne zagadki."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <h2 className="page-title">
        Wciśnij odpowiednie zwierzęta, aby rozwiązać równanie! <br />
        <span>(są dwie pary)</span>
      </h2>
      <div className={style.animalsSources}>
        <div className={style.imageHolder}>
          {chosenAnimals[0] !== "mysz" && chosenAnimals[1] !== "mysz" && (
            <img
              src={mysz}
              alt="mysz"
              className={style.image}
              onClick={() => animalClick("mysz")}
            />
          )}
        </div>
        <div className={style.imageHolder}>
          {chosenAnimals[0] !== "kangur" && chosenAnimals[1] !== "kangur" && (
            <img
              src={kangur}
              alt="kangur"
              className={style.image}
              onClick={() => animalClick("kangur")}
            />
          )}
        </div>
        <div className={style.imageHolder}>
          {chosenAnimals[0] !== "jelen" && chosenAnimals[1] !== "jelen" && (
            <img
              src={jelen}
              alt="jelen"
              className={style.image}
              onClick={() => animalClick("jelen")}
            />
          )}
        </div>
        <div className={style.imageHolder}>
          {chosenAnimals[0] !== "wiewiorka" &&
            chosenAnimals[1] !== "wiewiorka" && (
              <img
                src={wiewiorka}
                alt="wiewiorka"
                className={style.image}
                onClick={() => animalClick("wiewiorka")}
              />
            )}
        </div>
      </div>
      <div className={style.animalsTargets}>
        <p className={style.equationMessage}>{equationMessage}</p>
        <div className={style.wholeEquation}>
          <div className={style.mobileEquation}>
            <div className={style.target}>
              {chosenAnimals[0] !== "" && getAnimalImage(0)}
              {chosenAnimals[0] !== "" && (
                <span
                  className={style.removeAnimal}
                  onClick={() => removeAnimal(0)}
                >
                  x
                </span>
              )}
            </div>
            <span className={style.mathChar}>+</span>
            <div className={style.target}>
              {chosenAnimals[1] !== "" && getAnimalImage(1)}
              {chosenAnimals[1] !== "" && (
                <span
                  className={style.removeAnimal}
                  onClick={() => removeAnimal(1)}
                >
                  x
                </span>
              )}
            </div>
          </div>
          <div className={style.mobileEquationSecond}>
            <span className={style.mathChar}>=</span>
            <button className={style.submit} onClick={checkAnimals}>
              sprawdź
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Test
