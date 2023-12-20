
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ ${mssg.donate}

▢ *𝐃𝐨𝐧𝐚𝐫*
𝑷𝒖𝒆𝒅𝒆 𝒅𝒐𝒏𝒂𝒓 𝒚𝒂 𝒔𝒆𝒂 𝒖𝒏 𝒏𝒖𝒎𝒆𝒓𝒐 𝒒𝒖𝒆 𝒏𝒐 𝒖𝒔𝒆 𝒑𝒂𝒓𝒂 𝒆𝒍 𝒃𝒐𝒕 𝒐 𝒂𝒑𝒐𝒚𝒂𝒓 𝒏𝒖𝒆𝒔𝒕𝒓𝒐 𝒓𝒆𝒅𝒑𝒐𝒔𝒊𝒕𝒐𝒓𝒊𝒐`

let img = 'https://i.ibb.co/r7C0TNP/The-Miku-Bot-MD.jpgs'
conn.sendFile(m.chat, img, 'img.jpg', don, m, null, rpyp)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler

