import Location from "./Location";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import ErrorBoundary from "./ErrorBoundary";

function Main() {
  return (
    <section id="section-one">
      <div className="grid">
        <ErrorBoundary errorMessage = {() => <h3> Something went wrong</h3>}>
          <SectionOne />
        </ErrorBoundary>
        <ErrorBoundary errorMessage = {() => <h3>An error occurred ! Reload the page</h3>}>
          <SectionTwo />
        </ErrorBoundary>
        <ErrorBoundary errorMessage = {() => <h3>Something went wrong !An error occurred</h3>}>
          <Location />
        </ErrorBoundary>
      </div>
    </section>
  );
}

export default Main;
