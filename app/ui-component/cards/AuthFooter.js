// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://uprocach.net/" target="_blank" underline="hover">
            Uprocach
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://www.espoch.edu.ec/" target="_blank" underline="hover">
            &copy; ESPOCH
        </Typography>
    </Stack>
);

export default AuthFooter;
