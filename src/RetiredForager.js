var RetiredForagerBee = function() {

	ForagerBee.call(this);

	this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
 
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  this.forage = 'I am too old, let me play cards instead';
  return this.forage;
}
RetiredForagerBee.prototype.gamble = function(wonTreasures) {
  this.treasureChest.push(wonTreasures);
}







