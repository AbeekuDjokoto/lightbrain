import { QueryClient, QueryClientProvider } from 'react-query';
import PropTypes from 'prop-types';

const client = new QueryClient();

const Provider = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

Provider.propTypes = {
  children: PropTypes.node,
};

export default Provider;
