const a = prompt('Your text:', 'get your text');
const bottom = document.querySelector('.button');
const bottomD = document.querySelector('.button-delete');
const text = document.querySelector('.text');
bottom.addEventListener(`click`, function onClickCreate(){
    return new Promise(function(resolve){
            console.log(resolve);
        })
        .then(
            setTimeout(function getText(){
            text.innerText = `${a}`;
            }, 5000)
        )
        .catch(
            bottomD.addEventListener(`click`, function onClickDelete(){
                clearTimeout(getText);
                text.innerText = ``;
                alert('Your text has been deleted');
            }
        ))

})
    






/*const a = prompt('Your text');
const bottom = document.querySelector('button');
const callback = () => {a};
const text = document.querySelector('text');
Element.innerText = `${a}`;
function getMessage(massage){
    return new Promise(function(resolve){
        console.log(resolve);
    })
    .then(
        setTimeout(() => {
            bottom.addEventListener(`click`, callback);
            }, 2000)
    )
    .catch(

    )
}*/




