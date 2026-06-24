let background = document.getElementById('background-texture');

function selectRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}


function generateBackground(lenght) {
    let charList = Array.from('!@#$%?&~*.,/\\/!@#$%?&~*.,/\\/-<>=+')
        .concat(['null', 'home', 'dev', 'bin', 'etc', 'sh', 'bin', 'ls', 'dir', 'rm', '-r', '-f', '-a', '-c', '-f']);
    let p = Array.from(charList);
    let result = '';
    let char = '';
    
    for (let i = 0; i < lenght; i++){
        if (p.length > 0) {
            char = selectRandom(p);
            result += char + ' ';
            let ind = p.indexOf(char);
            p.splice(ind, 1);
        } else {
            console.log('else');
            p = Array.from(charList);
        }
    }
    return result;
}

setInterval(() => { background.innerText = generateBackground(3000) }, 200);