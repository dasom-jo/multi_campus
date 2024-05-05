import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuDrawer from './MenuDrawer';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import styled from 'styled-components';
const Header = () => {
    const {loginUser, login, logout} = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    //햄버거 메뉴아이템을 열고닫는 코드
    const handleDrawerToggle = () => {
        setMenuOpen((prev) => !prev); //기본이 닫힘
    };

    const navigate = useNavigate();
    // 기본메뉴
    const [menus, setMenus] = useState([
        { path: '/signup', label: "회원가입" },
        { path: '/post', label : "게시물" },
        { path: '/search', label : "검색" },
    ]);
    //로그인이 되어있을시 헤더메뉴/ ?는 카카오 로그인관련 코드
    useEffect(() => {
        if (loginUser?.id) { //MenuDrawer에서  children 으로 쓰일예정
            setMenus([
                { path: '/post', label: "게시물" },
                { path: '/search', label: "검색" },
                { path: '/profile', label: "프로필" },
                { path: '/logout', label: "로그아웃" },
            ]);
        } else {
            setMenus([
                { path: '/signup', label: "회원가입" },
                { path: '/post', label: "게시물" },
                { path: '/search', label: "검색" },
            ]);
        }
    }, [loginUser]); //의존성 함수로 사용되며 변경시마다 useEffect 콜백 함수가 실행

    const goToMenu = (path) => {
        navigate(path);
    };

    return (
        <StyledHeader>
            {/* AppBar 상단바 */}
            <AppBar  position="static" color="mainColor" elevation={0} >
                <ToolBar sx={{justifyContent: 'space-between', height:"100px"}}>
                    <IconButton //햄버거 아이콘
                        aria-label="메뉴"
                        color="fontColor"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' }, width: "50px"}}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* //홈버튼에 쓰이는 인스타아이콘 */}
                    <Box sx={{display: { xs:'none',md:'block', cursor: 'pointer'}}}>
                        <InstagramIcon onClick={() => goToMenu('/')}/>
                    </Box>

                    <Box sx={{display: {xs:'none',md:'block'}}}>
                        { //메뉴를 상단바에 화면에 띄어줌
                            menus.map((m, idx) => (
                                <Button
                                    key={idx}
                                    color='fontColor'
                                    onClick={
                                        m.path === '/logout' ? //누른버튼이 로그아웃이라면
                                            () => logout(() => { goToMenu('/') }) //홈으로 돌아오고
                                            :
                                            () => goToMenu(m.path) //아니면 해당 버튼의 주소지로 이동
                                    }
                                >{m.label}</Button>
                            ))
                        }
                    </Box>
                </ToolBar>
            </AppBar>
            {/* 네비게이션바의 메뉴 */}
            <MenuDrawer  menuOpen={menuOpen} handleDrawerToggle={handleDrawerToggle}>
                <List >
                    {
                        menus.map((m, idx) => (
                            <ListItem key={idx} disablePadding>
                                <ListItemButton
                                    sx={{ textAlign: 'center' }}
                                    onClick={
                                        m.path === '/logout' ?
                                            () => logout(() => { goToMenu('/') })
                                        :
                                            () => goToMenu(m.path)
                                    }
                                >
                                    <ListItemText primary={m.label} />
                                    {/* primary 속성은 해당 리스트 아이템의 주요 텍스트를 지정하고, 이를 통해 각 리스트 아이템의 내용을 렌더링 */}
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </MenuDrawer>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`

`

export default Header;