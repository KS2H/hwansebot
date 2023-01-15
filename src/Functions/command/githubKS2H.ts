import {ChatInputCommandInteraction, EmbedBuilder, SlashCommandBuilder} from "discord.js";
import SlashCommand from "../../Structures/SlashCommand";
import Bot from "../../Bot/Bot";

const githubKS2HcommandBuilder = new SlashCommandBuilder()
    .setName("깃허브")
    .setDescription("깃허브를 띄우는 명령어")

const githubKS2Hcommand = new SlashCommand(githubKS2HcommandBuilder,async (bot: Bot, interaction: ChatInputCommandInteraction)=>{
    const exampleEmbed = new EmbedBuilder()
        .setColor("#aaff00")
        .setTitle('KS2H')
        .setURL('https://github.com/KS2H')
        .setDescription('KS2H님의 깃허브입니다.')
        .setImage('https://cdn.discordapp.com/attachments/1063809829593960544/1064163766310273174/sAAAAASUVORK5CYII.png')
        .setThumbnail('https://cdn.discordapp.com/attachments/1063809829593960544/1064162781412208710/115784029.png')
        .setTimestamp()
        .setFooter({ text: 'I LOVE GITHUB', iconURL: 'https://cdn.discordapp.com/attachments/1063809829593960544/1064162781412208710/115784029.png' });
    await interaction.reply({embeds: [exampleEmbed]});
})
export default githubKS2Hcommand;