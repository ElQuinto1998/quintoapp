import {makeStyles} from "@material-ui/core/styles";

export const useStylesHeader = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: 'tomato'
    },
    subtitle: {
        color: 'tan',
        marginBottom: '3rem'
    },
    typed: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 1
    }
}));
