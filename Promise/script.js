var promise1 = new Promise(resolve => setTimeout(() => resolve(16), 1000));
var promise2 = new Promise(resolve => setTimeout(() => resolve(29), 1000));

Promise.all([promise1, promise2])
    .then(values => {
        var sum = values.reduce((total, num) => total + num);
        console.log(sum);
    })
    .catch(err => console.error(err));






Promise.all([Promise.resolve(16), Promise.resolve(29)])
    .then(values => {
        var sum = values.reduce((total, sum) => total + sum);
        console.log(sum);
    })
    .catch(err => console.error(err));