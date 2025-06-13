const { cmd, commands } = require('../lib/command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `╭━━〔 *PRINCE-MD-V1* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *⏳Uptime*:  ${runtime(process.uptime())} 
┃◈┃• *📟 Ram usage*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *⚙️ HostName*: ${os.hostname()}
┃◈┃• *👨‍💻 Owner*: ᴄʏʙᴇʀ ᴘʀɪɴᴄᴇ ᴏғᴄ
┃◈┃• *🧬 Version*: V1 BETA
┃◈└───────────┈⊷
╰──────────────┈⊷

  𝐡𝐞𝐥𝐥𝐨𝐰 𝐢𝐦 𝐩𝐫𝐢𝐧𝐜𝐞 𝐦𝐝 𝐯1 𝐛𝐨𝐭.𝐢𝐦 𝐚𝐥𝐢𝐯𝐞 𝐧𝐨𝐰. 

  https://whatsapp.com/channel/0029Vb4rsUd1CYoZLmQ8o82R

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʏʙᴇʀ ᴘʀɪɴᴄᴇ ᴘʀɪɴᴄᴇ`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: 'https://i.ibb.co/5W5B0K5V/IMG-20250421-WA0019.jpg' },  // ✅ Corrected image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363378381276520@newsletter', // ✅ Fixed missing quote
                    newsletterName: 'ᴹᴿ ᴾᴿᴵᴺᶜᴱ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});