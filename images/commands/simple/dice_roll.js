const Commando = require('discord.js-commando');

class DiceRollCommand extends Commando.Command
{
  constructor(client)
  {
    super(client,{
      name: 'roll',
      group: 'commands',
      memberName: 'roll',
      description: 'Rolls a 6 sided dice'
    });
  }

  async run(message, args)
  {
    var diceRoll = Math.floor(Math.random() * 6) + 1;
    message.reply("Your dice landed on " + diceRoll);
  }
}

module.exports = DiceRollCommand
