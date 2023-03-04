// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve('Stuff worked');
//     } else {
//         reject('Error, it broke');
//     }
// });

// promise
//     .then(result => result + '!')
//     .then(result2 => result2 + '?')
//     .then(result3 => {
//         // throw Error;
//         console.log(result3 + '!');
//     })
//     .catch(() => console.log('Error!'))
// ;

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(() => console.log('Error'))
