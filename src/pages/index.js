import React from "react"
import Layout from "./components/layouts/Layout"
import Header from "./components/header/Header"
import Body from "./components/body/Body"
import VideoSection from "./components/videoSection/VideoSection"
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
      </Helmet>
      <Header />
      <Body />
      <VideoSection />
    </Layout>
  )
}

export default Home
