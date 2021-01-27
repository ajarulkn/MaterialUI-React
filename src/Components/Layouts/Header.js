import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from 'material-ui'
import MenuIcon from 'material-ui/Menu'

export default (props) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit">
        <MenuIcon />
      </IconButton>
      <Typography variant="headline" color="inherit">
        Excersie Database
      </Typography>
    </Toolbar>
  </AppBar>
)
