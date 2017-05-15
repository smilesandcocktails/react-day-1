class Animal {
  constructor(name, age = 0, health = 100) {
    this.name = name;
    this.age = age;
    this.health = health
  }
  aged() {
    if(this.health <= 0) {
      this.die()
    } else {
      this.age ++
      this.health -= 0.2 * 100
    }
  }
  die() {
    console.log(`${this.name} is dead at age ${this.age}`)
  }
}

export default Animal
