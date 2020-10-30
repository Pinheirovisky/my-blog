import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Styles
import * as S from "./avatar.styles"

const Avatar = () => {
  const {
    avatarImage: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "wpp-profile.jpeg" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return <S.AvatarWrapper fixed={fixed} />
}

export { Avatar }
export default Avatar
