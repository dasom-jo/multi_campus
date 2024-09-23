import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

const MenuDrawer = ({ children, menuOpen, handleDrawerToggle }) => {
  return (
    <nav>
      <Drawer
        variant="temporary"
        anchor="left"
        open={menuOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240
          }
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            메뉴
            {/* 텍스트 스타일 조정 메소드 */}
          </Typography>
          <Divider />
          { children }
        </Box>
      </Drawer>
    </nav>
  );
}

export default MenuDrawer;