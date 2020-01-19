import React from "react"
import Layout from "./components/layouts/Layout"
import Header from "./components/header/Header"
import Body from "./components/body/Body"
import VideoSection from "./components/videoSection/VideoSection"

const Home = () => {
  return (
    <Layout>
      <Header />
      <Body />
      <VideoSection />
    </Layout>
  )
}

export default Home
