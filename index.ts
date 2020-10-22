import {Client, Message, VoiceChannel} from 'discord.js'
import {Formatting} from './formatting'
import {Config} from './config'

const token: string = Config.GetToken();

const client: Client = new Client();

client.once('ready', function () {
    console.log("Ready with token " + token)
})

client.on('message', function (message: Message) {
    if (!message.content.startsWith('/') || message.author.bot) return;
    if (message.content === '/mk vc') {
        message.guild.channels.create("PVC " + message.author.username, {
            type: 'voice',
        }).then(function (r: VoiceChannel) {
            message.delete({
                timeout: 2
            })
            message.reply("Created PVC for " + Formatting.Bold() + message.author.username + Formatting.Bold() + " and name is " + Formatting.Bold() + r.name + Formatting.Bold());
        })
    }
})

client.login(token).then(function (r) {
    console.log("Logged In")
});