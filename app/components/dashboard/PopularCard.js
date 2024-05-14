import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { CardContent, Typography, Box } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';

// types
import PropTypes from 'prop-types';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({ isLoading }) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Box sx={{ mb: 2 }}>
                            <iframe width="100%" height="2000" src="https://app.powerbi.com/view?r=eyJrIjoiYTUxZDI5MWEtNjY5ZS00ZTc2LWEyYjItZjA0YTUyOGI1ZmU4IiwidCI6ImMwNWUxMWU1LTcwNmMtNGNlZi1iYTVlLTE4ZWVkYmYxMDAzNyJ9&isMobile=true&uid=qunlq" frameborder="0" style="border:0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>
                        </Box>
                    </CardContent>
                </MainCard>
            )}
        </>
    );
};

PopularCard.propTypes = {
    isLoading: PropTypes.bool
};

export default PopularCard;
