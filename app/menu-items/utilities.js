// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill, Icon123 } from '../../node_modules/@tabler/icons-react';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    Icon123
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        /*{
            id: 'estructura-b',
            title: 'Estructura B11',
            type: 'item',
            url: '/utils/typography',
            icon: icons.Icon123,
            breadcrumbs: false
        },
        {
            id: 'estructura-d',
            title: 'Estructura D01',
            type: 'item',
            url: '/utils/color',
            icon: icons.Icon123,
            breadcrumbs: false
        },
        {
            id: 'estructura-s',
            title: 'Estructura S01',
            type: 'item',
            url: '/utils/shadow',
            icon: icons.Icon123,
            breadcrumbs: false
        },
        {
            id: 'estructura-c',
            title: 'Estructura C01',
            type: 'item',
            url: '/utils/shadow',
            icon: icons.Icon123,
            breadcrumbs: false
        },*/
        {
            id: 'estructura-c2',
            title: 'Estructura C02',
            type: 'item',
            url: '/utils/shadow',
            icon: icons.Icon123,
            breadcrumbs: false
        },
        {
            id: 'estructura-l',
            title: 'Estructura L01',
            type: 'collapse',
            //url: '/utils/shadow',
            icon: icons.Icon123,
            children: [
                {
                    id: 'tabler',
                    title: 'Liquidez Estructural',
                    type: 'item',
                    //url: '/utils/shadow',
                    breadcrumbs: false
                },
            ]
        },
        {
            id: 'icons',
            title: 'Icons',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Tabler Icons',
                    type: 'item',
                    url: '/utils/icons/tablericons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/utils/icons/materialicons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default utilities;
