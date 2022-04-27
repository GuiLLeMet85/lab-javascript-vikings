


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}


/*###Iteration 0: First test

Let's have a look at the first test case together to get you started.

The first test case says that "_Soldier class >> should receive 2 arguments 
(health & strength)_", so we have to write the correct code to pass this test. 
Let's make the `Soldier` class receive two arguments:


/* Iteration 1: Soldier

*/

class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength; 
  } 


  receiveDamage(damage){
    this.health -= damage;
  }

}


/*
### Iteration 2: Viking
*/

class Viking extends Soldier {

  constructor (name, health, strength) {
    super(health, strength);
    this.name = name;  
  }

  receiveDamage (damage) {

    this.health -= damage;
    if (this.health > 0) {
      return `{this.neam} has received {damage} points of damage`;

    } else {
      return `{this.neam} has died in act of combat`
    }
    return 
  }

  battleCry () {
    return "Odin Owns You All!"
  }


}

/*
### Iteration 3: Saxon
*/


class Saxon extends Soldier {
  constructor (health, strength) {
     super(health, strength);
  }

  receiveDamage (damage) {

    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received {damage} points of damage`;

    } else {
      return `A Saxon has died in combat`
    } 
  }

  battleCry () {
    return "Odin Owns You All!"
  }
 
}

/*
### BONUS - Iteration 4: War
*/


class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };

  addViking(viking) {
    this.vikingArmy.push.Viking;
  }

  addSaxon(saxon) {
    this.saxonArmy.push.saxon;
  }

  vikingAttack (){
    const vikingIndex = Math.floor(Math.random()*this.vikingArmy.length);
    const saxonIndex = Math.floor(Mathr.random()*this.saxonArmy.length);

  }


}
