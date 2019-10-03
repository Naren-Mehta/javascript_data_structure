

const nemo = ['nemo'];

const everyone = ['naren', 'singh', 'mehta', 'deepak', 'megha', 'ram', 'nemo'];

const large = new Array(100000).fill('nemo');

function findNemo(array) {
    let t0 = Date.now()
    for (let i = 0; i < array.length; i++) {

        if (array[i] == 'nemo') {
            console.log('Found Nemo!');
        }
    }
    let t1 = Date.now();
    console.log('Call to find nemo ' + (t1 - t0) + ' miliseconds')

}

findNemo(large);