let handler = async (m, { conn }) => {
let apihyzer = 'https://api.zacros.my.id/asupan/korea'
    conn.sendButtonImg(m.chat, apihyzer, 'Nih', wm2, 'NEXT', '.korea', m)
}
handler.help = ['korea']
handler.tags = ['asupan']
handler.command = /^(korea)$/i

module.exports = handler

