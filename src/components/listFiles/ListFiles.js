import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List, ListItem, ListItemIcon, ListItemSecondaryAction,ListItemText} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width:'100%',
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    }
}));

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const ListFiles = () => {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <div className={classes.root}>

            <Grid container spacing={1}>
                <Grid item xs={12} md={12}>
                    <div className={classes.demo}>
                        <List >
                            {generate(
                                <>
                                <ListItem>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="download">
                                            <CloudDownloadIcon color="primary"/>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                                <Divider/>
                                </>
                            )}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default ListFiles