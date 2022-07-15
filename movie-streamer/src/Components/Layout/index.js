import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Header from '../Header';

export default function Layout({ searchProps, children }) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Header searchProps={searchProps} />
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                {children}
            </Grid>
        </Grid>
    );
}
