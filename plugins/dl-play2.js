
import yts from 'yt-search'
import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let limit = 320
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  
    if (!text) throw `✳️ ${mssg.example} *${usedPrefix + command}* Lil Peep hate my life`
  let chat = global.db.data.chats[m.chat]
  let res = await yts(text)
  //let vid = res.all.find(video => video.seconds < 3600)
  let vid = res.videos[0]
  if (!vid) throw `✳️ Vídeo/Audio no encontrado`
  let isVideo = /vid$/.test(command)
  m.react('🎧') 
  
  let play = `
	≡ *𝐓𝐡𝐞-𝐌𝐢𝐤𝐮𝐁𝐨𝐭-𝐌𝐃𝐕3 / 𝐌𝐮𝐬𝐢𝐜*
┌──────────────
▢ 📌 *${mssg.title}:* ${vid.title}
▢ 📆 *${mssg.aploud}:* ${vid.ago}
▢ ⌚ *${mssg.duration}:* ${vid.timestamp}
▢ 👀 *${mssg.views}:* ${vid.views.toLocaleString()}
└──────────────

_Enviando..._` 
conn.sendFile(m.chat, vid.thumbnail, 'play', play, m, null, rpig)
  
  let q = isVideo ? '360p' : '128kbps' 
try {
  let yt = await (isVideo ? fg.ytv : fg.yta)(vid.url, q)
  let { title, dl_url, quality, size, sizeB } = yt
  let isLimit = limit * 1024 < sizeB 

     await conn.loadingMsg(m.chat, '📥 Descargando', ` ${isLimit ? `≡  *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 YTDL*\n\n▢ *⚖️${mssg.size}*: ${size}\n▢ *🎞️${mssg.quality}*: ${quality}\n\n▢ _${mssg.limitdl}_ *+${limit} MB*` : '✅ Descarga Completada' }`, ["▬▭▭▭▭▭", "▬▬▭▭▭▭", "▬▬▬▭▭▭", "▬▬▬▬▭▭", "▬▬▬▬▬▭", "▬▬▬▬▬▬"], m)
     
	  if(!isLimit) conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), `
 ≡  *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 YTDL*
  
▢ *📌Título* : ${title}
▢ *🎞️Calidad* : ${quality}
▢ *⚖️Peso* : ${size}
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done) 
  } catch {
  try {
//  let q = isVideo ? '360p' : '128kbps' 
  let yt = await (isVideo ? fg.ytmp4 : fg.ytmp3)(vid.url, q)
  let { title, dl_url, quality, size, sizeB } = yt
  let isLimit = limit * 1024 < sizeB 

     await conn.loadingMsg(m.chat, '📥 Descargando', ` ${isLimit ? `≡  *𝐃𝐨𝐧𝐰𝐥𝐨𝐚𝐝 YTDL*\n\n▢ *⚖️${mssg.size}*: ${size}\n▢ *🎞️${mssg.quality}*: ${quality}\n\n▢ _${mssg.limitdl}_ *+${limit} MB*` : '✅ Descarga Completada' }`, ["▬▭▭▭▭▭", "▬▬▭▭▭▭", "▬▬▬▭▭▭", "▬▬▬▬▭▭", "▬▬▬▬▬▭", "▬▬▬▬▬▬"], m)
	  if(!isLimit) conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /2$/.test(command)), `
 ≡  *𝐃𝐨𝐧𝐰𝐥𝐨𝐚𝐝 YTDL 2*
  
*📌${mssg.title}* : ${title}
*🎞️${mssg.quality}* : ${quality}
*⚖️${mssg.size}* : ${size}
`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })
		m.react(done) 
		
		 } catch (error) {
        m.reply(`❎ ${mssg.error}`)
    }
}

}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']

export default handler
