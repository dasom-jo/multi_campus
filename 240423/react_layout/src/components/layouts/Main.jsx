import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'



const Main = ({children}) => {
    return (
        <Box sx={{ bgcolor:'mainColor.main'}}>
            <Grid
                container
                spacing={1}
                direction="column"
                justify="center"
                alignItems="center"
                alignContent="center"
                wrap="nowrap"
            >
                {children}
            </Grid>
        </Box>
    );
}

export default Main;