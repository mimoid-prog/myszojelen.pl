import React from "react"
import Layout from "./layouts/Layout"
import Header from "./components/Header"
import Body from "./components/Body"
import VideoSection from "./components/VideoSection"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Myszojeleń, czyli połączenie myszy z jeleniem</title>
        <meta
          name="description"
          content="Jeśli jesteś fanem Myszojelenia i chcesz pooglądać jego słodki pyszczek oraz pośpiewać o nim piosenkę to zobacz tę stronę."
        />
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href="../favicon.jpg"></link>
      </Helmet>
      <Header />
      <Body />
      <VideoSection />
      <p className="contact">Kontakt: mimoid.prog@gmail.com</p>
    </Layout>
  )
}

export default Home
