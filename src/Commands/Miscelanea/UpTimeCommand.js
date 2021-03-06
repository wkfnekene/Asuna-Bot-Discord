module.exports = {
	config: {
		name: 'uptime',
		aliases: ['TimeOn'], 
        description: "",
		category: "Miscelanea"
	},
    run: async (client, message, args) => {
    const { MessageEmbed } = require('discord.js')

    let totalSeconds = bot.uptime / 1000;
    let dias = Math.floor(totalSeconds / 86400);
    let horas = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minuto = Math.floor(totalSeconds / 60);
    let segundo = totalSeconds % 60;

    let uptime = `🗓️ ${dias.toFixed()} dias\n🗓️ ${horas.toFixed()} horas\n🗓️ ${minuto.toFixed()} minutos\n🗓️ ${segundo.toFixed()} segundos`;

    const embed = new MessageEmbed()
    .setTitle(`Tempo de atividade 🕰️`)
    .setThumbnail("https://imgur.com/WZMylbw.gif")
    .setColor("RANDOM")
    .setDescription(`**Estou online há:**\n${uptime}`)

    message.channel.send(embed);
  }
}