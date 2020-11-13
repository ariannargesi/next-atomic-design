import { FC, ReactNode } from 'react'
import { Wrapper, Navigation, Header, Content, Footer } from './styles'

interface PageTemplateProps {
	navigation: ReactNode
	header: ReactNode
	footer: ReactNode
}

const PageTemplate: FC<PageTemplateProps> = ({ navigation, header, footer, children }) => {
	return (
		<Wrapper>
			<Header>{header}</Header>
			<Navigation>{navigation}</Navigation>
					
			<Content>
			{children}
			</Content>
			<Footer>{footer}</Footer>
		</Wrapper>
	)
}

export default PageTemplate
