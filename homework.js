"use strick"
const s = document.querySelector('#input');
const child = document.getElementById('childhour');
const bicycle = document.getElementById('bicyclehour');
const car = document.getElementById('carhour');
const plane = document.getElementById('planehour');


const childfunc = () => {
    let hour = (s.value * 1) / 3.6;
    let min = (hour - Math.floor(hour)) * 60;
    let sec = (min - Math.floor(min)) * 60;
    return child.innerHTML = `${Math.floor(hour)}
    soat ${Math.floor(min)}min ${Math.floor(sec)}sec`;
}
const bicyclefunc = () => {
    let hour = (s.value * 1) / 20.1;
    let min = (hour - Math.floor(hour)) * 60;
    let sec = (min - Math.floor(min)) * 60;
    return bicycle.innerHTML = `${Math.floor(hour)}
    soat ${Math.floor(min)}min ${Math.floor(sec)}sec`;
}
const carfunc = () => {
    let hour = (s.value * 1) / 70;
    let min = (hour - Math.floor(hour)) * 60;
    let sec = (min - Math.floor(min)) * 60;
    return car.innerHTML = `${Math.floor(hour)}
    soat ${Math.floor(min)}min ${Math.floor(sec)}sec`;
}
const planefunc = () => {
    let hour = (s.value * 1) / 800;
    let min = (hour - Math.floor(hour)) * 60;
    let sec = (min - Math.floor(min)) * 60;
    return plane.innerHTML = `${Math.floor(hour)}
    soat ${Math.floor(min)}min ${Math.floor(sec)}sec`;
}