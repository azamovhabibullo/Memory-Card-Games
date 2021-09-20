const container = document.querySelector('#container');
const cards_length = 16;
const cards = [];
const btn = document.querySelector('input');
btn.addEventListener('click', () => {
    location.replace("https://games12.netlify.app")
})
console.log(btn)
let previousShownCard = undefined;

let icons = [
    'air-freshener',
    'palette',
    'mug-hot',
    'book',
    'coins',
    'igloo',
    'cog',
    'life-ring',
]


icons.push(...icons);

for(let i = 0; i < 100;i++){
    const idx1 = Math.floor(Math.random() * icons.length)
    const idx2 = Math.floor(Math.random() * icons.length)


        const temp = icons[idx1];
        icons[idx1] = icons[idx2];
        icons[idx2] = temp;
          
}

for(let i = 0; i < cards_length; i++) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    cardEl.innerHTML = `
        <div class='front'>
         <i class='fas fa-${icons[i]}'></i>
        </div>
        <div class='back'><small>Click me</small></div>
    `
    cardEl.addEventListener('click', () => {
        if (!cardEl.classList.contains('show')) {
         cardEl.classList.add('show')
        }

        if (!previousShownCard) {
         previousShownCard = cardEl
        }else{
            const iconOne = previousShownCard.querySelector('i').classList[1];
            const iconTwo = cardEl.querySelector('i').classList[1];

            if (iconOne !== iconTwo) {
                const temp = previousShownCard;
                setTimeout(() => {
                    temp.classList.remove('show')
                    cardEl.classList.remove('show')
                }, 1000)
            }
            previousShownCard = undefined
        }
   
   
 })


    cards.push(cardEl);
    container.appendChild(cardEl)
}























































