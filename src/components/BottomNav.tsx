import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactNode, useState } from 'react';

type MenuLink = {
  label: string;
  path: string;
  Icon: ReactNode;
};

const menuLinks: MenuLink[] = [
  {
    label: 'Tasks',
    path: '/',
    Icon: <CheckBoxOutlinedIcon />
  },
  {
    label: 'Global challenges',
    path: '/global',
    Icon: <PublicOutlinedIcon />
  },
  { label: 'Statistics', path: '/statistics', Icon: <BarChartIcon /> },
  {
    label: 'Achievements',
    path: '/achievements',
    Icon: <EmojiEventsOutlinedIcon />
  }
];

export function BottomNav() {
  const pathname = useLocation().pathname;
  const [value, setValue] = useState(
    menuLinks.findIndex((link) => link.path === pathname)
  );
  const navigate = useNavigate();

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
      >
        {menuLinks.map(({ label, path, Icon }) => (
          <BottomNavigationAction
            label={label}
            onClick={() => navigate(path)}
            icon={Icon}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
