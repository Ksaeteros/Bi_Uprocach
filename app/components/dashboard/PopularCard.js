import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { CardContent, Typography, Box } from '@mui/material';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import PropTypes from 'prop-types';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const PopularCard = ({ isLoading }) => {
  const theme = useTheme();
  const [showIframe, setShowIframe] = useState(true); // Mostrar el iframe por defecto

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          {showIframe && (
            <iframe
              width="100%"
              height="800"
              src="https://app.powerbi.com/view?r=eyJrIjoiYTUxZDI5MWEtNjY5ZS00ZTc2LWEyYjItZjA0YTUyOGI1ZmU4IiwidCI6ImMwNWUxMWU1LTcwNmMtNGNlZi1iYTVlLTE4ZWVkYmYxMDAzNyJ9&isMobile=true&uid=qunlq"
              style={{ border: 0 }}
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
            />
          )}
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool
};

export default PopularCard;