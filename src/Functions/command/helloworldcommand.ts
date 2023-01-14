import {ChatInputCommandInteraction, SlashCommandBuilder} from "discord.js";
import SlashCommand from "../../Structures/SlashCommand";
import Bot from "../../Bot/Bot";

const helloworldcommandBuilder = new SlashCommandBuilder()
    .setName("안녕")
    .setDescription("안녕을 보내는 명령어")

const helloworldcommand = new SlashCommand(helloworldcommandBuilder,async (bot: Bot, interaction: ChatInputCommandInteraction)=>{
    await interaction.reply("ㅎㅇ")
})

export default helloworldcommand;