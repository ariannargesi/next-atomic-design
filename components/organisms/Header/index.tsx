import { FC, useState } from 'react'
import { Wrapper, SearchBarWrapper, PhoneNumberWrapper, LogoWrapper, GroupsWrapper } from './styles'
import Avatar from '../../atoms/Avatar'
import Icon from '../../atoms/Icon'
import SearchBar from '../../molecules/SearchBar'
import { Img  } from '../../atoms/Image' 
import { Span } from '../../atoms/Text'

// Logo

const Header: FC = () => {

	const [searchBar, setSearchBar] = useState(false)
	
	const submitHandler = (query: string): void => {

	}

	return (
		<Wrapper>
			<PhoneNumberWrapper>
				<Icon icon='phone'/>
				<Span>98-936806-9820</Span>
			</PhoneNumberWrapper>
			<LogoWrapper>
 				<Img src={'/img/logo.png'} width={200} height={50} layout={'fixed'} />
			 </LogoWrapper>
			<GroupsWrapper>
					<div style={{ position: 'relative' }}>
						<Icon icon='search' size='lg' onClick={() => setSearchBar(!searchBar)} pointer />
						<SearchBarWrapper>{searchBar && <SearchBar onSubmit={submitHandler}/>}</SearchBarWrapper>
					</div>
					<Icon icon='shopping-basket' size='lg' counter={'1'} pointer />
					<Avatar width={40} height={40} src='https://picsum.photos/42' rounded />
			</GroupsWrapper>
 
		</Wrapper>
	)
}

export default Header
