class Fighter {

    constructor({name, damage, hp, strength, agility}) {
        let _name = name;
        let _damage = damage;
        let _hp = hp;
        let _maxHp = hp;
        let _strength = strength;
        let _agility = agility;
        let wins = 0;
        let losses = 0;

        this.getName = () => _name;
        this.getDamage = () => _damage;
        this.getHealth = () => _hp;
        this.getMaxHealth = () => _maxHp;
        this.getStrength = () => _strength;
        this.getAgility = () => _agility;
        this.getWins = () => wins;
        this.getLosses = () => losses;
        this.dealDamage = (damage) => {
            _hp -= damage
        };
        this.heal = (healPoint) => {
            healPoint + this.getHealth() < this.getMaxHealth() ? _hp += healPoint : _hp = _maxHp;
        };
        this.addWin = () => ++wins;
        this.addLoss = () => ++losses;
        this.logCombatHistory = () => {
            console.log(`Name: ${this.getName()}, Wins : ${this.getWins()}, Losses : ${this.getLosses()}`)
        }
    }

    attack(defender) {
        const maxProbabilityAttack = 100;
        const probabilityAttackFighter = defender.getStrength() + defender.getAgility();
        const resultAttack = Math.ceil(Math.random() * Math.floor(maxProbabilityAttack)) <= probabilityAttackFighter;
        if (resultAttack) {
            defender.dealDamage(this.getDamage());
            console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }
}

function battle(firstFighter, secondFighter) {
    if ((firstFighter.getHealth() && secondFighter.getHealth()) > 0) {
        firstFighter.attack(secondFighter);
        if (secondFighter.getHealth()) {
            secondFighter.attack(firstFighter);
            if (firstFighter.getHealth()) {
                battle(firstFighter, secondFighter)
            } else {
                secondFighter.addWin();
                firstFighter.addLoss();
                console.log(`${secondFighter.getName()} WON!`);
            }
        } else {
            firstFighter.addWin();
            secondFighter.addLoss();
            console.log(`${firstFighter.getName()} WON!`);
        }
    } else if (firstFighter.getHealth <= 0) {
        console.log(`${firstFighter.getName()} is dead and can't fight! Restore HP`);
    } else {
        console.log(`${secondFighter.getName()} is dead and can't fight! Restore HP`);
    }
}


let firsFighter = new Fighter({name: 'Maximus', damage: 50, hp: 100, strength: 20, agility: 20});
let secondFighters = new Fighter({name: 'Titan', damage: 50, hp: 100, strength: 20, agility: 20});


