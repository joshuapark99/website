const Commando = require('discord.js-commando');
const discord = require('discord.js');

class InfoAboutMeCommand extends Commando.Command
{
  constructor(client)
  {
    super(client,{
      name: 'info',
      group: 'commands',
      memberName: 'info',
      description: 'Tells you a little about me'
    });
  }

  async run(message, args)
  {
    var myInfo = new discord.RichEmbed()
      .addField("About ME","Hello, I was made by Joshua Park",true)
      .addField("Side Text","I'm just starting to build this right now so wait a little")
      .setColor(0xFF0000)
      .setThumbnail(message.author.avatarURL)
      .setFooter("Thanks for reading, I hope you learned a little, or a lot about me")

    message.channel.send(myInfo);
  }
}

module.exports = InfoAboutMeCommand
