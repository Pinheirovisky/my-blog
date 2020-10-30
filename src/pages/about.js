import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/Layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="about" />
    <h1>About Page</h1>
    <li>
      <Link to="/" activeStyle={{ color: "red" }}>
        Home
      </Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </Layout>
)

export default AboutPage
