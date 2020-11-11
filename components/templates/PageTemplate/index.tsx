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
			<Header maxWidth={['100%', '100%', 720, 960, 1140]}>{header}</Header>
			<Navigation>{navigation}</Navigation>		
			<Footer>{footer}</Footer>
		</Wrapper>
	)
}

export default PageTemplate
