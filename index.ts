const token: string = 'NzY4NzUyODU1NDE4Nzk4MTIw.X5FC4w.AMPTFxC1Wm4LHEivSsc_y3HDDuM'
const inviteURL: string = 'https://discord.com/api/oauth2/authorize?client_id=768752855418798120&permissions=535899248&scope=bot'

import {Client, Message, VoiceChannel} from 'discord.js'
import {Formatting} from './formatting'

const client: Client = new Client();

client.once('ready', function () {
    console.log("Ready!")
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

client.login(token);