console.log('App.js running!');

let app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer'
}

let template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);

let user = {
    fname: 'Emily',
    lname: 'Asquith',
    age: 22,
    location: 'Kendal, UK'
};

let userInfoTemplate = (
    <div>
        <h1>{user.fname} {user.lname}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

let appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);