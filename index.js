ReactDOM.render(
React.createElement('a', { href: "https://xkcd.com/221/" },
React.createElement('img', { src: "https://imgs.xkcd.com/comics/random_number.png" })
),
document.getElementById('app')
)

// React is a library for creating & updating html elements
// ReactDOM.render() = function that creates and updates the DOM
// createElement creates the javascript elements which describe the element that reactDOM will createElement

const square = React.createElement('div', {
  style: {
    width: '100px',
    height: '100px',
    backgroundColor: 'red',
    margin: '10px',
  }
})
const rectangle = React.createElement('div', {
  style: {
    width: '80px',
    height: '40px',
    backgroundColor: 'pink',
    margin: '5px',
    }
})
const container = React.createElement(
  // The first argument specifies the element's type
  'div',
  // The second argument specifies the element's attributes, or "props"
  { style: { border: '5px solid blue' } },
  // The remaining arguments list the element's children
  square,
  square,
  rectangle
)
ReactDOM.render(container, document.getElementById('app'))


/*
3 properties of a React Element:
  - type: what type of HTML element to use, or custom type
  - props: attributes of element
  - children: elements content - can be string, another react element, or array

React.createElement() function - first 2 arguments are type and props.
remaining arguments are children

Props - generally the same as HTML attributes except a few-
  -className instead of class
  -htmlFor instead of for (on <label> elements)
  -use object with camelCase name instead of a string for style
*/

const style = { display: 'none' }

React.createElement('div', { className: 'field', style: style},
React.createElement('label', { htmlFor: 'name' }, 'Name')
React.createElement('input', { id: 'name' })
)

// Can use React.createElement in any Javascript situation ie loops, if statements, etc


//create a diff. greeting element depending on time of dayOfWeek
var greeting
if (new Date().getHours() < 12) {
  const style =  {color: 'green' }
  greeting = React.createElement('h1', {style}, "good morning!")
}
else {
  const style = {color: 'red'}
  greeting = React.createElement('h1', {style}, "good afternoon!")
}

// cerate an element only if it is weekend
var dayOfWeek = new Date().getDay()
var weekend = null
if (dayOfWeek === 0 || dayOfWeek === 6) {
  weekend = React.createElement('strong', {}, "Hooray! its the weekend")
}

// ReactDOM.render() expects a single element, so wrap in empty div if you want to render multiple
const root = React.createElement('div', {},
  greeting,
  weekend
)

ReactDOM.render(
  root,
  document.getElementById('app')
)
