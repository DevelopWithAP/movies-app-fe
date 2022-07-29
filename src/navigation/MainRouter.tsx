import { Routes, Route } from 'react-router-dom';
import MoviesListContainer from 'containers/MoviesListContainer/MoviesListContainer';
import MovieInfoContainer from 'containers/MovieInfoContainer/MovieInfoContainer';

import { RoutesKey } from './routes';

const MainRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<MoviesListContainer />} path={RoutesKey.Index} />
      <Route element={<MoviesListContainer />} path={RoutesKey.Movies} />
      <Route element={<MovieInfoContainer />} path={RoutesKey.Movie} />
    </Routes>
  );
};
export default MainRouter;
