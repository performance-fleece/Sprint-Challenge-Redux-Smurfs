1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map, .filter and .concat do not produce side effects. They will return a new array based on whatever function you passed to it.

object.assign creates a new object after copying another object and then allows you to modify the new object.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

An action has a type and sometimes a payload which is sent to the reducer. The Reducer takes this action information and will then update the state according to the action type. The Store is what holds the state itself. In a react system there can be multiple states held within different components but by using redux you can easily receive and update the store using actions and reducers.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component State is when state is held within each component and cannot be shared unless passed explicitly between the components. Application state is provided with Redux and allows access to the store from any component.

Application State is helpful when an application grows larger and simplifies things when having to pass props across multiple components. When a program goes "wide" but you somehow have a component that needs access to the same state information you have to go up the tree to find a common parent which you then have to pass back down through multiple components.

1.  What is middleware?

Middleware allows you to interact with actions before they reach the reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk intercepts the action creator and looks to see what it contains, if it's an action it will forward it normally but if it's a function it will invoke the function. This also gives it access to the dispatch function which is helpful for using async which is useful for us in this project for making API calls.

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect
