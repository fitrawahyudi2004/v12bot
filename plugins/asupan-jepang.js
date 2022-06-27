let handler = async (m, { conn }) => {
let apihyzer = 'https://api.zacros.my.id/asupan/japan'
    conn.sendButtonImg(m.chat, apihyzer, 'Nih', wm2, 'NEXT', '.jepang', m)
}
handler.help = ['jepang']
handler.tags = ['asupan']
handler.command = /^(jepang)$/i

module.exports = handler

