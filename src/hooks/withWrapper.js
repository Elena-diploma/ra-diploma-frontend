import PageHeader from '../components/header/PageHeader';
import PageFooter from '../components/footer/PageFooter';
import Banner from '../components/Banner';

const withWrapper = (Component) => (props) => {
  return (
      <>
        <PageHeader />
        <main className="container">
          <div className="row">
            <div className="col">
              <Banner />
              <Component {...props} />
            </div>
          </div>
        </main>
        <PageFooter />
      </>
  );
};

export default withWrapper;