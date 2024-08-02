import SvgColor from 'src/components/svg-color';
import LogoutIcon from '@mui/icons-material/Logout';
// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'projects',
    path: '/project',
    icon: icon('ic_cart'),
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <LogoutIcon />
  },
];

export default navConfig;
