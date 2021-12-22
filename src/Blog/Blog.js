import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>React</h1>]
            <p>React Hoks
useState is used to hold state of a functional component.by calling useState we can initialize state.It returns 2 value.first one is initial state and another is the function which will update the state
For example :
Const [ time, setTime]=useState(‘’)
useEffect is used to perform side effect of a component.such as load/fetch data,timer or updating the dom.useEffect receive two parameters. One is function and other is dependency.
Though dependency is optional.It is run every render of component.in the dependency we can set props and state as our need.
useContext mange state globally.passing data without passing manually as a props to go several layer down tree from parent to child component.
useRef is used to store multiple value updating without re rendering.It can make record of previous data
useCallback & useMemo is used to performance optimization.It renders only specific component
				Recat js Vs Vue js

React js
Vue js
1.It is a javascript library
1.It is a framework
2.react js is better with runtime
2vue js is better with memory allowcation
3.facebook,twiter use react js
3.adobe,bmw uses vue.js


				Higher order component
Higher order component is a that take a function in a parameter to make new component
For example:
Const NewConponet=higerOrderFunction(currentComponent)
				Props vs State

props
state
1.we can pass props to other component like parent component to child component
1.State is a own object of a component
2.We can not change the props .That means it is readable only
2.We can change one component object multiple time

Component life cycle
Recat component lifecycle depend on 3 part
mount:It loads data via rendering when user goes another link or event click
update:When there are need changes in data using props or state 
Unmount:When user goes one page to another page previous data disappeared it mean the component is removed from the dom
                             		About JSX
JSX is javascript HTML.Function or method of react always return a view.So tags,attribute we use for making views is called JSX.It looks as an html tag.

Mainly when a function return the view JSX converts into javascript.And the difference between JSX and HTML is that we can write javascript expression within jsx but not in the html





</p>
        </div>
    );
};

export default Blog;