import { useQuery } from 'react-query';
import { fetchStatus } from 'api/health';
import Header from 'components/Header/Header';
import Layout from 'components/Layout/Layout';
import Footer from 'components/Footer/Footer';

function App(): JSX.Element {
  const { data: healthy } = useQuery('status', fetchStatus);

  return (
    <Layout footer={<Footer />} header={<Header />}>
      <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
    </Layout>
  );
}

export default App;
