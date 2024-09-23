import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'


//Grid 컴포넌트를 사용하면 반응형 디자인을 쉽게 구현할 수 있습니다. 화면 크기에 따라 요소들이 자동으로 배열되고 정렬
// 행(row)과 열(column)을 사용하여 웹 페이지의 요소들을 배치하고 정렬하는 데 사용됩
const Main = ({ children }) => {
    return (
        <Grid
            container
            my={3}
            spacing={1}
            direction="column"
            alignItems="center"
        >
            {children}
        </Grid>
    );
}

export default Main;
