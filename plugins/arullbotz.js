let handler = async (m, { conn }) => {
let caption = `*(￣ヘ￣）HEMM*`

conn.sendButton( m.chat, caption, `©️ ArullBotzMD`, `Menu`, `.menu`, m)

       }
       
handler.customPrefix = /^(bot|botwa|robotwa|robot)/i
handler.command = new RegExp
module.exports = handler
