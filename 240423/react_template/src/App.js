import { Autocomplete, CssBaseline, Grid, TextField, ThemeProvider, createFilterOptions, dividerClasses, AppBar, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react'; // createTheme을 여기에서 사용하지 않으므로 삭제
import { createTheme } from '@mui/material/styles'; // createTheme을 @mui/material/styles에서 가져옴
import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import CampaignIcon from '@mui/icons-material/Campaign';
import Swal from 'sweetalert2'

const theme = createTheme({
  palette: { //색을 정해줌
    primary: {
      main:'#161616'
    },
    jds: {
      main:'#ff9800'
    },
    error:{
      main:'#DA1E28'
    }
  },
  components:{
    MuiCssBaseline:{
      "*" :{
        //css잇어서 굳이 쓰든 안쓰든
      }
    }
  }
})



function App() {



  const top2Films = [
    { title: 'The Godfather', id: 1 },
    { title: 'Pulp Fiction', id: 2 },
  ];

  const top100Films = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];

  const [value, setValue] = useState();

  const filter = createFilterOptions();


  return (
    <ThemeProvider theme={theme}>
    {/* //  xs, extra-small: 0px
    // sm, small: 600px
    // md, medium: 900px
    // lg, large: 1200px
    // xl, extra-large: 1536px */}
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        <div >xs=6 md=8</div>
      </Grid>
      <Grid item xs={6} md={4}>
        <div>xs=6 md=4</div>
      </Grid>
      <Grid item xs={6} md={4}>
        <div>xs=6 md=4</div>
      </Grid>
      <Grid item xs={6} md={8}>
    <div>xs=6 md=8</div>
    </Grid>
  </Grid>
      <CssBaseline>

    <div>

      {/* 버튼들 */}
      <div>
        <AppBar  position="static" color="jds">
          <Toolbar>
            <Typography variant="h6">
              text
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      <div>
        <Button variant="contained" onClick={()=>{
          Swal.fire({
            title: '<h1>에러발생!</h1>',
            // titleText: '<h1>에러발생!</h1>',
            text: '다시 실행해주세요',
            icon: 'success',
            footer:"고객센터번호",
            confirmButtonText: 'Cool'
          })
        }}>Contained 기본버튼</Button>
        <Button variant="outlined">Outlined 기본버튼</Button>
        <Button variant="text">Text기본버튼</Button>
      </div>
      <div>
        <Button >Text기본버튼</Button>
        <Button variant="contained" size="small">작은버튼</Button>
        <Button variant="outlined" size="medium">중간버튼</Button>
        <Button variant="text" size="large">큰버튼</Button>
      </div>
      <div>
        <Button variant="contained" startIcon={ <BrightnessAutoIcon />}>버튼</Button>
        <Button variant="contained" endIcon={<Brightness5Icon/>}>버튼</Button>
        <Button><CampaignIcon/></Button>
      </div>
      <div>
        <Button variant="contained" color = "secondary">기본버튼</Button>
        <Button variant="outlined" color='secondary' >기본버튼</Button>
        <Button variant="contained" color = "primary">기본버튼</Button>
        <Button variant="outlined" color='primary' >기본버튼</Button>
        <Button variant="contained" color = "jds">기본버튼</Button>
        <Button variant="outlined" color='jds' >기본버튼</Button>
      </div>



      <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={top100Films}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="Movie" />}
  />

    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.title);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={top100Films}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Free solo with text demo" />
      )}
      />
    </div>
    </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
