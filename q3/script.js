const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/todos/2'
    
]

fetchData(urls)

function fetchData(urls) {
    urls.forEach(url => {
        fetch(url) 
        .then (response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data recieved:',data);
        })
        .catch(error => {
            console.error('there was a  problem',error)
        })
    });
}