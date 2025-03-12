let superpower = '';
let accident = '';
let superVillain = '';

const superpowerGenerator = () => {
    const num = Math.floor(Math.random()*11);
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

const accidentGenerator = () => {
    const num = Math.floor(Math.random()*11)
    switch (num) {
        case 1:
            accident = 'radioactive slime';
        break;
        case 2:
            accident = 'got bitten by a genetically engineered hamster';
        break;
        case 3:
            accident = 'struck by mystical lightning during a storm';
        break;
        case 4:
            accident = 'exposed to an ancient cursed artifact at a museum';
        break;
        case 5:
            accident = 'survived an alien abduction experiment';
        break;
        case 6:
            accident = 'drank a potion from a mysterious street vendor';
        break;
        case 7:
            accident = 'fell into a portal to another dimension';
        break;
        case 8: 
            accident = 'hit by a rogue meteorite that infused you with cosmic energy';
        break;
        case 9:
            accident = 'swallowed a nanobot prototype that reprogrammed your DNA';
        break;
        case 10:
            accident = 'merged with your evil twin from an alternate timeline';
        break;
        default:
            accident = 'nothing';
        break;
    } 
}

accidentGenerator();

console.log(accident);