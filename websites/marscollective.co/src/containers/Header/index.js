import React from 'react'
import Headroom from 'react-headroom'

import Nav from '../../components/Nav'
import * as S from './styled'
import { ContainerNM as Container } from '../../components/Container'

const Header = () => (
  <Headroom>
    <Container>
      <S.Wrapper
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        <S.LogoSVG />
        <Nav />
      </S.Wrapper>
    </Container>
  </Headroom>
)

export default Header
