 
let handler = async (m, { conn }) => {

m.reply(`
≡  *${botName} ꨄ︎ 𝐒𝐮𝐩𝐩𝐨𝐫𝐭*

◈ ━━━━━━━━━━━━━━━━━━━━ ◈
▢ Canal
${fgcanal}

▢ Grupo *1*
${bgp}

▢ Grupo *2*
${bgp2}

▢ Grupo *3* 
${bgp3}

`)

}
handler.help = ['support']
handler.tags = ['main']
handler.command = ['grupos', 'groups', 'support'] 

export default handler
