import { Routes, Route } from 'react-router-dom';
import MoviesListContainer from 'containers/MoviesListContainer/MoviesListContainer';

const MainRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<MoviesListContainer />} path="/" />
      <Route element={<MoviesListContainer />} path="/movies" />
    </Routes>
  );
};
export default MainRouter;
