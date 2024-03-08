

const allbtn = document.getElementsByClassName('add-btn');

let count = 0;

for(const btn of allbtn){
    btn.addEventListener('click', function(e){
        count = count + 1;

        const placeName = e.target.parentNode.parentNode.childNodes[1].innerText;

        const price = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;

        const selectedContainer = document.getElementById('selected-place-container');

        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = placeName;

        const p2 = document.createElement('p');
        p2.innerText = price;

        li.appendChild(p);
        li.appendChild(p2);
        selectedContainer.appendChild(li);


        const totalCost = document.getElementById('total-cost').innerText;

        const convertedTotalCost = parseInt(totalCost);
        const sum = convertedTotalCost + parseInt(price);

        setInnerText('total-cost', sum);
       setInnerText('card-count', count);
    });
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}