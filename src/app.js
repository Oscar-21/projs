console.log('app.js is running');

var app = {
  title: 'Indecision App',
  subtitle: 'Put you life in the hands of a computer',
};

var template = (
  <div>
    <h1>{app.title}</h1> 
    <p>{app.subtitle}</p>
    <ol>
      <li>one</li>
      <li>two</li>
    </ol>
  </div>
);

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  }
}

var user = {
  name: 'Austin',
  age: '30',
  location: 'Georgia',
};

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1> 
    { user.age && user.age >= 18 && <p>Age {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
