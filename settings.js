const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {    
SESSION_ID: process.env.SESSION_ID || 'MXN-MOVIE=jgpWkbbQ#RhAU8_Ay2BM0wI3huf1WEkF3fXAS7aGCHHAzXj76J5M',
OWNER_NUMBER: process.env.OWNER_NUMBER || "94741354157",
ALIVE: process.env.ALIVE || `default`,
OWNER_NAME: process.env.OWNER_NAME || 'VAJIRA x ADHI' ,     
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://izumimd_meje_user:0Vhm5vKGZ7ORt2FlJBQf4d6EtRdeuE8z@dpg-cn0o2imn7f5s73fa46q0-a.frankfurt-postgres.render.com/izumimd_meje',
PREFIX:  process.env.PREFIX || ['.'] ,
FOOTER: '> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍxɴ ᴍᴏᴠɪᴇ☻',
DIRECTION: true,
IMAGE: process.env.IMAGE || `https://files.catbox.moe/hfco92.jpg`,
LOGO: process.env.LOGO || `https://files.catbox.moe/hfco92.jpg`,
JID: process.env.JID || "120363287634683059@newsletter",
WACHLINK: process.env.WACHLINK || `https://whatsapp.com/channel/0029Vac3pnlBlHpXLrUBym3a`,     
};