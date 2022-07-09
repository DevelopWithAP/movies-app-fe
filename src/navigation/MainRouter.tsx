import { Routes, Route } from 'react-router-dom';
import MoviesListContainer from 'containers/MoviesListContainer/MoviesListContainer';

import { RoutesKey } from './routes';

const MainRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<MoviesListContainer />} path={RoutesKey.Index} />
      <Route element={<MoviesListContainer />} path={RoutesKey.Movies} />
    </Routes>
  );
};
export default MainRouter;
