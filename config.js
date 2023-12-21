import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['595994836199', 'The-MikuBot-MDV3', true],
  ['595986637644', 'The-MikuBot-MDV3',true],
  ['595971253989', 'The-MikuBot-MDV3',true],
  ['595994825505', 'The-MikuBot-MDV3',true],
  ['595976126756', 'The-MikuBot-MDV3',true],
] //Numeros de owner 

global.mods = [''] 
global.prems = ['595994836199']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'DRLg5kY7' //--- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '𝐓𝐡𝐞-𝐌𝐢𝐤𝐮𝐁𝐨𝐭-𝐌𝐃' 
global.author = '𝐴𝑑𝑟𝑖𝑎𝑛𝑂𝑓𝑖𝑐𝑖𝑎𝑙' 

//--info FG
global.botName = '𝐓𝐡𝐞-𝐌𝐢𝐤𝐮𝐁𝐨𝐭-𝐌𝐃𝐕3'
global.fgig = 'https://www.instagram.com/adri.analegresanchez' 
global.fgsc = 'https://github.com/The-DiosBot-MD/The-MikuBot-MDV3' 
global.fgyt = 'https://youtube.com/AdrianOficial905'
global.fgpyp = 'https://paypal.me/AdrianOficial'
global.fglog = 'https://i.ibb.co/r7C0TNP/The-Miku-Bot-MD.jpgs'

//--- Grupos WA
global.fgcanal = 'https://whatsapp.com/channel/0029VaGt7Uk6WaKkEDZUh43W'
global.bgp = 'https://chat.whatsapp.com/C92isvspFcXCtqv2PqCfHI'
global.bgp2 = 'https://chat.whatsapp.com/C92isvspFcXCtqv2PqCfHI'
global.bgp3 = 'https://chat.whatsapp.com/C92isvspFcXCtqv2PqCfHI' //--GP NSFW

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
