import { Hero, About, Services, Download, Rating, Contact } from "../screens"
import { Layout } from "../layout"
import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Download />
      <Rating />
      <Contact />
    </Layout>
  )
}

export default Home
