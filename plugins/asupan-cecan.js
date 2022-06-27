let handler = async (m, { conn }) => {
let susan = 'https://api.zacros.my.id/asupan/cecan'
    conn.sendButtonImg(m.chat, susan, 'Nih', wm2, 'NEXT', '.cecan', m)
}
handler.help = ['cecan']
handler.tags = ['asupan']
handler.command = /^(cecan)$/i

module.exports = handler
