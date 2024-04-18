import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { IoHomeSharp } from "react-icons/io5";
//헤더의 기본구조
const Header = () => {
    return (
        <StyledHeader>
            <Link to='/'><IoHomeSharp /></Link>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/posts'>Posts</Link>
        </nav>
        </StyledHeader>
    );
}
//헤더의 scss
const StyledHeader = styled.header`
    display: flex;
    justify-content:space-between;//자식요소들사이간을 최대한 넓히는태그
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