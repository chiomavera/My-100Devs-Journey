//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function TonyHawkCharacter (chName, chSponsor, chMove, specialMove) {
    this.characterName = chName;
    this.stance = chStance;
    this.sponsor = chSponsor;
    this.specialMove = chMove;

    this.taunt = () => console.log(`Don't make me use my ${specialMove}`);

    this.flip = () => console.log(`Haha! ${this.specialMove}`)

    this.grab= () => console.log('Whoow, gd=rab!!!')
}


let Bem = new TonyHawkPro("Below", "High", "Meooowwww", "TATATERE")