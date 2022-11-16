
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TestIcon from '@mui/icons-material/Speed';
import SwapIcon from '@mui/icons-material/SwapHoriz';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const drawerWidth = 240;

export default function SideNav({ children, toggleMode, mode }) {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState("");

    const handleTestClick = (index) => {
        setSelectedIndex(index);
        navigate(`/Test${index}`);
    }

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>
                <ListItem key="1" disablePadding>
                    <ListItemButton onClick={toggleMode}>
                        <ListItemIcon>
                            <SwapIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Change mode"} secondary={mode} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                {
                    [1, 2, 3].map((index) => <ListItemTest
                            key={`Test${index}`}
                            id={index}
                            selectedIndex={selectedIndex}
                            handleTestClick={handleTestClick} />
                    )

                }
            </List>
        </Drawer>
    );
};

const ListItemTest = ({ id, selectedIndex, handleTestClick }) => (
    <ListItem
        disablePadding
        selected={selectedIndex === id}>
        <ListItemButton onClick={() => handleTestClick(id)}>
            <ListItemIcon>
                <TestIcon />
            </ListItemIcon>
            <ListItemText primary={`Test${id}`} />
        </ListItemButton>
    </ListItem>
);