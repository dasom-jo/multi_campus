import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
//햄버거 모양  누르면 사이드바가 나오게하는
const MenuDrawer = ({ children, menuOpen, handleDrawerToggle }) => {
    return (
        <nav>
            <Drawer //네비게이션 메뉴 상자
                variant="temporary" //일시적으로 나타나고 사용자가 특정 작업을 수행한 후 자동으로 사라지는 일시적인 Drawer를 만들 때 사용
                anchor="left"
                open={menuOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display:{
                        xs:"block",sm:"none"},
                        "&.MuiDrawer-paper":{
                            boxSizing:'border-box',
                            width:250
                    }
                }}
            >
                <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
                    {/* 내부 항목 */}
                    <Typography variant="h6" sx={{my:2}} >
                        레이아웃 샘플
                    </Typography>
                    <Divider />
                    {children}
                </Box>
            </Drawer>
        </nav>
    );
}

export default MenuDrawer;
