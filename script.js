//serchinput
//searchbtn

const dictionary = (word) => {
    const option = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '813902af5emshd34d88b188d34dcp1a91bajsn7f61702ab787',
            'X-RapidAPI-Host': ' dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, option)
        .then(response => response.json())
        .then(response =>{

            wordheading.innerHTML ='Meaning of:'+ response.word;
            definition.innerHTML = response.definition.replace('2.','<br>2.').replace('3.','<br>3.').replace('4.','<br>4.');
        } )
        .catch(err => console.error(err));
}

searchbtn.addEventListener('click', (e)=>{
e.preventDefault();
dictionary(searchinput.value)
})