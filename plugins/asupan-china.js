let handler = async (m, { conn }) => {
let ssss = 'https://api.zacros.my.id/asupan/china'
    conn.sendButtonImg(m.chat, ssss, 'Nih', wm2, 'NEXT', '.china', m)
}
handler.help = ['china']
handler.tags = ['asupan']
handler.command = /^(china)$/i

module.exports = handler
