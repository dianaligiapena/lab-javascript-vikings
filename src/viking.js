// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

const Ragnar = new Soldier(100, 1000);
console.log (Ragnar);
  

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super (health, strength);
        this. name = name;
    }

    receiveDamage (damage) {
        this.health -= damage;

        if (this.health > 0) {
            return `"${this.name} has received ${damage} points of damage."`;
        }
        else {
            return `${this.name} has died in act of combat.`;
        }
    }

    battleCry () {
        return `Odin Owns You All!`;
    }

}

const RagnarV = new Viking ('RagnarV', 90, 900);
console.log (RagnarV);
console.log (RagnarV.receiveDamage(40));

// Saxon
class Saxon extends Soldier{


    receiveDamage(damage) {
        this.health -= damage;

        if(this.health>0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else{
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {}
