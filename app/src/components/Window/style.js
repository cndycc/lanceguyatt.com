import styled from 'styled-components'

import { Box, Flex } from '../common'

export const Name = styled(Box).attrs({
  px: 3,
  flex: 1,
})`
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
`

export const Header = styled(Flex).attrs({
  alignItems: 'center',
  borderBottom: 2,
  borderColor: 'dark',
  height: '2rem',
})``

export const Main = styled(Flex).attrs({
  flexDirection: 'column',
  bg: 'secondary',
  flex: 1,
  py: 5,
  px: 4,
  // minHeight: 'min-content',
})`
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`
