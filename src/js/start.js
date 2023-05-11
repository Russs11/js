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

class Sword {
	damage
	constructor(damage) {
		this.damage = damage
	}
	strike(enemy) {
		enemy.recieveDamage(this.damage)
	}
}

const enemy = new Enemy(10)
const sword = new Sword(3)
const ork = new Ork(10)
sword.strike(ork)
sword.strike(ork)
sword.strike(ork)
sword.strike(ork)