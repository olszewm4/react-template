import { Theme } from "@material-ui/core";

export const PrimaryMenuStyles = (theme: Theme) => ({
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});