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
import {useNavigate} from "react-router-dom"
import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
const Header = () => {
    const {loginUser, login, logout} = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleDrawerToggle = () =>{
        setMenuOpen((prev) => !prev)
    }; //menuOpen값을 사용하지않는이유는 이전상태값을 사용하여 새로운 상태값을 안전하게 계산하기위함
    const navigate = useNavigate();
    const [menus, setMenus] = useState( [
        { path: "/signup", label: "회원가입"},
        { path: "/post", label: "게시물"},
        { path: "/search", label: "검색"},
        // { path: "/profile", label: "프로필"}
    ]);

    useEffect(()=>{
        if(loginUser) { //로그인이 되어있을시 보여줄것
            setMenus( [
                { path: "/post", label: "게시물"},
                { path: "/search", label: "검색"},
                { path: "/profile", label: "프로필"}
            ]);
        }else {
            setMenus( [
                { path: "/signup", label: "회원가입"},
                { path: "/post", label: "게시물"},
                { path: "/search", label: "검색"}
            ]);
        }
    },[loginUser]);

    const goToMenu = (path) =>{
        navigate(path); //path 경로를 나타내는데 사용되는 변수명
    }
    return (
        <>
            <AppBar position="static" color="bgColor" elevation={0}>
                <ToolBar sx={{justifyContent:"space-between"}}>
                <IconButton aria-label="메뉴"
                            color='subcolor1'
                            onClick={handleDrawerToggle}
                            sx={{display:{sm:"none"}}}
                >
                <MenuIcon />
                </IconButton>
                {/*Box :Material-UI에서 제공하는 스타일링된 컴포넌트  */}
                <Box sx={{display:{xs:'none', sm:'block', cursor:'pointer'}}}>
                    <InstagramIcon onClick={()=>goToMenu('/')}  />
                </Box>
                {/* 반응형 웹으로 만들수있음 */}
                <Box sx={{display:{xs:"none",sm:'block'}}}>
                { //key ={idx} 의존재이유는 react에서 배열을 렌저링할때 각요소에 공유한 식별자가필요하기떄문이다
                    menus.map((m, idx) => (
                        <Button
                            key ={idx}
                            color='fontColor'
                            onClick={()=>goToMenu(m.path)}
                            >{m.label}</Button>
                    ))
                    }
                </Box>

                </ToolBar>
            </AppBar>
            {/* MenuDrawer 코드는 사이드봐 또는 네비게이션메뉴를 표시하는 역할 */}
            <MenuDrawer menus={menus} menuOpen={menuOpen} handleDrawerToggle={handleDrawerToggle} >
            <List>
            {
                menus.map((m, idx) => (
                <ListItem key={idx} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}
                                    onClick={()=>goToMenu(m.path)}>
                    <ListItemText primary={m.label} />
                    </ListItemButton>
                </ListItem>
                ))
            }
                </List>
            </MenuDrawer>
        </>
    );
}

export default Header;