console.log('App.js running!');

let app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: [
        'One',
        'Two'
    ]
}

let template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Options:" : "No options"}</p>
    </div>
);

let user = {
    fname: 'Emily',
    lname: 'Asquith',
    age: 22,
    location: 'Kendal, UK'
};

const getLocation = (user) => user.location && <p>Location: {user.location}</p>;

let userInfoTemplate = (
    <div>
        <h1>{user.fname ? user.fname : 'Anonymous'} {user.lname}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user)}
    </div>
);

let appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);