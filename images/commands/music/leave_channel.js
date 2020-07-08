const Commando = require('discord.js-commando');

class LeaveChannelCommand extends Commando.Command
{
  constructor(client)
  {
    super(client,{
      name: 'leave',
      group: 'commands',
      memberName: 'leave',
      description: 'leaves the voice channel of the commander'
    });
  }

  async run(message, args)
  {
    if(message.guild.voiceConnection)
    {
      message.guild.voiceConnection.disconnect();
      message.reply("Bye Bye");
    }
    else
    {
      message.reply("I must be in a voice channel to be banished!");
    }
  }
}

module.exports = LeaveChannelCommand
