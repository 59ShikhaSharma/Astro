import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { Button } from "@mui/material";
import deck from "../components/Deck";
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Tarot.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const theme = createTheme({
  palette: {
    meraColor: {
      main: '#060047',
      light: '#B3005E',
      dark: '#E90064',
      contrastText: '#242105',
    },
  },
});

const Tarot = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = useState("");

  const handleClickOpen = (card) => {

    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {

    setSelectedCard("");
    setOpen(false);

  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <div className='tarot-card-container'>
            {deck.map(details => (
              <Button variant="outlined" color="meraColor" onClick={() => handleClickOpen(details)} >
                {/* {details.name} */}
                <img className='tarot-im' src={require(`../${details.image}`)} alt={details.name} />
              </Button>

            ))}
          </div>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}

          >
            <AppBar sx={{ position: 'relative', backgroundColor: 'black' }}>
              <Toolbar>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                  {selectedCard.name}
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  Close
                </Button>
              </Toolbar>
            </AppBar>
            <div className='tarot-img'>
              {selectedCard && <img src={require(`../${selectedCard.image}`)} alt={selectedCard.name} />}
            </div>
            <div className='tarot-content'>
              <p className='tarot-description'><b>Description: </b>{selectedCard.description}</p>
              <p className='tarot-description'><b>Interpretation: </b>{selectedCard.interpretation}</p>
            </div>
          </Dialog>
        </React.Fragment>
      </ThemeProvider>

    </>
  )
}

export default Tarot;

