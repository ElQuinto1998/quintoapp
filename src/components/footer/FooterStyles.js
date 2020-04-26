import {makeStyles} from "@material-ui/core/styles";

export const useStylesFooter = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250
        },
        "& .MuiSvgIcon-root": {
            fill: 'tan',
            "&:hover": {
                fill: 'tomato',
                fontSize: '1.8rem'
            }
        }
    }
});
