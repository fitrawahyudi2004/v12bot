let handler = async (m, { conn }) => {
let apik = 'https://api.zacros.my.id/asupan/hijaber'
    conn.sendButtonImg(m.chat, apik, 'Nih', wm2, 'NEXT', '.hijaber', m)
}
handler.help = ['hijaber']
handler.tags = ['asupan']
handler.command = /^(hijaber)$/i

module.exports = handler
