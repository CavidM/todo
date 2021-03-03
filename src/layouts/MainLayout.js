import PropTypes from 'prop-types';
import AppHeader from '../components/app-header/AppHeader.lazy';

function MainLayout({ children }) {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.object.isRequired
};

export default MainLayout;
