import { Theme } from "@material-ui/core";

export const SecondaryMenuStyles = (theme: Theme) => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    flex: {
        display: 'flex'
    }
});