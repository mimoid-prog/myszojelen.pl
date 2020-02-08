import React, { useState } from "react"
import Layout from "./layouts/Layout"
import Header from "./components/Header"
import { Helmet } from "react-helmet"
import style from "../styles/riddles.module.scss"
import Animals from "./components/Animals"
import Squares from "./components/Squares"
import Answer from "./components/Answer"
import Backend from "react-dnd-html5-backend"

import { DndProvider } from "react-dnd"

const Riddles = () => {
  const [squares, setSquares] = useState({ 0: "", 1: "" })
  const [answer, setAnswer] = useState({})

  const changed = (type, num) => {
    setSquares({
      ...squares,
      [num]: type,
    })
  }

  const checkEquation = () => {
    if (
      (squares[0] === "mysz" && squares[1] === "jelen") ||
      (squares[0] === "jelen" && squares[1] === "mysz")
    ) {
      setAnswer("myszojelen")
    } else if (
      (squares[0] === "kangur" && squares[1] === "wiewiorka") ||
      (squares[0] === "wiewiorka" && squares[1] === "kangur")
    ) {
      setAnswer("kangowiewior")
    } else {
      setAnswer("fail")
    }
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
      <div className={`${style.riddles} container`}>
        <h2 className="page-title">
          Przenieś zwierzaki w odpowiednie miejsca i rozwiąż równania!
        </h2>
        <DndProvider backend={Backend}>
          <Animals squares={squares} />
          <Squares changed={changed} checkEquation={checkEquation} />
        </DndProvider>
        <Answer answer={answer} />
      </div>
    </Layout>
  )
}

export default Riddles
