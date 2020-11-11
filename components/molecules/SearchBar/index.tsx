import { FC, useState } from 'react'
import Input from '../../atoms/Input'
import Button from '../../atoms/Button'

interface SearchBarProps {
	onSubmit: (query: string) => void
}

const SearchBar: FC<SearchBarProps> = (props) => {
	const [value, setValue] = useState(null)

	const onChangeHandler = (e) => {
		setValue(e.target.value)
	}

	return (
		<>
			<Input value={value} onChange={onChangeHandler} />
			<Button 
				type="primary"
                onClick={() => props.onSubmit(value)}
            >
			
            Search
			</Button>
		</>
	)
}

export default SearchBar
