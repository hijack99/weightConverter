document.getElementById('output').style.visibility = 'hidden'
document.getElementById('gramsOutput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible'
    let grams = e.target.value;
    document.getElementById('tonsOutput').innerHTML = grams/1000000
    document.getElementById('KgOutput').innerHTML = grams/1000
    document.getElementById('lbOutput').innerHTML = Math.floor(grams/453.59)
});