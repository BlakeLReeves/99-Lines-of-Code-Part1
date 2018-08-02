let friends = ['Kyle', 'Will', 'Jacob', 'Bryant', 'Jp'];
for(let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    for(let j = 99; j > 1; j--) {
        console.log(j + ' lines of code in the file,' + ' ' + j + ' lines of code;' + friends[i] + 'strikes one out, clears it all out, lines of code in the file');
    }
}