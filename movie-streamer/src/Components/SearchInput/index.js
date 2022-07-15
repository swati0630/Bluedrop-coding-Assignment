import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

export default function SearchInput(props) {
    return (
        <TextField
            id="seach-input"
            placeholder="Search Movie"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            {...props}
        />
    );
}
