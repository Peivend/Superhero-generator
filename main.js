let superpower = '';
let accident = '';
let superVillain = '';

const superpowerGenerator = () => {
    num = Math.floor(Math.random()*11);
    switch (num) {
        case 1:
            superpower = 'Invisibility';
        break;
        case 2: 
            superpower = 'super-sight';
        break;
        case 3: 
            superpower = 'super strength';
        break;
        case 4:
            superpower ='telekinesis';
        break;
        case 5:
            superpower = 'super-speed';
        break;
        case 6:
            superpower = 'shape-shifting';
        break;
        case 7:
            superpower = 'electric manipulation';
        break;
        case 8:
            superpower = 'time control';
        break;
        case 9:
            superpower = 'fire control';
        break;
        case 10:
            superpower = 'water control';
        break
        default:
            superpower = 'nothing';
        break
    }
}

superpowerGenerator();

console.log(superpower);