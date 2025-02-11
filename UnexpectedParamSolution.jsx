The solution is to move the component that uses `useParams` to be a direct child of a `<Route>` component within the routes definition. This will ensure that the component receives the correct routing context.

Alternatively, if restructuring is impossible, use React Context to pass the route parameters to the component from within the correct route context.  This involves creating a custom context that will hold the route parameters received using the `useParams` hook within the route component.  The component in question will then need to use the `useContext` hook to access the data from the context.

Example using React Context:

```javascript
// RouteComponent.jsx
import { useParams } from 'react-router-dom';
import { RouteParamContext } from './RouteParamContext';

function RouteComponent() {
  let { id } = useParams();
  return (
    <RouteParamContext.Provider value={{ id }}>
      {/* ...rest of the component */}
    </RouteParamContext.Provider>
  );
}

// OtherComponent.jsx
import { useContext } from 'react';
import { RouteParamContext } from './RouteParamContext';

function OtherComponent() {
  const { id } = useContext(RouteParamContext);
  return <div>ID from context: {id}</div>;
}
```