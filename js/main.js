const elDoor = document.querySelector('select[name="door"]');
const elSausage = document.querySelector('select[name="sausage"]');
const elStatus = document.querySelector('.status > span');

const run = () => {
    const valueDoor = elDoor.value;
    const valueSausage = elSausage.value;

    if(valueDoor === 'close' && valueSausage === 'take-out') {
        let div = document.createElement('div');
        div.innerHTML = "The door is closed. You cant get sausage.";
        document.body.after(div);
        setTimeout(() => div.remove(), 4000);
        elStatus.innerHTML = 'The door is closed.';
        return;
    } 
    

    if(valueDoor === 'open' && valueSausage === 'take-out') {
        let div = document.createElement('div');
        div.innerHTML = "Enjoy your meal!!!";
        document.body.after(div);
        setTimeout(() => div.remove(), 4000);
        elStatus.innerHTML = "The door is opened. You can take the sausage.";
        return;
    }
    

    if(valueSausage ==='put-back' && valueDoor === 'open') {
        let div = document.createElement('div');
        div.innerHTML = "Close the door please.";
        document.body.after(div);
        setTimeout(() => div.remove(), 4000);
        elStatus.innerHTML = "You can put sausage back to fridge.";
        return;
    }
    if( valueDoor === 'close' &&  valueSausage ==='put-back') {
        let div = document.createElement('div');
        div.innerHTML = "Open the door!!!";
        document.body.after(div);
        setTimeout(() => div.remove(), 4000);
        elStatus.innerHTML = "You can not put sausage back to fridge. The door is closed.";
        return;
    }
}

run();

elDoor.addEventListener('change', run);
elSausage.addEventListener('change', run);