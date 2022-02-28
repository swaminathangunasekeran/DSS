import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import BoltIcon from '@mui/icons-material/Bolt';
import SettingsIcon from '@mui/icons-material/Settings';

const data = [
//   { label: 'Authentication' },
//   { label: 'Database' },
//   { label: 'Storage' },
//   { label: 'Hosting' },
];




const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export default function SideMenu() {
  const [open, setOpen] = React.useState(true);
  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'light',
            primary: { main: '#000' },
            background: { paper: '#FFF' },
          },
        })}
      >
        <Paper className={'sideNav'} elevation={0} sx={{ boxShadow:'0 0 2rem 0 rgb(136 152 170 / 15%)', maxWidth: 400 , marginLeft:3  , minWidth:280  , borderRadius:2}}>
          <FireNav component="nav" disablePadding>
            <ListItemButton component="a" href="#customized-list">
              
              <ListItemText
                sx={{ my: 0 }}
                primary="MaREI DSS"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: '400',
                  letterSpacing: 0,
                  color:"#000"
                }}
              />
            </ListItemButton>
            <Divider />
            <ListItem component="div" disablePadding>
             
              <ListItemButton sx={{ height: 56 }}>
                <ListItemText
                  primary="Home"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                  }}
                />
                <ListItemIcon sx={{ fontSize: 20 }}><HomeIcon fontSize="large"  /></ListItemIcon>
              </ListItemButton>
              
            </ListItem>
            <Divider />
            <Box
              sx={{
                bgcolor: null,
                pb: open ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Report"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 12,
                    lineHeight: '16px',
                  }}
                  sx={{ my: 0 }}
                />
                <ListItemIcon sx={{ fontSize: 20 }}><BoltIcon fontSize="large"  /></ListItemIcon>
              </ListItemButton>
            </Box>
            <Divider />
            <Box
              sx={{
                bgcolor: null,
                pb: open ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Team Report"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 12,
                    lineHeight: '16px',
                  }}
                  sx={{ my: 0 }}
                />
                <ListItemIcon sx={{ fontSize: 20 }}><GroupsIcon fontSize="large"  /></ListItemIcon>
              </ListItemButton>
            </Box>
            <Divider />
            <Box
              sx={{
                bgcolor: null,
                pb: open ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Settings"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontWeight: 'medium',
                    variant: 'body2',
                    fontSize: 12,
                    lineHeight: '16px',
                  }}
                  sx={{ my: 0 }}
                />
                <ListItemIcon sx={{ fontSize: 20 }}><SettingsIcon fontSize="large"  /></ListItemIcon>
              </ListItemButton>
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}