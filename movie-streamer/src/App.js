import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const MovieList = lazy(() => import("./Modules/MovieList"));
const MovieDetails = lazy(() => import("./Modules/MovieDetails"));

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Typography variant="h2">Loading</Typography>}>
        <Routes>
          <Route path="/" element={<Navigate to="/movie" replace />} />
          <Route index path="/movie" element={<MovieList />} />
          <Route path="/movie/:title" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}
