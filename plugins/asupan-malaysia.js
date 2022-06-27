let handler = async (m, { conn }) => {
let apihyzer = 'https://api.zacros.my.id/asupan/malaysia'
    conn.sendButtonImg(m.chat, apihyzer, 'Nih', wm2, 'NEXT', '.malaysia', m)
}
handler.help = ['malaysia']
handler.tags = ['asupan']
handler.command = /^(malaysia)$/i

module.exports = handler
