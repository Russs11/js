// Классы упражнение

class Enemy {
	health
	constructor(health) {
		this.health = health

	}
	recieveDamage(damage) {
		this.health = this.health - damage;
		console.log(this.health);
	}
	recieveHill(hill){
		this.health += hill
	}
}

class Ork extends Enemy {
	constructor(health) {
		super(health)
	}
	recieveDamage(damage) {
		if (Math.random() > 0.5) {
			this.health = this.health - damage;
		}
		console.log(this.health);
	}

}

class Troll extends Enemy{
	
	constructor(health){
		super(health)
	}

	recieveDamage(damage){
		if (Math.random() > 0.4){
			this.health = this.health - damage
		}
		console.log(this.health);
	}

}

class Sword {
	damage
	constructor(damage) {
		this.damage = damage
	}
	strike(enemy) {
		enemy.recieveDamage(this.damage)
	}
}

class Hill {
	Hill
	constructor(hill){
		this.hill = hill
	}
	hilling(enemy){
		enemy.recieveHill(this.hill)
	}
}

const enemy = new Enemy(10)
const sword = new Sword(3)
const hill = new Hill(2)
const ork = new Ork(10)
const troll = new Troll(20)
sword.strike(enemy)
sword.strike(ork)
sword.strike(ork)
sword.strike(troll)
hill.hilling(enemy)

console.log(troll);