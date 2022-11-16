import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';
import SizeSelect from './SizeSelect';
import Toolbar from '@mui/material/Toolbar';
const CustomAppBar = () => {
    return <AppBar
        position="fixed"
        style={{zIndex: 1201}}
    >
        <Toolbar
            sx={{
                justifyContent: 'space-between',
            }}>
            <Typography variant="h6" noWrap component="div" sx={{mr: 2}}>
                Performance Test
            </Typography>
            <SizeSelect/>
        </Toolbar>
    </AppBar>
};

export default CustomAppBar;