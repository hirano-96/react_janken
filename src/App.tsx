import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Paper, Stack, ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';


const theme = createTheme({
  palette: {
    primary: {
      light: '#6573c3',
      main: '#3f51b5',
      dark: '#2c387e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5393ff',
      main: '#2979ff',
      dark: '#1c54b2',
      contrastText: '#000',
    },
  },
});




export default function ButtonAppBar() {
  const [result, setResult] = useState("")
  const [choise, setChoise] = useState(0)
  const [npc, setNpc] = useState("")
  const hand = ["未選択", "グー", "チョキ", "パー"]

  const onClick = () => {
    const npcHand = hand[Math.floor(Math.random() * 3) + 1]
    setNpc(npcHand)
    if(hand[choise] === npcHand){
      setResult("あいこ")
    } else if (
      (hand[choise] === "グー" && npcHand === "チョキ") || 
      (hand[choise] === "パー" && npcHand === "グー") ||
      (hand[choise] === "チョキ" && npcHand === "パー") 
    ){
      setResult("あなたの勝ち")
    } else {
      setResult("あなたの負け")
    }
    return
  }
  

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                じゃんけんアプリ
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            mt: 5,
            fontSize: 20
          }}
        >あなたの選択：{hand[choise]}、コンピュータの選択：{npc===""? "未選択":npc}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: "Auto",
              mt: 5,
              width: 128,
              height: 128,
            },
          }}
        >
          <Paper>
            <Button sx={{ m: "auto", width: 128, height: 128, fontSize: 30 }} onClick={() => [setResult(""), setNpc(""), setChoise(1)]}>グー</Button>
          </Paper>
          <Paper>
            <Button sx={{ m: "auto", width: 128, height: 128, fontSize: 30 }} onClick={() => [setResult(""), setNpc(""), setChoise(2)]}>チョキ</Button>
          </Paper>
          <Paper>
            <Button sx={{ m: "auto", width: 128, height: 128, fontSize: 30 }} onClick={() => [setResult(""), setNpc(""), setChoise(3)]}>パー</Button>
          </Paper>
        </Box>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{ m: "auto", mt: 5, width: 100 }}
            size='large'
            onClick={() => onClick()}
          >
            勝負
          </Button>
        </Stack>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: "Auto",
              mt: 5,
              width: 128,
              height: 128,
            },
          }}
        >
          <Paper>
            <Typography sx={{ mt: 5, width: 128, height: 128, fontSize: 30, textAlign: 'center'}} >{npc}</Typography>
          </Paper>
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            mt: 5,
            fontSize: 50
          }}
        >{result}
        </Typography>
      </ThemeProvider>
    </>
  );
}