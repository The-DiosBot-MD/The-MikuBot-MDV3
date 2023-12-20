
let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ Use estos comandos sin el prefijo: *${usedPrefix}*
┌─⊷ *AUDIOS* 
┣ ඬ⃟🔊 _Quien es tu sempai botsito 7w7_
┣ ඬ⃟🔊 _Te diagnostico con gay_
┣ ඬ⃟🔊 _No digas eso papu_
┣ ඬ⃟🔊 _A nadie le importa_
┣ ඬ⃟🔊 _Fiesta del admin_
┣ ඬ⃟🔊 _Fiesta del administrador_ 
┣ ඬ⃟🔊 _Vivan los novios_
┣ ඬ⃟🔊 _Feliz cumpleaños_
┣ ඬ⃟🔊 _Noche de paz_
┣ ඬ⃟🔊 _Buenos dias_
┣ ඬ⃟🔊 _Buenos tardes_
┣ ඬ⃟🔊 _Buenos noches_
┣ ඬ⃟🔊 _Audio hentai_
┣ ඬ⃟🔊 _Chica lgante_
┣ ඬ⃟🔊 _Feliz navidad_
┣ ඬ⃟🔊 _Vete a la vrg_
┣ ඬ⃟🔊 _Pasa pack Bot_
┣ ඬ⃟🔊 _Atencion grupo_
┣ ඬ⃟🔊 _Marica quien_
┣ ඬ⃟🔊 _Murio el grupo_
┣ ඬ⃟🔊 _Oh me vengo_
┣ ඬ⃟🔊 _tio que rico_
┣ ඬ⃟🔊 _Viernes_
┣ ඬ⃟🔊 _Baneado_
┣ ඬ⃟🔊 _Sexo_
┣ ඬ⃟🔊 _Hola_
┣ ඬ⃟🔊 _Un pato_
┣ ඬ⃟🔊 _Nyanpasu_
┣ ඬ⃟🔊 _Te amo_
┣ ඬ⃟🔊 _Yamete_
┣ ඬ⃟🔊 _Bañate_
┣ ඬ⃟🔊 _Es puto_
┣ ඬ⃟🔊 _La biblia_
┣ ඬ⃟🔊 _Onichan_
┣ ඬ⃟🔊 _Mierda de Bot_
┣ ඬ⃟🔊 _Siuuu_
┣ ඬ⃟🔊 _Epico_
┣ ඬ⃟🔊 _Shitpost_
┣ ඬ⃟🔊 _Rawr_
┣ ඬ⃟🔊 _UwU_
┣ ඬ⃟🔊 _:c_
┣ ඬ⃟🔊 _a_
┣ ඬ⃟🔊 _Sad_
└──────────────
`
    let pp = './src/fg_logo.jpg' 
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler
