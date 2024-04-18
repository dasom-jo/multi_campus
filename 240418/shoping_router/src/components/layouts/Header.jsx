import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { IoHomeSharp } from "react-icons/io5";
const Header = () => {
    return (
        <StyledHeader>
            <Link to='/'><IoHomeSharp /></Link>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
        </nav>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 0.5rem lrem;
    background-color: #333;
    color: white;
    font-size: 2rem;
    & > a {
        color: white;
        text-align: left;
        font-size: 2rem;
        padding: 1rem;
    }
    nav {
        display: flex;
        a {
            color:white;
            text-decoration: none;
            margin:0 1rem;
            &:hover {
                text-decoration: underline;
            }
        }
    }
`

export default Header;