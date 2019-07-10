import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme?: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.primary.main
        },
        headerTitle: {
            paddingRight: theme.spacing(3)
        }
    })
);

export default useStyles;