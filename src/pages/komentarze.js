import React, { useState } from "react"
import style from "../styles/comments.module.scss"
import Layout from "./layouts/Layout"
import Header from "./components/Header"
import { Helmet } from "react-helmet"
import img from "../images/menu-item.png"
import { graphql, useStaticQuery } from "gatsby"
import axios from "axios"

const Comments = () => {
  const data = useStaticQuery(graphql`
    query {
      allMongodbMo1087CnsComments {
        edges {
          node {
            nick
            comment
            accepted
          }
        }
      }
    }
  `)

  const [reversed, setReversed] = useState(false)
  let comments = data.allMongodbMo1087CnsComments.edges
  if (reversed === false) {
    comments = data.allMongodbMo1087CnsComments.edges.reverse()
    setReversed(true)
  }

  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [message, setMessage] = useState({
    text: "",
    css: style.fail,
  })

  const onSubmit = e => {
    e.preventDefault()
    if (name.length > 28) {
      setMessage({
        text: "Nick jest za długi",
        css: style.fail,
      })
    } else if (comment.length > 100) {
      setMessage({
        text: "Komentarz jest za długi",
        css: style.fail,
      })
    } else if (name.length < 1 || comment.length < 1) {
      setMessage({
        text: "Pole nie może być puste",
        css: style.fail,
      })
    } else {
      axios
        .post("/api/createComment", { name, comment })
        .then(res => {
          setMessage({
            text: "Udało się! Po zaakceptowaniu komentarz pojawi się poniżej",
            css: style.success,
          })
          setName("")
          setComment("")
        })
        .catch(err => {
          setMessage({
            text: "Wystąpił błąd. Spróbuj jeszcze raz.",
            css: style.fail,
          })
        })
    }
  }

  return (
    <Layout>
      <Helmet>
        <title>Napisz co sądzisz o Myszojeleniu</title>
        <meta
          name="description"
          content="Podziel się z innymi twoją opinią na temat Kanczyla Srebrnogrzbietego i zostaw komentarz."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <div className={style.commentsPage}>
        <h2>
          Napisz co sądzisz o Myszojeleniu (mam nadzieję, że nic brzydkiego!)
        </h2>
        <form className={style.form}>
          <label>Imię lub nick</label>
          <input
            type="text"
            maxLength="28"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <label>Komentarz</label>
          <textarea
            value={comment}
            maxLength="100"
            required
            onChange={e => setComment(e.target.value)}
          ></textarea>
          <button className={style.submit} onClick={onSubmit}>
            Wyślij
          </button>
          <div className={`${style.message} ${message.css}`}>
            {message.text}
          </div>
        </form>
        <div className={style.comments}>
          <h2>Komentarze</h2>
          <ul>
            {comments.map((comment, i) => {
              if (comment.node.accepted === true) {
                return (
                  <li key={i}>
                    <p className={style.nick}>{comment.node.nick}</p>
                    <p>{comment.node.comment}</p>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Comments
