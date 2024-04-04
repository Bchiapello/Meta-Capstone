Componentes Funcionales
------
    * Es una fn que retona un elemento JSX.
    * Comienza con Mayuscula.
    * Puede recibir props
	* Los props se pueden enviar de padre a hijo y NO de hijo a padre.

function Saludo(props) {
	return <h1>Hola, {props.nombre}!</h1>
}


Componentes de Clase
------
	* Es una clase de ES6, y retorna un JSX
	*Debe extender de React.Component
	*Debe tener un metodo render para retornar el elemento JSX.
	*Puede recibir props
	*Tenemos que usasr .this
	*Trabajaban con Estados

class Saludo extends React.Component {
	render() {
		return <h1>Hola, {this.props.nombre}!</h1>
	}
}



Estado
----
	Es el conjunto de propiedades del componente + sus valores.




Event Listener
-----
Funcion que se ejecuta cuando ocurre un evento en particular


JSX
---
	HTML + CSS + JS



React DOM
---
Paquete que facilita la interaccion y actualizacion del DOM en aplicaciones React.


Atributos
---
Html -> class=""
JSX -> className=""

HTML -> for="" 
JSX -> htmlFor=""

CSS -> background-image:""
JSX -> backgroundImage=""

Ejemplo
const estiloDiv ={
	backgroundColor: 'black'
}

<div style={estiloDiv}>Hola Mundo!</div>


Alternativa:
Sin usar constantes agregando directamente.

<div style={{color: black}}>Hola Mundo!</div>

	{} Insertar JS
	{interna} Objeto JS


Renderizar Componentes
-----

//Paquete inicial de React
import ReactDOM from 'react-dom';
ReactDOM = va a ser la variable que vamos a usar para acceder a ese paquete luego.


<div id="root"></div>

const elemento = <h1>Hola mundo!!</h1>;



ReactDOM.render(
	elemento,//elemento a mostrar
	document.getElementById('root')//donde mostrar el elemento
)

ReactDOM.render(elemento,document.getElementById('root'))




Incluir JS en JSX
---
{JS}

	Incluir variables en un string
let adjetivo ="interesante";
<p>React es {adjetivo}</p>

	Incluir calculos matematicos
<p>Resultado = {5*6}</p>

	Agregar metodos
<p>Su nombre es {nombre.toUpperCase}</p>






Crear una aplicacion React

1) Abrir el terminal ctrl + ñ

2) npm uninstall -g create-react-app
	npm install -g create-react-app
	npx create-react-app nueva-carpeta 

	npx create-react-app .   // carpeta actual

3) npm start http://localhost:3000/



React Basics 
----


Uso de imagenes
---
//Se usa require para adquirir la foto 
	<img src={require('../img/1.png')}/>


//Tambien se puede importar una imagen dando un nombre de variable, para luego usarla en nuestro src='freecclogo'
import freeCCLogo from './img/logo.png'

function App() {
  return (
    <div className="App">
      <img src={freeCCLogo}/>
    </div> );}


//URL desde la web, guardando la url en una variable, para luego utilizarla

function App() {
const UrlImagenRandom = "htttp://img.com/123.jpg"

  return (
    <div className="App">
      <img src={UrlImagenRandom}/>
    </div> );}




Uso de Videos
---

Descargar e instalar un paquete para manejar los videos de las redes
https://www.npmjs.com/package/react-player

1) npm install react-player
2) 
import React from "react";
import ReactPlayer from "react-player/youtube"; // ".../youtube si solo quieres usar YT , sino react-player solo"

const MyVideo = () => {
	return (
		<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
	);
};

const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

export default App;





Componentes
----
Utilizar y Crear Componentes
----
1)//Una vez que desarrollamos nuestro componente en un JS por separado, luego lo agregamos en App.js, que nos permitira verlo en nuestra web ppal.

Exportacion default // solo podemos exportar 1 funcion-
2)//En el archivo donde creamos el componente debemos permitir exportarlo
export default Testimonio;

Importacion default
3)//Para poder usar este componente, tambien debemos importarlo
import Testimonio from './componentes/Testimonio.css';
//import NombreComponente './direccion';



Exportacion Nombrada// solo podemos exportar varias funciones-
2)//En el archivo donde creamos el componente debemos exportarlo desde la fn
export function Testimonio(){...}

Importacion nombrada
3)//Para poder usar este componente, tambien debemos importarlo
import {Testimonio} from './componentes/Testimonio.css';
//import NombreComponente './direccion';

Dentro de el archivo del componente que creamos, en este caso Testimonio.js, vamos a marcar en nuestra funcion mediante plantillas literales, que objetos queremos que se vayan actualizando o cambiando.

En cambio en APP.js ;
	Vamos a pasar esos props.nombre props.parametro 
	dentro del html que va a cambiar


function App() {
	return (
		<div>
			//<Testimonio nombre=' ..' 	pais='..'/>
		</div>
	)}




Asignar clases segun un condicional
---
<button className={esBotonDeClick? 'boton-clic': 'boton-reiniciar'}></button>


Otro ejemplo, asignar mediante una funcion una clase o null (no hacer nada)
---
//<div className={`boton-contenedor ${esOperador(props.children) ? 'operador': ''`}.trimEnd()}></div>

//trimEnd va a sacar el espacio en blanco que deja en caso de ser negaivo el resultado.
 const pais = 'Arg'


const ejemplo = (
	{sesion === true ?
	<h1>iniciaste sesion</h1>
	: 
	<div>
		<h1>No iniciaste sesion</h1>
		{pais && <p>Tu eres de: {pais} </p>} 

		//RENDERIZADO CONDICIONAL: En este caso usamos el && para saber si la variable esta o no en blanco, solo si tiene un valor agregado , va a cumplirse la condicion y avanzar 

	</div>
}
)

Asignar estilos mediante unas const
----

function Footer(){
	const footStyle = {
		backgroundColor: "black",
		marginLeft: "10px",
	}

	return (
		<footer
			style={footStyle}>
			<h1>..</h1>
		</footer>
	)
}


Function expression:
---
const getRandomNum = function() {
	return Math.floor(Math.random() * 10) + 1
};
 //Almacenamos una funcion anonima dentro de una constante.

Function declaration:
---
function getRandomNum() {
	return Math.floor(Math.random() *10) + 1
};

//Creamos una fn con nombre, para luego ejecutar.


Refresh try--catch
---
try {
	(5).toUpperCase();
} 
catch(e) {
	console.log(`Oops, you can't uppercase a number,e`);
}



Event Handlers 
---
function Boton(){
	const queHacerCuandoClic =
		() => c.log('hi');

	return (
		<button onClick={queHacerCuandoClic}
		> Click Me </button>
	)
}
//onMouseOver ... 




Props vs States
---

Props:
	Es la informacion que reciben los childrens que no puede ser modificada por estos.

States:
	Pertenecen a los objetos en si (a los childrens) y pueden ser modificados.
	


PROPS
---

//En App
import {Component} from './ccc/ccc.jsx'

export default App () {
	return (
		<>
			<Component propNormal='2'>
				<h1>Hola Mundo</h1>
			</Component>
		</>
	)
}

//En Component
export function Component ({children, propNormal= 'tambien se puede agregar valor por defecto'}){
	<>
		<p>{propNormal}</p> // En este caso va a utilizar los datos props pasados en la app principal o nodo padre.


		<p>{children}</p> // Y si pasamos children, va a utilizar los elementos que esten DENTRO del componente en el elemento padre (todo lo que este dentro de los tags, por fuera de los props nomrmales.)
	</>
}


---
Otro ejemplo de children

//En App
...
	<Boton> 1 </Boton>

//En Boton.jsx

function Boton(props) {

	const analizarChild = valor =>
	return isNaN(valor);

	return (
		<div className={${analizarChild(props.children)? 'claseA' : null }}>

		{children}
		</div>
	)
}

En este caso, dentro de las "props" viene incluido el valor CHILDREN, el cual va a tomar el valor de 1, ya que es lo que posee en APP.

// Analisis de clase
Para analizar si asignamos o no una clase al div, encerramos en {} una funcion, que tome al child como parametro y lo analice.




HOOKS 
---> nos permite agregar estados a los componentes funcionales.


import { useState } from 'react';

export default function InputComponent() { 
	//el input arranca con Hello.. 
  const [inputText, setText] = useState('hello'); 
	//cuando suceda un cambio, el input se va a actualizar en la variable
  function handleChange(e) { 
    setText(e.target.value); } 

  return ( 
    //value arranca con Hello //Cuando cambie algo, se ejecuta la segunda opc
		<><input value={inputText} onChange={handleChange} />
		<p>You typed: {inputText}</p>
		<button onClick={() => setText('hello')}> Reset</button></>
  ); 
} 


 //useState Basics
 
 function App(){
 
	const [score, setScore] = useState('0');

	return(
		...
		<input
		type='range'
		value={score}
		onChange={(e => setScore(e.target.value))}
		/>
	)
}

//1ro La constantante declara un nombre y una funcion para modificarla/actualizarla setName , y el useState, le brinda un valor inicial.

//2do En el onChange dentro del input, va a tomar el evento, es decir , lo que esta sucediendo o cambiando, y lo va a actualizar a setScore con lo que estemos ingresando en el value.


------
REACT ICONS
-----
1) npm install react-icons --save
2) import { nombreDelIcono } from "react-icons/vsc";
3) <nombreDelIcono /> //usar donde se necesite


Fragmentos
---
<></>

Prevent Default
------
e.preventDefault();
Con esta funcion podremos evitar la recarga automatica de toda la pagina cuando enviamos (por ej) un formulario



UUID
----
Genera un identificador unico 
	1) npm install uuid // instalar
	2) import {v4 as uuidv4} from 'uuid';  // importar
	3) uuidv4();  //utilizar



	
FETCH
----

<button onClick={()=> {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data=> console.log(data))
		.catch(error=> console.error(error))
}}/>


React Router
---

1) npm i react-router-dom@6 //install
2)  import {BrowserRouter} from 'react-router-dom' // import on INDEX
3) <BrowserRouter>
<App />
</BrowserRouter>   // ON INDEX.js Place APP in between browser router tags
4) import {Routes, Route, Link} from 'react-router-dom' // import on APP.js
5) 

function App(){
	return(
<div>
	<nav>
		<Link to='/'>HomePage</Link>
		<Link to='/about-me'>About Me</Link>
	</nav>
	<Routes>
		<Route path='/' element={<HomepageComponente/>} />
		<Route path='/about-me' element={<AboutMeComponente/>} />
	</Routes>
</div>
)}

//En la APP principal, se reemplazan las tags 'a' por <Link> dentro del NAV y luego, por separado, dentro de ROUTES se agregan inidividualmente las ROUTE.
<nav>
	<Link></Link>
</nav>

<Routes>
	<Route></Route>
</Routes>



//Extraer el valor de un input simple "uncontrolled"


const Form = () => { 
	const inputRef = useRef(null); 
 
	const handleSubmit = () => { 
		const inputValue = inputRef.current.value; 
		// Do something with the value 
	} 
	return ( 
		<form onSubmit={handleSubmit}> 
			<input ref={inputRef} type="text" /> 
		</form> 
	); 
 }; 
 
 
 //La diferencia entre inputs controlados y no-controlados, es que en los "no"-controlados, recien cuando ejecutemos una fn como submit, va a registrar los cambios.
 
 //Pero en los controlados, cada cambio por ejemplo teclear cada letra a la vez, va a ser registrado por el evento actualizando toda la funcion y el vDOM de ser necesario
 
 //Extraer el valor de un input simple "controlled"
 
 const Form = () => { 
	const [value, setValue] = useState(""); 
 
	const handleChange = (e) => { 
		setValue(e.target.value) 
	} 
 
	return ( 
		<form> 
			<input 
				value={value} 
				onChange={handleChange} 
				type="text" 
			/> 
		</form> 
	); 
 }; 
 
 
 
 ----
 useState Hooks

 import { useState } from "react"; 
 
export default function App() { 
  const [greeting, setGreeting] = useState({ greet: "Hello, World" }); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    const newGreeting = {...greeting}; 
    newGreeting.greet = "Hello, World-Wide Web"; 
    setGreeting(newGreeting); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 


// Creamos una nueva variable de greeting -> newGreeting , para evitar un error de actualizar los datos de la 1er const (greeting.greet). En otras palabras, copiamos el objeto entero, actualizamos lo que sea que tenemos que actualizar, y luego con setGreeting damos el paramoetro del NUEVO objeto (newGreeting). 


// Para reiterar, la forma correcta de trabajar con el estado cuando se guarda como un objeto es

// Copiar el antiguo objeto de estado utilizando el operador spread (...) y guardarlo en una nueva variable y

// Pasar la nueva variable a la función de actualización del estado



export default function App() { 
  const [greeting, setGreeting] = useState( 
    { 
        greet: "Hello", 
        place: "World" 
    } 
  ); 
  console.log(greeting, setGreeting); 
 
  function updateGreeting() { 
    setGreeting(prevState => { 
        return {...prevState, place: "World-Wide Web"} 
    }); 
  } 
 
  return ( 
    <div> 
      <h1>{greeting.greet}, {greeting.place}</h1> 
      <button onClick={updateGreeting}>Update greeting</button> 
    </div> 
  ); 
} 

// En este caso usamos PREVSTATE ya que nos permite mantener los valores del objeto intactos y actualizar solo uno (o mas) de ellos 
//Este caso se utiliza cuando queremos actualizar un objeto que tenga mas de 1 elemento, prevState conservará sin modificaciones los elementos y luego indicaremos el elemento que SI queremos modificar como 2do parametro 








---


import React from "react";

function GoalForm(props) {
	const [formData, setFormData] = React.useState ({goal: "", by: ""});

function changeHandler(e){
	setFormData({...formData, [e.target.name]: e.target.value});}
	//De esta manera cuando el cliente ingresa un "goal" lo va a guardar como goal O cuando ingreso un "by" lo guardara como "by". Es decir, lo asignamos a los 2 input y cada uno guardara en su campo segun corresponda.


function submitHandler(e) {       //Cuando enviamos el formulario
	e.preventDefault();									//Va a prevenir que la pagina se cargue toda de nuevo
	props.onAdd(formData);					//
	setFormData({goal: "", by: ""});
};

return (
	<>
		<h1>My little Lemon</h1>
		<form onSubmit={submitHandler}>
			<input type='text' name='goal' placeholder='Goal' value={formData.goal} onChange={changeHandler} />
			<input type='text' name='by' placeholder='By...' value={formData.by} onChange={changeHandler} />
			<button>Submit Goal</button>
		</form>
	</>
	);
}


function listOfGoals(props){
	return (
		<ul>
			{props.allGoals.map((g)=>(
				<li key={g.goal}>
					<span>My goal is to {g.goal}, by {g.by}</span>
				</li>
			))}
		</ul>
	)
}


export default function App(){
	const[allGoals, updateAllGoals] = React.useState([]);

	function addGoal(goal) {
		updateAllGoals([...allGoals, goal]);	}

	return (
		<div className='App'>
			<GoalForm onAdd={addGoal}/>
			<listOfGoals allGoals={allGoals}/>
		</div>
	)
}



 
----
useEffect Hooks


	//Este Hook nos permitira "controlar" que variable, o que estado se actualiza en nuestra renderizacion

	//Ideal para Fetch c.log geolacation

	function Counter(){
		const [mensaje, setMensaje] = useState('hola mundo')
		const [counter, setCounter] = useState(0)

		useEffect(()=>{
			console.log('render');
		}, [ ])

//De esta manera con la dependencia vacia, o el 2do parametro vacio, solo se cargara una vez cuando la pagina renderice por 1ra vez.



		useEffect(()=>{
			console.log('render');
		}, [counter])

//Este useEffect lo que nos permitira es señalar cada "renderizacion" que tiene nuestro sitio.
//Pero al pasar como segundo parametro, por ej el counter, lo unico que tendra en cuenta es cuando actualice ese estado/variable. Por esto se denomina dependencias.

		return (
			<>
			<mensaje/>
			<contador/>
			</>
		)
	}


	-------
useEffect fetch API


import { useState, useEffect } from "react"; 
 
export default function App() { 
  const [btcData, setBtcData] = useState({}); 

  const fetchData = () => { 
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
      .then((response) => response.json()) 
      .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
      .catch((error) => console.log(error)); 
  }; 
 
  useEffect(() => { 
    fetchData(); 
  }, []); 
 
  return Object.keys(user).length > 0 ? (
    <> 
      <h1>Current BTC/USD data</h1> 
      <p>Code: {btcData.code}</p> 
      <p>Symbol: {btcData.symbol}</p> 
      <p>Rate: {btcData.rate}</p> 
      <p>Description: {btcData.description}</p> 
      <p>Rate Float: {btcData.rate_float}</p> 
    </> 
  ); 
} 





 
----
useReducer Hook


import { useReducer } from 'react';


const reducer = (state, action)=>{
	if (action.type === 'buy_ingredients') return { money: state.money - 10};
	if (action.type === 'sell_food') return { money: state.money + 10};
	return state; }

//4) El reducer va a ser la constante que gestiona los "action", es decir, quien maneja los comportamientos del estado.
// Segun el tipo de la action, van a modificar el state. La diferencia con useState, va a ser la fiabilidad de los datos que manejen el mismo estado.
//Por ultimo, nos devuelve el state actualizado .

function App() {
	const initialState = {money: 100};

//1 ) El initialState: nos brinda el punto de partida de la variable que se ira modificando.

	const [state, dispatch] = useReducer(reducer, initialState);

// 2)	El useReducer utiliza 2 parametros:
	// STATE: que va a ser la variable que se modifique y
	//DISPATCH: va a ser la funcion mediante la cual asignamos los tipos a nuestros elementos (ej. buttons), para asignar los comportamientos luego en el REDUCER.


	return (
		<>
			<h1>Wallet: {state.money}</h1>
			<button 	onClick={	()=> dispatch({type:'buy_ingredients'})	}		> Shop Veggies </button>
			<button 	onClick={	()=> dispatch({type:'sell_food'})				}		> Sell food </button>
		</>	); }

// 3) Para realizar cambios en nuestro state, debemos asignar al algun evento los dispatch necesarios, esto nos permitira asignar un type a la operacion.
// Y segun este type luego cambiamos el comportamiento en el REDUCER.






const reducer = (state, action)=>{
	if (action.type === 'buy_ingredients') return { money: state.money - 10};
	if (action.type === 'sell_food') return { money: state.money + 10};
	return state; }

function App() {
	const initialState = {money: 100};
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<h1>Wallet: {state.money}</h1>
			<button 	onClick={	()=> dispatch({type:'buy_ingredients'})	}		> Shop Veggies </button>
			<button 	onClick={	()=> dispatch({type:'sell_food'})				}		> Sell food </button>
		</>	); 
}





 
----
useRef Hook

import { useRef } from 'react';

function App() {

	const miReferencia = useRef(null);
//1) miRef, const que puedes utilizar para almacenar valores y acceder a ellos

	const focusInput = ()=>{ 	miReferencia.current.focus(); }
// 3) Para acceder al valor almacenado en la referencia creada, puedes utilizar la propiedad .current del objeto miRef (miReferencia.current)

	return (
		<>
			<input ref:{miReferencia} type='text'/>
			<button 	onClick={focusInput}	> Focus Input </button>
		</>	); 
}
// 2) asignas al elemento que quieras la prop ref. Esto te permite hacer referencia al elemento y acceder a él utilizando la variable miRef en cualquier otra parte del componente.





----
custom Hooks


---en useConsoleLog.js

import { useEffect } from "react";

function useConsoleLog(varName) {
  useEffect(() => {console.log(varName);}, [varName]);}
//Vamos a crear un hook que tome un parametro y lo muestre en consola, el useEffect se agrega porque es una funcion que al requerir de c.log , requiere de una API externa, y renderizaria siempre si no la configuramos.


export default useConsoleLog;




----en App.js

function App() {
	const [count, setCount] = useState(0);
	useConsoleLog(count);
	
	function increment() {
			setCount(prevCount => prevCount + 1);	}
	
	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={increment}>Plus 1</button>
		</div>
	);
	}
	
	export default App;
//Aparte de un useState comun, invocamos nuestro hook, para que tome el nro que va en el contador, y lo utilice para mostrar en pantalla. Concatenando ambos hooks insieme







function usePrevious(val) {
  const ref = useRef();
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
}





---
React.cloneElement


React.cloneElement(element, [props])

// Clona y devuelve un nuevo elemento.
//Primero el elem a clonar, y 2do que queremos agregar a nuestra copia/clone.

//Sirve para: Modificar children props.
//Agregar children props
//Extender funcionalidad de ch props.



---
React.children


React.children.map(children, callback)
//La fn mas usada, sirve como map de JS , pero aplica la callback a cada children del componente. Y nos devuelve un nuevo elemento





Ejemplo React.cloneElement y React.children 

---
App.js




const Row = ({ children, spacing }) =>{

	const childStyle = {
		marginLeft: `${spacing}px`,
	};
//Determinamos un estilo a aplicar

	return(
		<div className='Row'>
			{React.Children.map(children, (child, index) => {
				return React.cloneElement(child, {
				stlyle: {
					...child.props.style,
					...(index > 0? childStyle:{}),
				}
			});
			})}
		</div>
	);
};

//React.ch.map: va a realizar un recorrido en cada child y va a devolver una copia con .clone
//.clone: va a tomar el child y va a agregar las props que necesitemos.



function LiveOrders() {
	return (
		<div className='App'>
			<Row spacing={32}>
				<p>Pizza Margherita</p>
				<p>2</p>
				<p>$30</p>
				<p>16:30</p>
				<p>John</p>
			</Row>
		</div>
	);
}





---
HOC Components

//Mediante esta funcion, vamos a tomar un componente y lo vamos a actualizar, agregar funciones o extenderlas. 
// Luego de realizarlo nos devolvera una copia en otro componente con sus actualizaciones




const withMousePosition = {WrappedComponent} => {
	return (props) => {
		const [mousePosition, setMousePosition] = useState({x:0, y:0})
	}
}


	useEffect (()=>{

		const handleMousePositionChange = (e) => {
			setMousePosition ({
				x: e.clientX,
				y: e.clientY,
			})
		}	


		window.addEventListener('mousemove', handleMousePositionChange);

		return ()=>{
			window.removeEventListener('mousemove', handleMousePositionChange);
		}
	},[]);


	return <WrappedComponent {...props} mousePosition={mousePosition}/>;
};);




const PanelMouseLogger = ({ mousePosition }) => {
	if (!mousePosition){
		return null;
	}
	return (
		<div className='BasicTracker'>
			<p>Mouse Position:</p>
			<div>
				<span>x: {mousePosition.x}</span>
				<span>y: {mousePosition.y}</span>
			</div>
		</div>
	);
};




const PointMouseLogger = ({ mousePosition }) => {
	if (!mousePosition){
		return null;
	}
	return (
		<p> {mousePosition.x},  {mousePosition.y}</p>
	);
};




const PanelMouseTracker = withMousePosition(PanelMouseLogger)

const PointMouseTracker = withMousePosition(PointMouseLogger)


function App(){
	return (
		<div className='App'>
			<header className='Header'>Little Lemon Restaurant</header>
			<PanelMouseTracker/>
			<PointMouseTracker/>
		</div>
	);
};

export default App;




----
Render Props



const DataFetcher = ({ render, url }) => {
	const [data, setData] = useState([]);

	useEffect{()=> {
		if (url.includes("dessert")) {
			setData(["cake", "tiramisu"])
		} else {
			setData["water", "coke"]
		}
	}, []};

	return render(data);
}

const DessertCount = () => {
	return (
		<DataFetcher
		url="https://littlelemon/desserts"
		render={(data) => <p>{data.length} desserts</p>}
		/>
	);
};


const DrinksCount = () => {
	return (
		<DataFetcher
		url="https://littlelemon/drinks"
		render={(data) => <p>{data.length} drinks</p>}
		/>
	);
};




function App() {
	return (
		<div>
			<header>L L Resto</header>
			<DessertCount/>
			<DrinksCount/>
		</div>
	)
}




---
JEST 
js test runnner


-En app.test.js

import { render, screen } from "@testing-library/react";
import App from "./App";


test ("renders a link point to LL web page", ()=>{
	render (<App/>);

	const linkElement = screen.getByText("LL Restaurant");

	expect(linkElement).toBeInTheDocument();
}
)

// De esta manera vamos a indicar que controle el link que tenemos en nuestra app y nos va a brindar el error en caso que no se cumpla




import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass
    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });

    const textArea = screen.getByLabelText(/Comments:/);
    fireEvent.change(textArea, { target: { value: comment } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass
    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);  


    
    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });
});





Portfolio 


A header with external links to social media accounts and internal links to other sections of the page.
Was the header hidden/shown depending on the scroll direction? Did it happen with a smooth transition animation?


A landing section with an avatar picture, name  and a short bio.


A section to display your featured projects as cards in a grid fashion.  2x2 grid


A contact me section with a form to allow visitors to contact you.







































