const elDoor = document.querySelector('select[name="door"]');
const elSausage = document.querySelector('select[name="sausage"]');
const elStatus = document.querySelector('.status > span');

const run = () => {
    const valueDoor = elDoor.value;

    if(valueDoor === 'close') {
        elStatus.innerHTML = "The door is closed.Thank you.";
        return;
    } 
    if(valueDoor === 'open') {
        elStatus.innerHTML = "The door is opened. You can take the sausage.";
        return;
    }
    
    const valueSausage = elSausage.value;

    if(valueSausage ==='take-out') {
        elStatus.innerHTML = "You took the sausage. Close the door please.";
        return;
    }
    if(valueSausage ==='put-back') {
        elStatus.innerHTML = "You put back the sausage. Close the door please.";
        return;
    }
}

run();

elDoor.addEventListener('change', run);
elSausage.addEventListener('change', run);