let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
  if (/^tod$/i.test(command)) {
    await conn.send3But(m.chat, 'Truth or Dare', watermark, 'Truth', `${usedPrefix}truth`, 'Dare', `${usedPrefix}dare`, 'Random', `${pickRandom([`${usedPrefix}dare`, `${usedPrefix}truth`])}`, m)
  }
  if (/^truth$/i.test(command)) {
    let res = await fetch(API('pencarikode', '/api/truthid', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    await conn.send2But(m.chat, json.message, watermark, 'Truth', `${usedPrefix}truth`, 'Dare', `${usedPrefix}dare`, m)

  }
  if (/^dare$/i.test(command)) {
    let res = await fetch(API('pencarikode', '/api/dareid', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    await conn.send2But(m.chat, json.message, watermark, 'Truth', `${usedPrefix}truth`, 'Dare', `${usedPrefix}dare`, m)

  }
}
handler.help = ['tod']
handler.tags = ['fun']
handler.command = /^(tod|truth|dare)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
