const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `*────── 「 DONATE 」 ──────*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:

┌〔 Donasi • Emoney 〕
├🔃 Sehat Sehat Selalu yg donasi😇
└────

Berapapun donasi kalian akan sangat berarti 👍
𝚃𝚎𝚛𝚒𝚖𝚊𝚔𝚊𝚜𝚒𝚑!!!

Contact person Owner:
wa.me/6281222746323 (Owner)`
let message = await prepareWAMessageMedia({ image: {url: 'https://i.postimg.cc/C1BfTNk2/6bfc0fa448e61d8f7fe5323fcfd28518.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'DanaTod',
               phoneNumber: '082118537381'
             }

           },
               {
             callButton: {
               displayText: 'GopayTOD',
               phoneNumber: '081222746323'
             }
           },           
               {
             quickReplyButton: {
               displayText: 'OwnerTod',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler
