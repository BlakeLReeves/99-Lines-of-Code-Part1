let friends = ['Kyle', 'Will', 'Jacob', 'Bryant', 'Jp'];
for(let i = 0; i < friends.length; i++) {
    console.log(friends[i] + ':');
    for(let j = 99; j > 2; j--) {
        console.log(j + ' lines of code in the file,' + ' ' + j + ' lines of code;' + ' ' + friends[i] + ' ' + 'strikes one out, clears it all out,' + ' ' + [j - 1] + ' ' + 'lines of code in the file');
    }
    if (j = 2) {
        console.log(j + ' lines of code in the file,' + ' ' + j + ' lines of code;' + ' ' + friends[i] + ' ' + 'strikes one out, clears it all out,' + ' ' + [1] + ' ' + 'line of code in the file');
    }
    if (j = 1) {
        console.log(j + ' line of code in the file,' + ' ' + j + ' line of code;' + ' ' + friends[i] + ' ' + 'strikes one out, clears it all out, no more lines of code in the file');
    }
}