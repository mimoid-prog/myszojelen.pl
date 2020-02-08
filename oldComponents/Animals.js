import React from "react"
import { useDrag } from "react-dnd"
import myszJpg from "../../images/mysz.jpg"
import wiewiorkaJpg from "../../images/wiewiorka.jpg"
import jelenJpg from "../../images/jelen.jpg"
import kangurJpg from "../../images/kangur.jpg"
import style from "../../styles/oldriddles.module.scss"
import animalsTypes from "./animalsTypes"

const Animals = props => {
  const [{ draggingMysz }, mysz] = useDrag({
    item: { type: animalsTypes.mysz },
    collect: monitor => ({
      draggingMysz: !!monitor.isDragging(),
    }),
  })
  const [{ draggingJelen }, jelen] = useDrag({
    item: { type: animalsTypes.jelen },
    collect: monitor => ({
      draggingJelen: !!monitor.isDragging(),
    }),
  })
  const [{ draggingWiewiorka }, wiewiorka] = useDrag({
    item: { type: animalsTypes.wiewiorka },
    collect: monitor => ({
      draggingWiewiorka: !!monitor.isDragging(),
    }),
  })
  const [{ draggingKangur }, kangur] = useDrag({
    item: { type: animalsTypes.kangur },
    collect: monitor => ({
      draggingKangur: !!monitor.isDragging(),
    }),
  })

  const opacityMysz = draggingMysz ? 0 : 1
  const opacityJelen = draggingJelen ? 0 : 1
  const opacityWiewiorka = draggingWiewiorka ? 0 : 1
  const opacityKangur = draggingKangur ? 0 : 1

  return (
    <div className={style.animals}>
      <div className={style.item}>
        <h3>Mysz</h3>
        <div className={style.imgHolder}>
          {props.squares[0] !== "mysz" && props.squares[1] !== "mysz" && (
            <img
              src={myszJpg}
              ref={mysz}
              style={{ opacity: opacityMysz }}
              alt="mysz"
            />
          )}
        </div>
      </div>
      <div className={style.item}>
        <h3>Kangur</h3>
        <div className={style.imgHolder}>
          {props.squares[0] !== "kangur" && props.squares[1] !== "kangur" && (
            <img
              src={kangurJpg}
              ref={kangur}
              style={{ opacity: opacityKangur }}
              alt="kangur"
            />
          )}
        </div>
      </div>
      <div className={style.item}>
        <h3>Jeleń</h3>
        <div className={style.imgHolder}>
          {props.squares[0] !== "jelen" && props.squares[1] !== "jelen" && (
            <img
              src={jelenJpg}
              ref={jelen}
              style={{ opacity: opacityJelen }}
              alt="jeleń"
            />
          )}
        </div>
      </div>
      <div className={style.item}>
        <h3>Wiewiórka</h3>
        <div className={style.imgHolder}>
          {props.squares[0] !== "wiewiorka" &&
            props.squares[1] !== "wiewiorka" && (
              <img
                src={wiewiorkaJpg}
                ref={wiewiorka}
                style={{ opacity: opacityWiewiorka }}
                alt="wiewiórka"
              />
            )}
        </div>
      </div>
    </div>
  )
}

export default Animals
