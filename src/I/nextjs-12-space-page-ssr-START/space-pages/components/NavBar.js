import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'

import Link from 'next/link'

export default function NavBar(props) {
  return <AppBar position="static">
    <Toolbar>
      <Link href="/">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Space Agency App
        </Typography>
      </Link>
      <Link href="/about/">
        <Typography variant="h6" component="div" >
          About
        </Typography>
      </Link>
    </Toolbar>
  </AppBar>
}