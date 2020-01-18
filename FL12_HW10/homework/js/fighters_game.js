class Fighter {
    #name;
    #damage;
    #hp;
    #maxHp;
    #strength;
    #agility;
    #wins;
    #losses;

    constructor(fighter) {
        this.#name = fighter.name;
        this.#damage = fighter.damage;
        this.#hp = fighter.hp;
        this.#maxHp = fighter.hp;
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

    get getMaxHealth() {
        return this.#maxHp
    }

    get getStrength() {
        return this.#strength
    }

    get getAgility() {
        return this.#agility
    }

    get getWins() {
        return this.#wins
    }

    get getLosses() {
        return this.#losses
    }

    get logCombatHistory() {
        console.log(`Name: ${this.getName}, Wins : ${this.#wins}, Losses : ${this.#losses}`)
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
        this.#hp -= damage;
        this.#hp <= 0 ? this.#wins++ : null;

        console.log(`dealDamage : ${this.#hp} Wins ${this.#wins}`);
    }

    heal(healPoint) {
        const condition = healPoint + this.getHealth < this.getMaxHealth;
        condition ? this.#hp += healPoint : this.#hp = this.#maxHp;
        console.log(`Heal TRUE : HP = ${this.#hp}`)
    }

    addWin() {
        this.#wins++
    }

    addLoss() {
        this.#losses++
    }
}


let firsFighter = new Fighter({name: "Maximus", damage: 25, hp: 100, strength: 50, agility: 15});
let secondFighters = new Fighter({name: "Titan", damage: 50, hp: 10, strength: 25, agility: 25});

console.log(firsFighter.attack(secondFighters));
// console.log(secondFighters.getHealth);