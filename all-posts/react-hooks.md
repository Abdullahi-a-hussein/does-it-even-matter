---
id: '01'
Title: React Hooks
date: '2023-08-10'
description: Explains how to use different react hooks and even build your own react hooks
tags: life, personaldevelopment, psychology
---

## State Hooks
- Lets a component remember  information like user input. To add states to component, use one of the following.
### useState
- declares a state variable that you can update directly
```jsx
const [state, setState] = useState(initialState);

//Example code
import { useState } from 'react';  

  
function MyComponent() {  
const [age, setAge] = useState(28);  
const [name, setName] = useState('Taylor');  
const [todos, setTodos] = useState(() => createTodos());
```

To update what is on the screen, call the `set` function with some next state:
```jsx
function handleClick() {  
setName('Robin');  
}
```

React will store next state and re-render your component with the new values, and update the UI.

#### useState examples
```JSX
// Counter

import {useState} form 'react';

const Counter () => {
	const [counter, setcounter] = useState(0);
	//const handleClick => {
		//setCounter(counter + 1);	
	//}
	return (
		<button onClick={() => setCounter(counter + 1)}>
			You pressed me {counter} times
		</button>
	);
}

//Text Field (string);

const MyInput =() => {
	const [text, setText] = useStat("");
	 const handleChange = (e) =>{
		 setText(e.target.value)
	 };
	 <>
		 <input value={text} onChange={handleChange} />
		 <p> You typed: {text}</p>
		 <button onClick={() => setText("")}>Reset</button>
	 </>
}

//Checkbox

const CheckBox = (){
const [liked, setLiked] = useState(true);

const handleChange = (e) => {
	setLiked(e.target.checked);
}
<>
	<label>
		<input
			type='checkbox'
			checked={liked}
			onChange={handleChange}
			/>
		I Liked this
	</label>
	<p>
		you {liked? 'liked': 'did not like'} this!
	</p>
</>
}

//Form
const Form = () => {
const [name, setName] = useState('');
const [age, setAge] = useState(30);
<>
	<input
		value={name}
		onchange={e=>setName(e.target.value)}
	/>
	<button onClick={() =>setAge(age + 1)}>
	Increment age
	</button>
	<p>Hello, {name}. You are {age}. </p>
</>
}

```


> [!NOTE] Warning
> Calling the set function does not change the current state in the already executing code
> ```JSX
> function handleClick() {  
setName('Robin');  
console.log(name); // Still "Taylor"!  
}




Suppose `age` is `42` 
```JSX
function handleClick() {  
	setAge(age + 1); // setAge(42 + 1)  
	setAge(age + 1); // setAge(42 + 1)  
	setAge(age + 1); // setAge(42 + 1)  
}
```

Once the above function executes `age` is going to be `43` and not `45`. This is because calling the `set` function, the `age` state variable in the already running code. so, each setAge(42+1) call becomes setAge(43);

To solve this problem, instead of previous state pass in an updater function that returns updated value
```JSX
function handleClick() {  
	setAge(a => a + 1); // setAge(42 => 43)  
	setAge(a => a + 1); // setAge(43 => 44)  
	setAge(a => a + 1); // setAge(44 => 45)  
}
```


#### Updating objects and arrays in state
States is considered read-only, so you should replace it rather than mutate your existing objects. 
```JSX
//don't mutate an object in state like this:
form.fristName = 'Taylar';

//instead replace it like this.
setForm({
...from,
firstName: 'Taylor'
})
```

#### Resetting state with a key

You can reset **components's state by passing a different `key` to a component**

```JSX
import { useState } from 'react';

export default function App() {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }

  return (
    <>
      <button onClick={handleReset}>Reset</button>
      <Form key={version} />
    </>
  );
}

function Form() {
  const [name, setName] = useState('Taylor');

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>Hello, {name}.</p>
    </>
  );
}

```

### useReducer
```JSX
const [state, dispatch] = useReducer(reducer, initialArg, init?);
```

Use reducer at the top level of your component to manage its state with a reducer.
```JSX
import { useReducer } from 'react';  

  
function reducer(state, action) {  
// ...  
}  

function MyComponent() {  
const [state, dispatch] = useReducer(reducer, { age: 42 });

//Example code

import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
```

useReducer is very similar to useState but it let's you move your event handler's logic outside your component






## Context Hooks
__context__ lets a component receive infromation from distance parents without passing it as props. 
<span style='color: blue'>useContext</span> reads and subscribes to a context from your component.
```JSX
import {useContext} from 'react';
function Button() {  
const theme = useContext(ThemeContext);  

// ..
}

function MyPage() {  
	return (  
	<ThemeContext.Provider value="dark">  
		<Form />  
	</ThemeContext.Provider>  
	
	);  

}```
#### Parameters
- Somecontext: the context that you've previously created with <span style='color:blue'>createContext</span> 

```JSX

import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}
```



