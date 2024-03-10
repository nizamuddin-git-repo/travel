

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

        e.target.parentNode.parentNode.style.backgroundColor = 'gray';

        li.appendChild(p);
        li.appendChild(p2);

        const budget = document.getElementById('budget').innerText;
        const convertedBudget = parseInt(budget);

        if (convertedBudget - parseInt(price)<0){
            alert('low budget please earn more')
            return;
        }

        document.getElementById('budget').innerText = convertedBudget - parseInt(price);






        selectedContainer.appendChild(li);



        totalCost('total-cost', parseInt(price));
        
  
        
        grandTotalCost('grand-total', parseInt(price))
        

        setInnerText('card-count', count);


    });
}


function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}


    function totalCost (id, value){
        const totalCost = document.getElementById(id).innerText;
        const convertedTotalCost = parseInt(totalCost);
        const sum = convertedTotalCost + parseInt(value);
        setInnerText('total-cost', sum);
        
    }
    
    function grandTotalCost(category) {

        const totalCost = document.getElementById('total-cost').innerText;
        const convertedTotalCost = parseInt(totalCost);

        if (category === 'bus'){
            setInnerText('grand-total', convertedTotalCost + 100);
        }
        else if (category === 'trin'){
            setInnerText('grand-total', convertedTotalCost - 200);
        }
        else if (category === 'flight'){
            setInnerText('grand-total', convertedTotalCost + 500);
        }
        else{
            setInnerText('grand-total', convertedTotalCost);
        }
    }
    
