import { FC } from 'react'
import { Img, NavLink } from '../../atoms'
import { ImageWrapper, Wrapper, LinkWrapper, ExtraWrapper } from './styles'

const NavBar: FC = () => {
	return (
		<LinkWrapper>
			<NavLink href='#'>Tab</NavLink>
			<NavLink href='#'>Tab</NavLink>
			<NavLink href='#'>Tab</NavLink>
			<NavLink href='#'>Tab</NavLink>
			<NavLink href='#'>Tab</NavLink>
			<NavLink href='#'>Tab</NavLink>
			<NavLink href='#'>Tab</NavLink>	
		</LinkWrapper>
	)
}

export default NavBar
