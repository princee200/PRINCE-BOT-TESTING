/* 
created by CYBER PRINCE
contact me 94751543731
© Copy coder alert ⚠
*/

const config = require('../settings')
const {cmd , commands} = require('../lib/command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
 ◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
 ◈ •│ Name      : ᴄʏʙᴇʀ ᴘʀɪɴᴄᴇ
 ◈ •│
 ◈ •│ Place      : ꜱʀɪ ʟᴀɴᴋᴀ
 ◈ •│
 ◈ •│ Gender    : ᴍᴀʟᴇ
 ◈ •│
 ◈ •│ Age       : 1𝟽+
 ◈ •│
 ◈ •│ Status     : 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁
 ◈ •│
 ◈ •│ Phone     : wa.me/94751543731
 ◈ •│
 ◈ •│ IG ID      : undefined 
 ◈ •│
 ◈ •│ Connect   : undefined 
 ◈ •│
 ◈ •│ Github     : ᴄᴏᴍɪɴɢ sᴏᴏɴ
 ◈ •│
 ◈ •│ Website    :undefined 
 ◈ •│
 ◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ • *◆◆◆◆◆◆◆◆◆◆◆◆*

 ◈ •*[ • CYBER PRINCE- TEAM • ]*
 ◈ •*╭┈───────────────•*
 ◈ •*│  ◦* *▢➠ᴄʏʙᴇʀ ᴀᴅʜʜʏ ᴏғᴄ*
 ◈ •*│  ◦* *▢➠ᴄʏʙᴇʀ ᴘᴏᴅᴅᴀ*
 ◈ •*│  ◦* *▢➠ʜɪʀᴜꜱʜᴀɴ*
 ◈ •*│  ◦* *▢➠ᴋʟᴡ ᴜᴋᴇʀ*
 ◈ •*│  ◦* *▢➠ᴄʏʙᴇʀ sᴀᴛʜɪsɢᴋᴀ*
 ◈ •*╰┈───────────────•*
 ◈ •*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ᴘʀɪɴᴄᴇ ᴏғᴄ
 ◈ •*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
