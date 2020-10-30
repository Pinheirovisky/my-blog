import React from "react"

// Components
import { Profile } from "../Profile"
import { SocialLinks } from "../SocialLinks"

// Styles
import * as S from "./sidebar.styles"

const Sidebar = () => {
  return (
    <S.SidebarWrapper>
      <Profile />
      <SocialLinks />
    </S.SidebarWrapper>
  )
}

export { Sidebar }
export default Sidebar
