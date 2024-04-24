import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'



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
