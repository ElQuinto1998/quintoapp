import {makeStyles} from "@material-ui/core/styles";

export const useStylesNavbar = makeStyles(theme => ({
    menuContainer: {
        background: '#511',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(12)
    },
    listItem: {
        color: 'tan'
    }
}));
