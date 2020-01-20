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

    addWin() {
        return this.#wins += 1
    }

    get getLosses() {
        return this.#losses
    }

    addLoss() {
        return this.#losses += 1
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
    }

    heal(healPoint) {
        const condition = healPoint + this.getHealth < this.getMaxHealth;
        condition ? this.#hp += healPoint : this.#hp = this.#maxHp;
        console.log(`Heal TRUE : HP = ${this.#hp}`)
    }


}


function battle(firstFighter, secondFighter) {
    if ((firstFighter.getHealth && secondFighter.getHealth) > 0) {
        firstFighter.attack(secondFighter);
        if (secondFighter.getHealth) {
            secondFighter.attack(firstFighter);
            if (firstFighter.getHealth) {
                battle(firstFighter, secondFighter)
            } else {
                secondFighter.addWin();
                firstFighter.addLoss();
                console.log(`${secondFighter.getName} WON! WINS : ${secondFighter.getWins}`);
            }
        } else {
            firstFighter.addWin();
            secondFighter.addLoss();
            console.log(`${firstFighter.getName} WON! WINS : ${firstFighter.getWins}`);
        }
    } else if (firstFighter.getHealth <= 0) {
        console.log(`${firstFighter.getName} are not ready! Restore HP`);
    } else {
        console.log(`${secondFighter.getName} are not ready! Restore HP`);
    }
}


let firsFighter = new Fighter({name: "Maximus", damage: 50, hp: 100, strength: 20, agility: 20});
let secondFighters = new Fighter({name: "Titan", damage: 50, hp: 100, strength: 20, agility: 20});
battle(firsFighter, secondFighters);


