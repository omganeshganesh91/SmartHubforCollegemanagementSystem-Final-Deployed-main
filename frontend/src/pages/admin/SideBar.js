import * as React from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ReportIcon from '@mui/icons-material/Report';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { BorderAllRounded } from '@mui/icons-material';

const SideBar = () => {
    const location = useLocation();

    const sidebarStyle = {
        backgroundColor: '#000001',
        color: '#fff',
        height: '88vh',
        borderRadius: '10px',
    };

    // const iconStyle = (active) => ({
    //     color: active ? '#1E90FF' : '#fff',
    // });
    return (
        <>
            <div style={sidebarStyle}>
                <React.Fragment>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            {/* <HomeIcon color={location.pathname === ("/" || "/Admin/dashboard") ? 'primary' : 'inherit'} /> */}
                            <ListItemIcon sx={{ color: location.pathname === "/" || location.pathname === "/Admin/dashboard" ? 'primary.main' : '#fff' }}>
                                <HomeIcon />
                            </ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/Admin/classes">
                        <ListItemIcon  >

                            {/* <ClassOutlinedIcon color={location.pathname.startsWith('/Admin/classes') ? 'primary' : 'inherit'} /> */}
                            <ListItemIcon sx={{ color: location.pathname.startsWith('/Admin/classes') ? 'primary.main' : '#fff' }}>
                                <ClassOutlinedIcon />
                            </ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary="Classes" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/Admin/subjects">
                        <ListItemIcon>
                            {/* <AssignmentIcon color={location.pathname.startsWith("/Admin/subjects") ? 'primary' : 'inherit'} /> */}
                            <ListItemIcon sx={{color: location.pathname.startsWith('/Admin/subjects') ? 'primary.main' : '#fff' }}>
                                <AssignmentIcon  />
                            </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Subjects" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/Admin/teachers">
                        <ListItemIcon>
                            {/* <SupervisorAccountOutlinedIcon color={location.pathname.startsWith("/Admin/teachers") ? 'primary' : 'inherit'} /> */}
                            <ListItemIcon sx={{ color: location.pathname.startsWith('/Admin/teachers') ? 'primary.main' : '#fff'}}>
                                <SupervisorAccountOutlinedIcon />
                            </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Teachers" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/Admin/students">
                        <ListItemIcon>
                            {/* <PersonOutlineIcon color={location.pathname.startsWith("/Admin/students") ? 'primary' : 'inherit'} /> */}
                            <ListItemIcon sx={{ color: location.pathname.startsWith('/Admin/students') ? 'primary.main' : '#fff'}}>
                                <PersonOutlineIcon  />
                            </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Students" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/Admin/notices">
                        <ListItemIcon>
                            {/* <AnnouncementOutlinedIcon color={location.pathname.startsWith("/Admin/notices") ? 'primary' : 'inherit'} /> */}
                            <ListItemIcon sx={{ color: location.pathname.startsWith('/Admin/notices') ? 'primary.main' : '#fff' }}>
                                <AnnouncementOutlinedIcon/>
                            </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Notices" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/Admin/complains">
                        <ListItemIcon>
                            {/* <ReportIcon color={location.pathname.startsWith("/Admin/complains") ? 'primary' : 'inherit'} /> */}
                            <ListItemIcon sx={{ color: location.pathname.startsWith('/Admin/complains') ? 'primary.main' : '#fff' }}>
                                <ReportIcon  />
                            </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Complaint" />
                    </ListItemButton>

                </React.Fragment>
                <Divider sx={{ my: 1 }} />
                <React.Fragment>
                    {/* <ListSubheader component="div" inset>
                        User
                    </ListSubheader> */}
                    <ListItemButton component={Link} to="/Admin/profile">
                        <ListItemIcon>
                            {/* <AccountCircleOutlinedIcon color={location.pathname.startsWith("/Admin/profile") ? 'primary' : 'inherit'} /> */}
                            <ListItemIcon sx={{ color: location.pathname.startsWith('/Admin/profile') ? 'primary.main' : '#fff' }}>
                                <AccountCircleOutlinedIcon  />
                            </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/logout">
                        <ListItemIcon>
                            {/* <ExitToAppIcon color={location.pathname.startsWith("/logout") ? 'primary' : 'inherit'} /> */}
                            <ListItemIcon sx={{ color: location.pathname.startsWith('/logout') ? 'primary.main' : '#fff' }}>
                                <ExitToAppIcon  />
                            </ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </React.Fragment>
            </div>
        </>
    )
}

export default SideBar
