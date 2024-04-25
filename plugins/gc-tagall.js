let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*🌱 ACTIVENSE PLANTITAS🌱* ${pesan}`
let teks = `*🌺si deseas comprar un bot para tu grupo comunicate +5493873448175🌺*\n\n💖 ${oi}\n\n❄️ *@aty_eri_::*\n`
for (let mem of participants) {
teks += `🍄 @${mem.id.split('@')[0]}\n`}
teks += `➤ 𝐏𝐫𝐢𝐧𝐜𝐞𝐛𝐨𝐭𝟐`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler