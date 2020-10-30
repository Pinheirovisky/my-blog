import React from "react"

import Icons from "./Icons"
import links from "./content"

// Styles
import * as S from "./styled"

const SocialLinks = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinkList>
      {links.map((link, linkKey) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialLinksItem key={linkKey}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinkList>
  </S.SocialLinksWrapper>
)

export { SocialLinks }
export default SocialLinks
