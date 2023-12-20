import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command }) => {
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  
  let neww = performance.now()
  let speed = neww - old
  
let infobt = `
≡ *𝐈𝐧𝐟𝐨 𝐁𝐨𝐭*
  
*𝐄𝐬𝐭𝐚𝐝𝐨*
▢ ${mssg.gp}s: *${groupsIn.length}*
▢ Chats: *${chats.length - groupsIn.length}*
▢ Total Chats: *${chats.length}*

*≡ 𝐂𝐫𝐞𝐚𝐝𝐨𝐫*
  *𝐴𝑑𝑟𝑖𝑎𝑛𝑂𝑓𝑖𝑐𝑖𝑎𝑙*
▢ 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 :
  • ${fgig}
▢ 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : 
  • +595994836199
▢ 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 : 
  • https://youtube.com/AdrianOficial905
  
 *≡ 𝐒𝐮𝐩𝐩𝐨𝐫𝐭*
  *𝐒𝐮𝐩𝐩𝐨𝐫𝐭 01*
▢ WhatsApp : wa.me/595986637644
▢ WhatsApp : wa.me/595971253989`

/*conn.sendButton(m.chat, infobt, mssg.ig, null, [
  ['ꨄ︎ Apoyar', `${usedPrefix}donate`],
   ['⌬ Grupos', `${usedPrefix}gpdylux`]
 ], m)*/
 m.reply(infobt)

}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['info', 'infobot', 'botinfo']

export default handler
