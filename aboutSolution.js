```javascript
//pages/aboutSolution.js
import {ErrorBoundary} from 'react-error-boundary';

function About(){
  throw new Error('Something went wrong');
  return(
    <div>About</div>
  );
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default function AboutWithErrorBoundary(){
  return(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <About/>
    </ErrorBoundary>
  );
}
```