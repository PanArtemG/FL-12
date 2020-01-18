class Fighter {
    #name;
    #damage;
    #hp;
    #strength;
    #agility;
    #wins;
    #losses;

    constructor(fighter) {
        this.#name = fighter.name;
        this.#damage = fighter.damage;
        this.#hp = fighter.hp;
        this.#strength = fighter.strength;
        this.#agility = fighter.agility;
        this.#wins = 0;
        this.#losses = 0;
    }

    get getName() {
        return this.#name
    }

    get getDamage() {
        return this.#damage
    }

    get getHealth() {
        return this.#hp
    }

    set setHealth(hp) {
        console.log(`serHealth ${hp}`);
        return this.#hp = hp
    }

    get getStrength() {
        return this.#strength
    }

    get getAgility() {
        return this.#agility
    }

    get logCombatHistory () {
        console.log(`name: ${this.getName}, wins : ${this.#wins}, losses : ${this.#losses}`)
    }

    attack(defender) {
        const maxProbabilityAttack = 100;
        const probabilityAttackFighter = defender.getStrength + defender.getAgility;
        const resultAttack = Math.ceil(Math.random() * Math.floor(maxProbabilityAttack)) <= probabilityAttackFighter;
        if (resultAttack) {
            defender.dealDamage(this.getDamage);
            console.log(`${this.getName} makes ${this.getDamage} damage to ${defender.getName}`);
        } else {
            console.log(`${this.getName} attack missed`);
        }
    }

    dealDamage(damage) {
        console.log(this);
        return this.#hp -= damage
    }


}


let firsFighter = new Fighter({name: "Maximus", damage: 25, hp: 100, strength: 50, agility: 15});
let secondFighters = new Fighter({name: "Titan", damage: 50, hp: 1000, strength: 25, agility: 25});

let name = firsFighter.getName
// console.log(firsFighter.getHealth);
console.log(name);


console.log(firsFighter.attack(secondFighters));
// console.log(secondFighters.getHealth);