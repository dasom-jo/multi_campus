import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
    ${props => css`
        padding: 5px 10px;
        cursor: pointer;
        border: none;
        border-radius: 10px;
        margin: 0.2rem 0.4rem;
        background-color: ${props.color ? '#ff8282' : '#5f97f9'};
        color: white;
        font-weight: bold;
        transition: background-color 0.3s ease-in;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        &:hover {
            background-color: ${darken(0.2, props.color ? '#ff8282' : '#5f97f9')}
        }
        &:active {
            transform: translateY(1.5px);
        }
    `}
`