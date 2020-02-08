import React, { useState } from "react"
import { useDrop } from "react-dnd"
import style from "../../styles/oldriddles.module.scss"
import animalsTypes from "./animalsTypes"
import mysz from "../../images/mysz.jpg"
import wiewiorka from "../../images/wiewiorka.jpg"
import jelen from "../../images/jelen.jpg"
import kangur from "../../images/kangur.jpg"

const Squares = props => {
  const [droppedAnimal, setDroppedAnimal] = useState({ 0: "", 1: "" })

  const dropAnimal = (item, num) => {
    setDroppedAnimal({
      ...droppedAnimal,
      [num]: item.type,
    })
    props.changed(item.type, num)
  }

  const [collectedProps, drop] = useDrop({
    accept: [
      animalsTypes.mysz,
      animalsTypes.jelen,
      animalsTypes.wiewiorka,
      animalsTypes.kangur,
    ],
    drop: item => dropAnimal(item, 0),
  })

  const [collectedProps2, drop2] = useDrop({
    accept: [
      animalsTypes.mysz,
      animalsTypes.jelen,
      animalsTypes.wiewiorka,
      animalsTypes.kangur,
    ],
    drop: item => dropAnimal(item, 1),
  })

  const getAnimalImage = num => {
    let image
    if (droppedAnimal[num] === "mysz") image = <img src={mysz} alt="mysz" />
    else if (droppedAnimal[num] === "kangur")
      image = <img src={kangur} alt="kangur" />
    else if (droppedAnimal[num] === "jelen")
      image = <img src={jelen} alt="jelen" />
    else if (droppedAnimal[num] === "wiewiorka")
      image = <img src={wiewiorka} alt="wiewiorka" />
    else image = ""
    return image
  }

  return (
    <div className={style.equation}>
      <div className={style.squareHolder} ref={drop}>
        {droppedAnimal[0] && getAnimalImage(0)}
      </div>
      <span>+</span>
      <div className={style.squareHolder} ref={drop2}>
        {droppedAnimal[1] && getAnimalImage(1)}
      </div>
      <span>=</span>
      <span onClick={props.checkEquation}>sprawdź</span>
    </div>
  )
}

export default Squares
