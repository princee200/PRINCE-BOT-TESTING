const config = require('../settings')
const {cmd , commands} = require('../lib/command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *CYBER PRINCE OFC*

> *PRINCE-MD-V1 REPO:*
*|* 🗿soon*

> *SUPPORT CHENNAL:*
*|* *https://whatsapp.com/channel/0029Vb4rsUd1CYoZLmQ8o82R*
> * *SYSTEM SETTING:*
*|* *ᴄʏʙᴇʀ ᴘʀɪɴᴄᴇ ᴏғᴄ*
*|* *94751543731*
*╰──────────────●●►*

> *CREATED BY CYBER PRINCE OFC*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363378381276520@newsletter',
      newsletterName: "CYBER PRINCE OFC",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'CYBER PRINCE OFC',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/error" ,
thumbnailUrl: "https://files.catbox.moe/2hw5lq.jpg)" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
