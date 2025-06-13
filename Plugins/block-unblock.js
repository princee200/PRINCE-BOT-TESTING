const { cmd } = require('../lib/command');

cmd({

    pattern: "block",

    desc: "Blocks a person",

    category: "owner",

    react: "ðŸš«",

    filename: __filename

},

async (conn, m, { reply, q, react }) => {

    // Get the bot owner's number dynamically

    const botOwner = conn.user.id.split(":")[0] + "@s.whatsapp.net";

    

    if (m.sender !== botOwner) {

        await react("âŒ");

        if (!isBotOwner) {

    return reply("Only the bot owner can use this command.");

}

let jid;

if (m.quoted) {

    // If replying to a message, get the sender of the quoted message

    jid = m.quoted.sender;

} else if (m.mentionedJid && m.mentionedJid.length > 0) {

    // If mentioning a user, get their JID

    jid = m.mentionedJid[0];

} else {

    return reply("Please reply to a message or mention a user.");

}

// Continue with your logic using 'jid'

// Example:

// reply(`Target JID is ${jid}`);

    } else if (q && q.includes("@")) {

        jid = q.replace(/[@\s]/g, '') + "@s.whatsapp.net"; // If manually typing a JID

    } else {

        await react("âŒ");

        return reply("Please mention a user or reply to their message.");

    }

    try {

        await conn.updateBlockStatus(jid, "block");

        await react("âœ…");

        reply(`Successfully blocked @${jid.split("@")[0]}`, { mentions: [jid] });

    } catch (error) {

        console.error("Block command error:", error);

        await react("âŒ");

        reply("Failed to block the user.");

    }

});

cmd({

    pattern: "unblock",

    desc: "Unblocks a person",

    category: "owner",

    react: "ðŸ”“",

    filename: __filename

},

async (conn, m, { reply, q, react }) => {

    // Get the bot owner's number dynamically

    const botOwner = conn.user.id.split(":")[0] + "@s.whatsapp.net";

    if (m.sender !== botOwner) {

        await react("âŒ");

        return reply("Only the bot owner can use this command.");

    }

    let jid;

    if (m.quoted) {

        jid = m.quoted.sender;

    } else if (m.mentionedJid.length > 0) {

        jid = m.mentionedJid[0];

    } else if (q && q.includes("@")) {

        jid = q.replace(/[@\s]/g, '') + "@s.whatsapp.net";

    } else {

        await react("âŒ");

        return reply("Please mention a user or reply to their message.");

    }

    try {

        await conn.updateBlockStatus(jid, "unblock");

        await react("âœ…");

        reply(`Successfully unblocked @${jid.split("@")[0]}`, { mentions: [jid] });

    } catch (error) {

        console.error("Unblock command error:", error);

        await react("âŒ");

        reply("Failed to ulock the user.");

    }

});           
