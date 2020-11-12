import styled from 'styled-components';
import { border, BorderProps } from 'styled-system'
import { themeGet } from '@styled-system/theme-get';
import Image from 'next/image';

interface ImgProps {
    layout: string,
    rounded?: boolean,
    bordered?: boolean 
}

export const Img = styled(Image)<ImgProps & BorderProps>`
    ${props => props.rounded && 'border-radius: 100%'};
    ${props => props.bordered && 'border: ' + '2px solid lightblue !important' };
    ${border}

`