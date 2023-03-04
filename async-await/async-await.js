// Async Await notes

//==== EXAMPLE ONE ====//

// Initial promise approach
movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

// Async await

async function playerStart() {
    const first = await movePlayer(100, 'Left');
    const second = await movePlayer(400, 'Left');
    await movePlayer(10, 'Right');
    await movePlayer(330, 'Left');
}

//==== EXAMPLE TWO ====//

// Initial promise approach

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

// Async await

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);
}

//==== EXAMPLE THREE ====//

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log('users', results[0]);
    console.log('posts', results[1]);
    console.log('albums', results[2]);
}).catch(() => console.log('Error'))

const getData = async () => {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        ));
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (err) {
        console.log('Error', err);
    }
}

