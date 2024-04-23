import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'



const Main = ({children}) => {
    return (
        <Box sx={{ bgcolor:'mainColor.main'}}>
            <Grid
                container
                spacing={1} //그리드 아이템간의 간격을 설정하는데 사용
                direction="column" //세로
                justify="center" //수평방향 가운데
                alignItems="center" //같은 그리드아이템 세로방향이지만 아이템은 단일줄의 그리드
                alignContent="center" //콘텐츠는 여러줄의 그리드 아이템을 세로로
                wrap="nowrap"
            >
                {children}
            </Grid>
        </Box>
    );
}

export default Main;