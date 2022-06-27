const { VirtualConsole } = require("jsdom")

let handler = async (m, { conn }) => {
let vi = 'https://api.zacros.my.id/asupan/indonesia'
    conn.sendButtonImg(m.chat, VirtualConsole, 'Nih', wm2, 'NEXT', '.indonesia', m)
}
handler.help = ['indonesia']
handler.tags = ['asupan']
handler.command = /^(indonesia)$/i

module.exports = handler
