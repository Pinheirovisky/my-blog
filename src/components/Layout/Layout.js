import React from "react"
import PropTypes from "prop-types"

// Components
import { Sidebar } from "../Sidebar"
import { MenuBar } from "../MenuBar"

// Styles
import * as S from "./layout.styles"
import { GlobalStyles } from "../../styles"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
export { Layout }
