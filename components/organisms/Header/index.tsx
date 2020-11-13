import { FC, useState, useEffect } from 'react'
import { themeGet } from '@styled-system/theme-get'
import { withTheme } from 'styled-components'
import { Wrapper, SearchBarWrapper, PhoneNumberWrapper, LogoWrapper, GroupsWrapper } from './styles'
import Icon from '../../atoms/Icon'
import SearchBar from '../../molecules/SearchBar'
import { Img } from '../../atoms/Image'
import { Span } from '../../atoms/Text'
// Logo

let colorNormal 

const Header: FC = (props) => {
	const [searchBar, setSearchBar] = useState(false)

	const submitHandler = (query: string): void => {}

	const getColor = (color: string) => {
		return themeGet(`colors.${color}`)(props)
	}

	return (
		<Wrapper>
			<PhoneNumberWrapper>
				<Icon icon='phone' color={getColor('normal')} />
				<Span color='normal'>98-936806-9820</Span>
			</PhoneNumberWrapper>
			<LogoWrapper>
				<Img src={'/img/logo.png'} width={200} height={50} layout={'fixed'} />
			</LogoWrapper>
			<GroupsWrapper>
				<div style={{ position: 'relative' }}>
					<Icon icon='search' size='lg' onClick={() => setSearchBar(!searchBar)} color={getColor('normal')} pointer  />
					<SearchBarWrapper>{searchBar && <SearchBar onSubmit={submitHandler} />}</SearchBarWrapper>
				</div>
				<Icon icon='shopping-basket' size='lg' counter={'1'} pointer color={getColor('normal') } />
				<Img src={'/img/avatar.png'} width={34} height={34} layout={'fixed'} rounded bordered/>
			</GroupsWrapper>
		</Wrapper>
	)
}
// @ts-ignore
export default withTheme(Header)
