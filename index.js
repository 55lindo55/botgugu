/*
]=====> Ivan-MLN <=====[ ]=====> YT Ivan Maulana <=====[ ]=====> 085865781508 <=====[
*/
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   ChatModification,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const { nvdd } = require('./lib/novidade')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { cara } = require('./src/cara')
const { exec } = require("child_process")
const { uploadimg } = require('./lib/uploadimg')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const speed = require('performance-now')
const request = require('request')
const imgbb = require('imgbb-uploader')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Gugu\n' // GANTI NAMA LU
            + 'ORG: GUGU;\n'
            + 'TEL;type=CELL;type=VOICE;waid=558186663773:+55 81 8666-3773\n' // GANTI NOMOR LU
            + 'END:VCARD'
// UDAH SEGITU KONSOL KEBAWAH BIARIN AJA
const ngonsol = JSON.parse(fs.readFileSync('./settings/Miku.json'))
const {
    botName,
    ownerName,
    BarBarKey,
    XteamKey,
    VhtearKey,
    ApiLolh,
    onlykey,
    LeysKey,
    penca,
    TobzKey,
    ownerNumber,
    botPrefix,
    GrupLimitz,
    UserLimitz,
    UserLimitVip,
    CeerTod
} = ngonsol
// POWERED BY Ivan-MLN
prefix = botPrefix
blocked = []
limitawal = UserLimitz
limitvip = UserLimitVip
memberlimit = GrupLimitz
cr = CeerTod

// LOAD JSON
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/group/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/group/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/group/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const _limitvip = JSON.parse(fs.readFileSync('./database/user/limitvip.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const publik = JSON.parse(fs.readFileSync('./database/group/public.json'))
const antifake = JSON.parse(fs.readFileSync('./database/group/antifake.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const porno = JSON.parse(fs.readFileSync('./database/group/porno.json'))
const antiporn = JSON.parse(fs.readFileSync('./database/group/antiporn.json'))
const antigrupo = JSON.parse(fs.readFileSync('./database/group/antigrupo.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))
const _antivirtex2 = JSON.parse(fs.readFileSync('./database/group/antivirtex2.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
/*       
]=====> LOAD MENU <=====[
*/
const { help } = require('./database/menu/help')
const { simple } = require('./database/menu/simple')
const { sound } = require('./database/menu/sound')
const { gabut } = require('./database/menu/gabut')
const { groupm } = require('./database/menu/group')
const { download } = require('./database/menu/download')
const { dompet } = require('./database/menu/dompet')
const { random } = require('./database/menu/random')
const { other } = require('./database/menu/other')
const { owb } = require('./database/menu/owb')
const { maker } = require('./database/menu/maker')
const { vip } = require('./database/menu/premium')
/*
]=====> FUNCTION <=====[
*/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Hora(s) ${pad(minutes)} Minuto(s) ${pad(seconds)} Segundo(s)`
}
function monospace(string) {
return '```' + string + '```'
}

function addMetadata(packname, author) {	
				if (!packname) packname = 'BOT-GUGU'; if (!author) author = 'FDL';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');
				let name = `${author}_${packname}`
				if (fs.existsSync(`./Sticker/${name}.exif`)) return `./Sticker/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./Sticker/${name}.exif`, buffer, (err) => {	
					return `./Sticker/${name}.exif`	
				})	

			}
/*
]=====> SCAN QR <=====[
*/

const baby = new WAConnection()
baby.logger.level = 'warn'
console.log(banner.string)
   baby.on('qr', qr => {
   qrcode.generate(qr, { small: true })
	console.log(color('[','white'), color('!','red'), color(']','white'), color(' SCAN QR MU <POWERED BY Ivan-MLN>'))
})

	baby.on('credentials-updated', () => {
		fs.writeFileSync('./Miku.json', JSON.stringify(baby.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Bot Gugu Está Carregando...')
	})
	fs.existsSync('./Miku.json') && baby.loadAuthInfo('./Miku.json')
	baby.on('connecting', () => {
		start('2', 'Bot Gugu Está Se Conectando...')
	})
	baby.on('open', () => {
		success('2', 'Bot Gugu Conectado')
	})
	baby.connect({timeoutMs: 30*1000})

baby.on('group-participants-update', async (anu) => {
  const mdata = await baby.groupMetadata(anu.jid)
		if(antifake.includes(anu.jid)) {
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55))
				if(!num.split('@')[0].startsWith(351)) {
					baby.sendMessage(mdata.id, 'Corra numero fake safado seu ban está próximo', MessageType.text)
					setTimeout(async function () {
						baby.groupRemove(mdata.id, [num])
					}, 1000)
				}
			}
		}
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await baby.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await baby.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `[ *BEM-VINDO AO GRUPO ${mdata.subject}* ] \n___________________________\n@${num.split('@')[0]} Leia as regras (caso tenha)\n *___________________________*\nNão seja ghost ou será removido!`
				let buff = await getBuffer(ppimg)
				baby.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await baby.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Adeus @${num.split('@')[0]} 👋* \n_Espero que volte algum dia, ou não..._`
				let buff = await getBuffer(ppimg)
				baby.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Erro: %s', color(e, 'red'))
		}
	})
	baby.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	baby.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
			const time2 = moment.tz('Europe/Lisbon').format('DD/MM HH:mm:ss')
			const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
			const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
      body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
      var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const txt = mek.message.conversation
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = baby.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = baby.contacts[sender] != undefined ? baby.contacts[sender].vname || baby.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await baby.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
/*
]=====> Ivan - MLN <=====[
*/
      const isEventon = isGroup ? event.includes(from) : false
      const isRegistered = checkRegisteredUser(sender)
      const isBanned = ban.includes(sender)
      const isPrem = premium.includes(sender)
      const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
      const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
      const isAntiFake = isGroup ? antifake.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
      const isPublic = isGroup ? publik.includes(from) : false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isPorno = isGroup ? porno.includes(from) : false 
			const isAntiPorn = isGroup ? antiporn.includes(from) : false
			const isAntiGrupo = isGroup ? antigrupo.includes(from) : false 
			const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false 
			const isAntiVirtex2 = isGroup ? _antivirtex2.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const totalchat = await baby.chats.all()
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				baby.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				baby.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? baby.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : baby.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    baby.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			baby.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    baby.sendMessage(from, audio, mp3, {quoted:mek})
		    }
			
/*
]=====> LEVELING <=====[
*/
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
/*
]=====> CHECK LIMIT BY LANN ID <=====[
*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return baby.sendMessage(from, ind.limitend(pushname), text,{ quoted: mek})
                            baby.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        baby.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
          const checkLimitVip = (sender) => { ///limite de vip editado
          	let found = false
                    for (let lmt of _limitvip) {
                        if (lmt.id === sender) {
                            let limitCounts = limitvip - lmt.limit
                            if (limitCounts <= 0) return baby.sendMessage(from, ind.limitend(pushname), text,{ quoted: mek})
                            baby.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limitvip.push(obj)
                        fs.writeFileSync('./database/user/limitvip.json', JSON.stringify(_limitvip))
                        baby.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
/*
]=====> LIMITED BY LANN ID <=====[
*/
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    baby.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

           const isLimitVip = (sender) =>{ ///limite de vips editado
		      let position = false
              for (let i of _limitvip) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitvip ) {
              	  position = true
                    baby.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limitvip
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limitvip.push(obj)
                fs.writeFileSync('./database/user/limitvip.json',JSON.stringify(_limitvip))
           return false
       }
     }
        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            baby.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
      
/*
]=====> ATM <=====[
*/
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        
        const suptime = process.uptime()
		            myMonths = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
                    myDays = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'];
              var tgl = new Date();
                    detik = tgl.getSeconds();
                    menit = tgl.getMinutes();
                    jam = tgl.getHours();
              var ampm = jam >= 12 ? 'PM' : 'AM';
              var day = tgl.getDate()
                   bulan = tgl.getMonth()
              var thisDay = tgl.getDay(),
                   thisDay = myDays[thisDay];
              var yy = tgl.getYear()
              var year = (yy < 1000) ? yy + 1900 : yy;
              const papik = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
              
    if (bad.includes(messagesLink)) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Você está sendo removido por dizer alguma palavra contida no filtro. Até a próxima 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA/」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (txt.length > 500){
    if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply(`${pushname} você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Trava/Spam detectado! @${sender.split("@")[0]} você será removido!`)
		setTimeout( () => {
			baby.groupRemove(from, [kic]).catch((e)=>{reply(`*ERRO:* ${e}`)})
		}, 100)
	} 

if (isGroup && isAntiPorn && !isGroupAdmins && isBotGroupAdmins) {
    if (type === 'image') {
    const datafacol = await decryptMedia(message)
    const fotofacol = await uploadImages(datafacol, `fotoface.${sender}`)
    const getnsfw = await axios.get(`https://lolhuman.herokuapp.com/api/nsfwcheck?apikey=${ApiLolh}&img=${fotofacol}`)
    const persen = getnsfw.data.result
    console.log(persen)
    var kic = `${sender.split("@")[0]}@s.whatsapp.net`
    if (Number(getnsfw.data.result.split('%')[0]) >= 30.00) return reply(`*Terdeteksi Mengirim Gambar Yang Berbau Porno*\nKeyakinan Gambar: ${persen} `).then(() => baby.removeParticipant(groupId, sender))
    }
}        
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))


switch(command) {
        case 'help':
				case 'menu':
				  if (isBanned) return reply(ind.baned())
				  if (!isRegistered) return reply(ind.noregis())
				  if (!isPublic) return reply(ind.publicoff())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
					await costum(help(pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
				case 'donate':
				case 'doar':
				  if (isBanned) return reply(ind.baned())
          if (!isRegistered) return reply(ind.noregis())	
				  if (!isPublic) return reply(ind.publicoff())
					baby.sendMessage(from, donasi(pushname, prefix, botName, ownerName), text)
					break 
				case 'novidade':
				case 'novidades':
				case 'release':
				case 'nvdd':
				  if (isBanned) return reply(ind.baned())
          if (!isRegistered) return reply(ind.noregis())	
				  if (!isPublic) return reply(ind.publicoff())
					await costum(nvdd(prefix, ownerName), text, tescuk, cr)
					break 
				case 'sommenu':
				case 'somenu':
				if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())				
			  await costum(sound(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
				break 
        case 'simplemenu':
				case 'simpelmenu':
				if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(simple(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break 
                case 'gabutmenu':
                if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(gabut(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break 
                case 'groupmenu':
                case 'grupomenu':
                case 'gpmenu':
                if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())			
					await costum(groupm(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'downloadmenu':
                case 'downmenu':
                case 'donwmenu':
                if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(download(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'bancomenu':
                case 'bankmenu':
                if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
				  const uangku = checkATMuser(sender)
					await costum(dompet(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered, uangku), text, tescuk, cr)
					break
                case 'randommenu':
                case 'aleatoriomenu':
                if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(random(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'makermenu':
                if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())			
					await costum(maker(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'othermenu':
                case 'outromenu':
                if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())					
					await costum(other(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'soundmenu':
                case 'sommenu':
                case 'somenu':
                if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())					
					await costum(sound(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break
                case 'premiummenu':
                case 'vipmenu':
                if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())					
					await costum(vip(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break																			
                case 'ownermenu':
                case 'donomenu':
                if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned()) 
                if (!isOwner) return reply(ind.ownerb())
          if (!isRegistered) return reply(ind.noregis())					
					await costum(owb(pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered), text, tescuk, cr)
					break										
/*
]=====> SIMPLE MENU <=====[
*/
				case 'figurinha': 
				case 'figu':
				case 's':
				case 'f':
				if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())
				    if (!isRegistered) return reply(ind.noregis())
				    if (isLimit(sender)) return reply(ind.limitend(pushname))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await baby.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Iniciado: ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Erro: ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('FDL','BOT-GUGU')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(ind.stikga())
									baby.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*baby.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await baby.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Iniciado: ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Erro: ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('FDL','BOT-GUGU')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(ind.stikga())
									baby.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*baby.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Aceito foto/video/gif com a legenda: \n${prefix}s (duração gif: 6s, duração vídeo: 9s ou em alguns casos, 11s). Mande apenas um por um! Caso envie sem marcar a mídia ou sem legenda, não irei funcionar!`)
					}
					await limitAdd(sender)
					break 
					case 'swm':
          if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					if (!isPrem) return reply(ind.premium())
          if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
           const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
           filePath = await baby.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
           file_name = getRandom(".webp")
           request({
           url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${ApiLolh}`,
           method: 'POST',
           formData: {
           "img": fs.createReadStream(filePath),
           "package": "Chama o brabo ae",
           "author": "Bot Gugu - wa.me//17372213845"
            },
            encoding: "binary"
            }, function(error, response, body) {
            fs.unlinkSync(filePath)
            fs.writeFileSync(file_name, body, "binary")
            ini_buff = fs.readFileSync(file_name)
            baby.sendMessage(from, ini_buff, sticker, { quoted: mek }).then(() => {
            fs.unlinkSync(file_name)
            })
            });
            } else {
            reply(`Precisa marcar a imagem ou colocar o comando na desc. da foto.\n*Exemplo:* ${prefix + command} gugu brabo`)
            }
            await limitAdd(sender)
            break 
case 'removebg':
if (!isPublic) return reply(ind.publicoff())
if (isBanned) return reply(ind.baned())	
if (!isRegistered) return reply(ind.noregis())
if (isLimitVip(sender)) return reply(ind.limitend(pushname))
if (!isPrem) return reply(ind.premium())
	  var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  owgi = await baby.downloadAndSaveMediaMessage(ted)
    urlgambar = args[0]
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  dinhmmp = await getBuffer(`https://api.zeks.xyz/api/removebg?apikey=apivinz&url=${anu.display_url}`)
	 baby.sendMessage(from, dinhmmp, image, {quoted:mek})
	} else {
	  	  reply(`Precisa mencionar a imagem ou colocar na descrição da imagem. *Ex:* ${prefix + command}`)
	}
	await limitAdd(sender)
	break
				case 'marvel':
				if (!isPublic) return reply(ind.publicoff())
        if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`Use: *${prefix}marvel msg1&msg2*\n*Exemplo*: ${prefix}marvel Bot&Gugu`)
				var gh = body.slice(8)
				var mar = gh.split()[0];
				var vel = gh.split("&")[1];
				reply(ind.wait())
				buff = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/marvelstudio?apikey=${ApiLolh}&text1=${mar}&text2=${vel}`)
				baby.sendMessage(from, buff, image, {quoted: mek, caption: 'Aqui está, faca um bom aproveito.'}) 
				await limitAdd(sender)
				break
				case 'nulis':
				if (!isPublic) return reply(ind.publicoff())
        if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis2 Ramlan baik hati`)
				laysha = body.slice(8)
				reply(ind.wait())
				buff = await getBuffer(`http://lolhuman.herokuapp.com/api/nulis?apikey=${ApiLolh}&text=${laysha}`)
				baby.sendMessage(from, buff, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				await limitAdd(sender)
				break
				case 'quotes':
				if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				quotes = body.slice(1)
				const quo =['Melhor entender um pouco do que entender mal. ',' Quase todos os homens são capazes de resistir à adversidade. No entanto, se você quiser testar o verdadeiro caráter de um homem, dê-lhe poder. ',' Se a determinação de uma pessoa for forte e firme, Deus se unirá em seus esforços. ',' O sofrimento é uma lição. ',' Ciência sem religião é coxo. ',' A vida é como uma bicicleta, para ficarmos equilibrados temos que continuar nos movendo. ',' As diferenças de passado, presente e futuro nada mais são do que ilusões teimosas. ',' Uma mesa, uma cadeira, um tigela de frutas e um violino; o que mais é necessário para que uma pessoa se sinta feliz? ',' Tenha misericórdia dos outros, seja duro consigo mesmo. ',' A melhor maneira de se mover é atribuindo-se tarefas. ',' Não devemos desanimar. A paixão é o mais forte estimulante do amor, da criatividade e do desejo de viver mais. ',' O homem será feliz enquanto quiser. ',' Não espero ser tudo para todos. Eu só quero ser algo para alguém. ',' Se o intelecto de alguém é perfeito, então ele diz um pouco. ',' Feliz é um homem que pode ser um mestre para si mesmo, um cocheiro para suas paixões e um capitão para a arca de sua vida.']
				const tes = quo[Math.floor(Math.random() * quo.length)]
				baby.sendMessage(from, ''+tes+'\n\n_Por: Gustavo._', text, { quoted: mek })
				await limitAdd(sender)
				break				
				case 'ninjalogo':
				if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
				var gh = body.slice(11)
				var nin = gh.split("&")[0];
				var ja = gh.split("&")[1];
				if (args.length < 1) return reply(`「❗」Contoh : ${prefix}ninjalogo Ramlan & Gans`)
				reply(ind.wait())
				buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/ninjalogo?apikey=${ApiLolh}&text1=${nin}&text2=${ja}`)
				baby.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break				
		case 'halloweentext':
		if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())				
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(ind.wrongf())
				ween = body.slice(15)
				if (ween.length > 10) return reply('Teksnya kepanjangan, maksimal 9 karakter')
				reply(ind.wait())
				buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/halloween?apikey=${ApiLolh}&text=${ween}`)
		    baby.sendMessage(from, buffer, image, {quoted: mek})
		    await limitAdd(sender)
		    break
			/*	case 'pornhub':
				if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				var gh = body.slice(9)
				var porn = gh.split("&")[0];
				var hub = gh.split("&")[1];
				if (args.length < 1) return reply(`「❗」Exemplo: ${prefix}pornhub link`)
				reply(ind.wait())
				buffer = await getBuffer(`https://naufalhoster.xyz/dl/pornhub?apikey=5exkHA-jNobuC-j4Q5Am&url=${porn}`)
				baby.sendMessage(from, buffer, image, {quoted: mek})
				await limitAdd(sender)
				break*/
                case 'gemboktext':
                if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					var gh = body.slice(12)
					var gem = gh.split("&")[0];
					var bok = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」Contoh : ${prefix}gemboktext NAKANO&MIKU`)
					reply(ind.wait())
					buffer = await getBuffer(`https://api.vhtear.com/padlock?text1=${gem}&text2=${bok}&apikey=${VhtearKey}`)
					baby.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'glitchtext':
                if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					var gh = body.slice(12)
					var gli = gh.split("&")[0];
					var tch = gh.split("&")[1];
					if (args.length < 1) return reply(`「❗」Exemplo: ${prefix}glitchtext NAKANO&MIKU`)
					reply(ind.wait())
					buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/glitch?apikey=${ApiLolh}&text1=${gli}&text2=${tch}`)
					baby.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
					break
				case 'tts':
				  if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return baby.sendMessage(from, `Qual o cód. da linguagem? Ex: ${prefix}tts pt mensagem`, text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return baby.sendMessage(from, `Cadê o texto mano? | Exemplo: ${prefix}tts pt sou bot Gugu`, text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply(ind.lmtalto())
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							baby.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
					break 
					case 'hora':
			    if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				  baby.sendMessage(from, `*Horário de Brasília:* ${jam}:${menit}:${detik} ${ampm}\n*Data:* ${day} - ${myMonths[bulan]} - ${year}\n\n*Horário de Portugal:* ${time2}`, text, { quoted: mek })
				  await limitAdd(sender)
					break
					case 'ttp':
		  		if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
          if (args.length == 0) return reply(`Use: ${prefix + command} mensagem\nExemplo: ${prefix + command} bodia`)
          txt = args.join(" ")
          buffer = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(q)}`)
          baby.sendMessage(from, buffer, sticker, {quoted: mek})
          await limitAdd(sender)
          break 
           case 'attp':
          if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isPrem) return reply(ind.premium())
					if (isLimitVip(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply(`_Cadê o texto amigo?_\n*Exemplo:* ${prefix}attp Gugu brabo 😎`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
				baby.sendMessage(from, attp2, sticker, {quoted: mek})
				break
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isPrem) return reply(ind.premium())
					if (isLimitVip(sender)) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} Gugu gostoso`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${ApiLolh}&text=${encodeURIComponent(q)}`)
                    baby.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'semoji':
                if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isPrem) return reply(ind.premium())
					if (isLimitVip(sender)) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${ApiLolh}`)
                    baby.sendMessage(from, ini_buffer, sticker, { quoted: mek})
                    await limitAdd(sender)
                    break
				case 'toimg':
			  if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (!isQuotedSticker) return reply(ind.erroimg())
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aqui está!'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break 
					case 'togif':
          if (!isQuotedSticker) return reply('Precisa marcar a figurinha')
          reply(ind.wait())
          if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
          const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
          const media = await baby.downloadAndSaveMediaMessage(encmedia)
          const upload = await uploadimg(media, Date.now() + '.webp')
          const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
          const buff = await getBuffer(rume.data.result)
          baby.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Aqui está!', quoted: mek})
          }
          await limitAdd(sender)
          break
                case 'speed':
                case 'ping':
                if (!isPublic) return reply(ind.publicoff())
				      	if (isBanned) return reply(ind.baned())	
				      	if (!isRegistered) return reply(ind.noregis())
                const timestamp = speed();
                const latensi = speed() - timestamp 
                speeds =`Speed: ${latensi.toFixed(4)} _ms_\nTotal Chat:  ${totalchat.length}\nVersão do WhatsApp: ${baby.user.phone.wa_version}\nUso de Memória: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 4096MB RAM`
                baby.sendMessage(from, speeds, text, { quoted: mek})
                break			
                case 'dolarhoje':
                case 'dolhoje':
                if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					      reply(ind.wait())
					      anu = await fetchJson(`https://economia.awesomeapi.com.br/json/all/usd`, {method: 'get'})
					      baby.sendMessage(from, `*${anu.USD.name}*\n*Maior valor*: ${anu.USD.high}\n*Menor valor*: ${anu.USD.low}\n*Data da alteração*: ${anu.USD.create_date}`, text, { quoted: mek})
					      break
                case 'btchoje':
                case 'bitcoinhj':
                case 'bitcoinhoje':
                  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					      reply(ind.wait())
					      anu = await fetchJson(`https://economia.awesomeapi.com.br/json/all/btc`, {method: 'get'})
					      baby.sendMessage(from, `*${anu.BTC.name}*\nMaior valor: ${anu.BTC.high}\nMenor valor: ${anu.BTC.low}\n*Data da alteração*: ${anu.BTC.create_date}`, text, { quoted: mek})
					      break
                case 'ethereumhoje':
                case 'ethhoje':
                case 'ethoje':
                  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					      reply(ind.wait())
					      anu = await fetchJson(`https://economia.awesomeapi.com.br/json/all/eth`, {method: 'get'})
					      baby.sendMessage(from, `*${anu.ETH.name}*\nMaior valor: ${anu.ETH.high}\nMenor valor: ${anu.ETH.low}\n*Data da alteração*: ${anu.ETH.create_date}`, text, { quoted: mek})
					      break
                case 'lirik':
                case 'letra':
                if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(limitend(pushname))
                reply(ind.wait())
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Letra da música: '+teks+' \n\nLetra:\n'+anu.result.lirik)
					await limitAdd(sender) 
					break 
                case 'report':
                case 'denuncia':
                case 'ticket':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                     const pesan = body.slice(8)
                     if (pesan.length < 1) return reply(ind.wronfg())
                      if (pesan.length > 300) return baby.sendMessage(from, 'Ocorreu um erro! O texto só pode conter até 300 caracteres apenas.', text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[REPORT]*\nNúmero: @${nomor.split("@s.whatsapp.net")[0]}\nMotivo: ${args.slice(0)}`
                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    baby.sendMessage('558186663773@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Reportado com sucesso! Enviarei sua mensagem ao meu dono. Obrigado pela ajuda.')
                    break
                case 'request':
                case 'sugest':
                case 'sugestao':
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                     const cfrr = body.slice(8)
                     if (cfrr.length < 1) return reply(ind.wronfg())
                      if (cfrr.length > 300) return baby.sendMessage(from, 'Ocorreu um erro! O texto só pode conter até 300 caracteres apenas.', text, {quoted: mek})
                        var nomor = mek.participant
                       const ress = `*[SUGESTAO]*\nNúmero : @${nomor.split("@s.whatsapp.net")[0]}\nSugestão: ${cfrr}`
                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    baby.sendMessage('558186663773@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Sugestão enviado com sucesso! Enviarei sua mensagem ao meu dono. Obrigado pela sugestão, meu dono irá tentar executar o pedido. :)')
                    break
                case 'bikinquote':
                if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                var gh = body.slice(12)
					var quote = gh.split("&")[0];
					var wm = gh.split("&")[1];
					const pref = `yang mau dijadiin quote apaan, titit?\n\ncontoh : ${prefix}bikinquote nakano&miku`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					baby.sendMessage(from, buffer, image, {caption: 'Pronto >_<', quoted: mek})
					await limitAdd(sender)
					break
                   case 'stalkig':
                   if (!isPublic) return reply(ind.publicoff())
                   if (isBanned) return reply(ind.baned())
                   if (!isRegistered) return reply(ind.noregis())
                   if (isLimit(sender)) return reply(ind.limitend(pushname))
                     teks = body.slice(7)
                     if (args.length < 1) return reply(ind.wronfg())
                     reply(ind.wait())
                     anu = await fetchJson(`https://videfikri.com/api/igstalk/?username=${teks}`)
                     reply('「❗」Estou procurando pelo perfil, por gentileza, aguarde um momento.')
                     buffer = await getBuffer(anu.result.profile_hd)
                     hasil = `*PESQUISADO O PERFIL DE: ${teks}*\n*AQUI ESTA O RESULTADO:* \n\n *Usuário*: _${anu.result.username}_ \n *Nome*: _${anu.result.full_name}_ \n *Seguidores*: _${anu.result.followers}_ \n *Seguindo*: _${anu.result.following}_ \n*Privado*: ${anu.result.is_private} \n*Verificado*: ${anu.result.is_verified} \n *Posts*: _${anu.result.post_count}_ \n *Biografia*: _${anu.result.bio} \n*Mostrar Perfil Sugerido*: ${anu.result.show_suggested_profile} \n*Link Externo*: ${anu.result.external_url}`
                    baby.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender)
			       break 
				case 'daftar':
				case 'registro':
			        	if (isBanned) return reply(ind.baned())
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('A idade deve ser um número!')
                if (namaUser.length < 1) return reply(ind.wrongf())
                if (namaUser.length >= 30) return reply(`Nome inválido, máximo 30 caracteres`)
                if (umurUser > 40) return reply(`Precisa ter no máximo 40 anos.`)
            		if (umurUser < 10) return reply(`Precisa ter no mínimo 10 anos.`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nome:', color(namaUser, 'cyan'), 'Idade:', color(umurUser, 'cyan'), 'RG:', color(serialUser, 'cyan'), 'em', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nome:', color(namaUser, 'cyan'), 'Idade:', color(umurUser, 'cyan'), 'RG:', color(serialUser, 'cyan'))
                }
					break
		case 'silktext':
		  if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))				
				silk = body.slice(9)
				if (silk.length > 7) return reply('Teksnya kepanjangan, maksimal 6 karakter')
				reply(ind.wait())
				buffer = await getBuffer(`https://api.vhtear.com/silktext?text=${silk}&apikey=${VhtearKey}`)
		    baby.sendMessage(from, buffer, image, {quoted: mek})
		    await limitAdd(sender)	
		    break
// PREMIUM
				case 'premiumlist':
				case 'listavip':
				case 'listvip':
				case 'viplist':
				case 'viplista':
				  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					baby.updatePresence(from, Presence.composing) 
                    if (!isRegistered) return reply(ind.noregis())
					teks = `╭─「 *LISTA DE USUÁRIOS VIP* 」\n`
					no = 0
					for (let prem of premium) {
						no += 1
						teks += `│「${no.toString()}」 @${prem.split('@')[0]}\n`
					}
					teks += `│ Total De Usuários Vip: ${premium.length}\n╰──────「 *${botName}* 」`
					baby.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
				/*case 'bokep':
				  if (!isPublic) return reply(ind.publicoff())
				baby.updatePresence(from, Presence.composing) 
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
				 data = fs.readFileSync('./src/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply('JANGAN COMLY MULU BRO')
                 randTeks = randKey.teks
                 baby.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break*/
				case 'mutual':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
                if (isGroup) return  reply( 'Esse comando é exclusivo do pv')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Espero que dê certo >_<')
                await reply( `Par encontrado: wa.me/${anug}\n*${prefix}next* — Encontre um novo amor.`)
                await limitAdd(sender)
            break
            case 'next':
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
                if (isGroup) return  reply( 'Esse comando é exclusivo do pv')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Espero que dê certo >_<')
                await reply( `Par encontrado: wa.me/${anug}\n*${prefix}next* — Encontre um novo amor`)
                await limitAdd(sender)
                break
            case 'nickff': 
                 if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					baby.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=apivinz`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
                case 'blowjob':
                  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://waifu.pics/api/nsfw/blowjob`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						baby.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break  
					case 'kill':
                  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://waifu.pics/api/sfw/kill`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						baby.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'nangis':
                case 'choro':
                case 'cry':
                  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://waifu.pics/api/sfw/cry`, {method: 'get'})
					reply(ind.wait())
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						baby.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'beijo':
					case 'kiss':
					  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (!isNsfw) return reply(ind.nsfwoff())
        if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://waifu.pics/api/sfw/kiss`, {method: 'get'})
					reply(ind.wait())
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						baby.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':
					case 'abraco':
					  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`http://api.lolhuman.xyz/api/random/hug?apikey=${ApiLolh}`, {method: 'get'})
					reply(ind.wait())
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						baby.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'hidetag5':
					  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					if (!isGroup) return reply(ind.groupo())
					var value = body.slice(10)
					var group = await baby.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					baby.sendMessage(from, options, text)
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	        await limitAdd(sender)
					break
					case 'hidetag10':
					  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					if (!isGroup) return reply(ind.groupo())
					var value = body.slice(11)
					var group = await baby.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					baby.sendMessage(from, options, text)
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})
	                .then(() => {baby.sendMessage(from, options, text)})	       
	        await limitAdd(sender)
					break 
					case 'waifu':
        if (!isPublic) return reply(ind.publicoff())
        if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (!isNsfw) return reply(ind.nsfwoff())
          if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					gatauda = body.slice(6)
					reply(ind.wait())
					data = await fetchJson('http://docs-jojo.herokuapp.com/api/waifu')
					hasil = await getBuffer(data.image)
					baby.sendMessage(from, hasil, image, {quoted: mek})
					await limitAdd(sender)
					break
                case 'hentai':
                  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
				  ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/nsfw/hentaigif?apikey=alpin1`, {method: 'get'})
					reply(ind.wait())
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						baby.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'delete':
					case 'del':
					case 'apagar':
					if (!isGroup)return reply(ind.group())
          if (!isRegistered) return reply(ind.noregis())
					if (!isGroupAdmins)return reply(ind.admin())
					baby.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
// PREMIUM		    								
/*
]=====> GABUTZ MENU <=====[
*/
					case 'pic1':
			  if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isOwner) return reply(ind.ownerb())
					data = fs.readFileSync('./database/game/tebakkata.js');
        tebak = JSON.parse(data);
				kata = Math.floor(Math.random() * tebak.length);
				randKey = tebak[kata];
				Pertanyaan = '*➸ Pergunta:* \n```'+randKey.result.soal +'```'
					setTimeout( () => {
					baby.sendMessage(from, '*➸ Resposta:* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_Waktu Anda Habis_')
					}, 29000)
					setTimeout( () => {
					baby.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, Pertanyaan, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
					case 'pic':
          if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isOwner) return reply(ind.ownerb())
				data = fs.readFileSync('./database/game/family100.js');
        fami = JSON.parse(data);
				ly100 = Math.floor(Math.random() * fami.length);
				randKey = fami[ly100];
				Pertanyaan = randKey.result.soal
					setTimeout( () => {
					baby.sendMessage(from, '*➸ Resposta :* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
					}, 35000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_O tempo está acabando, falta apenas 5 segundos! Já advinhou?_ 👀')
					}, 30000)
					setTimeout( () => {
					baby.sendMessage(from, '_10 segundos_', text) // ur cods
					}, 25000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_20 segundos_', text) // ur cods
					}, 15000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '_30 segundos_', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					baby.sendMessage(from, '*➸ Pergunta:* '+ Pertanyaan, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break
				case 'bisakah':
				  if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					bisakah = body.slice(8)
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky','Gak Bisa Ajg Aowkwowk','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					baby.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'kapankah':
				  if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					kapankah = body.slice(9)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					baby.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'apakah':
             if (!isPublic) return reply(ind.publicoff())
           if (isBanned) return reply(ind.baned())
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pushname))
					apakah = body.slice(7)
					const apa =['Iya','Tidak','Bisa Jadi','Ulangi bro gak paham']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					baby.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'rate':
				case 'chance':
				  if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					rate = body.slice(1)
					if (args.length < 1) return reply(ind.wronfg())
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					baby.sendMessage(from, 'Pergunta: *'+rate+'*\n\nChance: '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'hobby':
             if (!isPublic) return reply(ind.publicoff())
           if (isBanned) return reply(ind.baned())
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pushname))
					hobby = body.slice(6)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					baby.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
case 'neon':
  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}neontext NakanoMiku`)
neon = body.slice(5)
reply(ind.wait())
anu = await getBuffer(`http://api.lolhuman.xyz/api/textprome/neon?apikey=${ApiLolh}&text=${neon}`)
baby.sendMessage(from, anu, image, {quoted: mek})
await limitAdd(sender)
break					
case 'greenneon':
case 'greeneon':
  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}neontext NakanoMiku`)
neon = body.slice(10)
reply(ind.wait())
anu = await getBuffer(`http://api.lolhuman.xyz/api/textprome/greenneon?apikey=${ApiLolh}&text=${neon}`)
baby.sendMessage(from, anu, image, {quoted: mek})
await limitAdd(sender)
break			
case 'advanceglow':
  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}neontext NakanoMiku`)
neon = body.slice(12)
reply(ind.wait())
anu = await getBuffer(`http://api.lolhuman.xyz/api/textprome/advanceglow?apikey=${ApiLolh}&text=${neon}`)
baby.sendMessage(from, anu, image, {quoted: mek})
await limitAdd(sender)
break	
           case 'nivelgay':
				if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				gay = body.slice(9)
				const ga1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const ya1 = ga1[Math.floor(Math.random() * ga1.length)]
				baby.sendMessage(from, `*Veja seu nível gay* ${gay}\n\n`+ya1+`% gay`, text, { quoted: mek })
				await limitAdd(sender)
				break	
					case 'gay':
				if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				gay = body.slice(4)
				const ga =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
				const ya = ga[Math.floor(Math.random() * ga.length)]
				baby.sendMessage(from, `*Veja seu nível gay* ${gay}\n\n`+ya+`% gay`, text, { quoted: mek })
				await limitAdd(sender)
				break				
				case 'gay2':
				if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
				if (args.length < 1) return reply('_Marque alguem ou use algum nome_')
				rate = body.slice(4)
				persengayy = ["*4%*\n\n*Baixíssimo a possibilidade de ser gay*","*9%*\n\n*Muuuiiitooo pouco gay*","*17%*\n\nCoé mano, jurava que você era 100% hétero","*28%*\n\n*Alguém permanece sendo hominho*","*34%*\n\nParece que temos um meio termo aqui 🤭","*48%*\n\nAlguém aqui é hominho ainda, porém, tenho minhas dúvidas 👀","*59%*\n\nnem muito gay e nem pouco gay, no equilíbrio 🥳","*62%*\n\nAlguém pulou a cerca e mirou nos viadoskkkkk","*74%*\n\n*Ué mano, não era tu que eu vi semana passada na paulista? tava trampando né kkk de boa*","83%\n\nAlguém anda dando a rosca na esquina kkkkkkk","97%\n\nxiiiii alguém aqui é boiolinha com alta probabilidade 👀","100%\n\nEsse claramente queima a rosca, 100% gaykkkkk hummmm boiola","29%\n\nehhhh alguém ainda é hominho","94%\n\nOpaaaaa temos um gay semi oficial aqui kkkkkk","75%\n\nNem muito gay e nem pouco gay, apenas um equilíbrio (sqn)","82%\n\nXiii alguém aqui é 👀","41%\n\nHuuummm então ele é? 🤔","39%\n\nAlguém anda queimando a rosca 👀","*0%*\n\nAo menos alguém aqui tem que ser homem, não é mesmo? 😏"]
				const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
				baby.sendMessage(from, 'Porcentagem Gay: *'+rate+'*\n\nResposta: '+kl+'', text, { quoted: mek })
				await limitAdd(sender) 
				break  
                case 'vdd':
                case 'verdade':
                  if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOPulQa06zFYBjHml6ixWkTjxLu5l5FPJ3g&usqp=CAU`)
					baby.sendMessage(from, truteh, image, { caption: '*Verdade*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
                case 'dsf':
                case 'desafio':
                  if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot 🤥 setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (seráh di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					desafio = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbOPulQa06zFYBjHml6ixWkTjxLu5l5FPJ3g&usqp=CAU`)
					baby.sendMessage(from, desafio, image, { quoted: mek, caption: '*Desafio*\n\n'+ der })
					await limitAdd(sender)
					break
                  case 'timer':
                  case 'tempo':
                  case 'alarme':
                    if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (args[1]=="s") {var timer = args[0]+"000"
				} else if (args[1]=="m") {var timer = args[0]*"60000"
				} else if (args[1]=="h") {var timer = args[0]*"3600000"
				} else {return reply("*Use:*\n''s'' para segundos\n''m'' para minutos\n''h'' para horas")}
				setTimeout( () => {
				reply("Tempo esgotado!")
				}, timer)
				await limitAdd(sender)
				break						   
/*
]=====> MENU GRUP <=====[
*/		 
				case 'welcome':
				case 'bemvindo':
				case 'bv':
				  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(ind.bv())
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*As boas-vindas já está ativado*')
						welkom.push(from)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「SUCESSO」 ATIVADO MODO BEM-VINDO*')
					} else if (Number(args[0]) === 0) {
					  if (!isWelkom) return reply('*As boas-vindas já está desativado*')
						welkom.splice(from, 1)
						fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
						reply('*「SUCESSO」 DESATIVADO MODO BEM-VINDO*')
					} else {
						reply('erro')
					}
					break
case 'blackpink':
  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}blackpink NakanoMiku`)
pink = body.slice(10)
reply('「❗」Hah Blekping :v')
lol = await getBuffer(`http://api.lolhuman.xyz/api/textprome/blackpink?apikey=${ApiLolh}&text=${pink}`)
baby.sendMessage(from, lol, image, {quoted: mek})
await limitAdd(sender)
break					
                 case 'event':
                   if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())                 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Precisa colocar 1 ou 0.')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Evento já está ativo*')
						event.push(from)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*「SUCESSO」 MENGAKTIFKAN EVENT DI GROUP*')
					} else if (Number(args[0]) === 0) {
					  if (!isEventon) return reply('*Evento já está desativado*')
						event.splice(from, 1)
						fs.writeFileSync('./database/group/event.json', JSON.stringify(event))
						reply('*「SUCESSO」 MEMATIKAN EVENT DI GROUP*')
					} else {
						reply(ind.satukos())
					}
					break
                case 'leveling':
                  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply(ind.satukos())
                if (Number(args[0]) === 1) {
                    if (isLevelingOn) return reply('*O sistema de level já está ativo*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (Number(args[0]) === 0) {
                  if (!isLevelingOn) return reply('*O sistema de level já está desativado*')
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
				case 'antispam':
				  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Use "atv" para habilitar e "dstv" para desabilitar')
					if ((args[0]) === 'atv') {
						if (isAntiVirtex) return reply('Modo anti trava já está ativado')
						_antivirtex.push(from)
						fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(_antivirtex))
						reply(`*「SUCESSO」 ATIVADO MODO ANTI TRAVA*`)
					} else if ((args[0]) === 'dstv') {
						if (!isAntiVirtex) return reply('Modo anti trava já está desativado')
						_antivirtex.splice(from, 1)
						fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(_antivirtex))
						reply(`*「SUCESSO」 DESATIVADO MODO ANTI TRAVA*`)
					} else {
						reply('Use "atv" para habilitar e "dstv" para desabilitar')
					}
					break 
					case 'antiporn':
					case 'antiporno':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply('Ketik 1 untuk Mengaktifkan Anti Porno\nContoh : ${prefix}antiporn 1')
					if (Number(args[0]) === 1) {
						if (isAntiPorn) return reply('UDAH NYALA KAK')
						antiporn.push(from)
						fs.writeFileSync('./database/group/antiporn.json', JSON.stringify(antiporn))
						reply('SUKSES MENGAKTIFKAN ANTI PORNO DI GRUP')
						baby.sendMessage(from,`ALLERT!!! Jika bukan admin jangan kirim Hal yg Mengandung Porno`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiPorn) return reply('EMANG AKTIF?')
						var ini = anti.botLangsexOf(from)
						antiporn.splice(ini, 1)
						fs.writeFileSync('./database/group/antiporn.json', JSON.stringify(antiporn))
						reply('SUKSES MEMATIKAN ANTI PORNO DI GROUP')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					case 'antitrava':
				  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Use "atv" para habilitar e "dstv" para desabilitar')
					if ((args[0]) === 'atv') {
						if (isAntiVirtex2) return reply('Modo anti-trava já está ativado')
						_antivirtex2.push(from)
						fs.writeFileSync('./database/group/antitrava.json', JSON.stringify(_antivirtex2))
						reply(`*「SUCESSO」 ATIVADO MODO ANTI-TRAVA*`)
					} else if ((args[0]) === 'dstv') {
						if (!isAntiVirtex2) return reply('Modo anti-trava já está desativado')
						_antivirtex2.splice(from, 1)
						fs.writeFileSync('./database/group/antitrava.json', JSON.stringify(_antivirtex2))
						reply(`*「SUCESSO」 DESATIVADO MODO ANTI-TRAVA*`)
					} else {
						reply('Use "atv" para habilitar e "dstv" para desabilitar')
					}
					break
				case 'simih':
				  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(ind.satukos())
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('*JA ESTOU ATIVO!*')
						samih.push(from)
						fs.writeFileSync('./database/group/simi.json', JSON.stringify(samih))
						reply('*「SUCESSO」 SIMI FOI ATIVADO! QUALQUER COISA DITA SERA RESPONDIDA.*')
					} else if (Number(args[0]) === 0) {
					  if (!isSimi) return reply('*JA ESTOU DESABILITADO!*')
						samih.splice(from, 1)
						fs.writeFileSync('./database/group/simi.json', JSON.stringify(samih))
						reply('*「SUCESSO」 SIMI FOI DESATIVADO! NAO RESPONDEREI MAIS 😔*')
					} else {
						reply(ind.satukos())
					}
					break 
				case 'nsfw':
				  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply(ind.satukos())
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('JA ESTOU ATIVO!')
						nsfw.push(from)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「SUCESSO」 MODO NSFW FOI ATIVADO*')
					} else if (Number(args[0]) === 0) {
					  if (!isNsfw) return reply('JA ESTOU DESABILITADO!')
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/group/nsfw.json', JSON.stringify(nsfw))
						reply('*「SUCESSO」 MODO NSFW FOI DESATIVADO*')
					} else {
						reply(ind.satukos())
					}
					break
          case 'antilink':
          if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply(ind.satukos())
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('JÁ ESTOU ATIVO!')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「SUCESSO」ANTILINK ATIVADO!')
						baby.sendMessage(from,`*ATENÇÃO, QUALQUER MEMBRO SEM ADM QUE ENVIAR LINK DE GRUPO, SERÁ REMOVIDO!*`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('JÁ ESTOU DESATIVADO!')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('「SUCESSO」ANTILINK DESATIVADO!')
					} else {
						reply(ind.satukos())
					}
					break
					case 'porno':
          if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply(ind.satukos())
					if (Number(args[0]) === 1) {
						if (isPorno) return reply('JÁ ESTOU ATIVO!')
						porno.push(from)
						fs.writeFileSync('./database/group/porno.json', JSON.stringify(porno))
						reply('「SUCESSO」PORNO LIBERADO!')
						baby.sendMessage(from,`*Modo porno ativado! Agora é permitido o uso dos comandos +18*`, text)
					} else if (Number(args[0]) === 0) {
						if (!isPorno) return reply('JÁ ESTOU DESATIVADO!')
						porno.splice(from, 1)
						fs.writeFileSync('./database/group/porno.json', JSON.stringify(porno))
						reply('「SUCESSO」PORNO PROIBIDO!')
					} else {
						reply(ind.satukos())
					}
					break 
					case 'antifake':
					try {
					if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply(ind.satukos())
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Já está ativo')
						antifake.push(from)
						fs.writeFileSync('./database/group/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
					  if (!isAntiFake) return reply('Já está desativado')
						antifake.splice(from, 1)
						fs.writeFileSync('./database/group/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply(ind.errado())
					}
                break
          case 'antigrupo':
          if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())					
					if (args.length < 1) return reply(ind.satukos())
					if (Number(args[0]) === 1) {
						if (isAntiGrupo) return reply('JÁ ESTOU ATIVO!')
						antigrupo.push(from)
						fs.writeFileSync('./database/group/antigrupo.json', JSON.stringify(antigrupo))
						reply('「SUCESSO」ANTIGRUPO ATIVADO!')
						baby.sendMessage(from,`*ATENÇÃO, QUALQUER MEMBRO SEM ADM QUE ENVIAR LINK DE GRUPO, SERÁ REMOVIDO!*`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiGrupo) return reply('JÁ ESTOU DESATIVADO!')
						antigrupo.splice(from, 1)
						fs.writeFileSync('./database/group/antigrupo.json', JSON.stringify(antigrupo))
						reply('「SUCESSO」ANTIGRUPO DESATIVADO!')
					} else {
						reply(ind.satukos())
					}
					break
case 'spamchat':
if (!isOwner) return reply(ind.ownerb()) 
if (args < 2) return reply(`*Parâmetro inválido!*\nModelo: ${prefix + command} número qnt mensagem\nExemplo: ${prefix + command} 17372213845 7 qualquer coisa`)
nomer = args[0]
jub = args[1]
motivo = args[2]
for ( let i = 0 ; i < jub; i++) {
baby.sendMessage( nomer + '@s.whatsapp.net' , motivo , text)
}  
break 
				case 'admin':
				  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (!isGroup) return reply(ind.groupo())
					teks = `*LISTA DE ADM* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					await limitAdd(sender)
					break 
					case 'lb':
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *CLASSIFICAÇÃO DE NÍVEL* ]----\n\n'
				let leaderboarduang = '-----[ *CLASSIFICAÇÃO DE PONTOS* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
					leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Pontos*: _${uang[i].uang}_\n◪  *Limite*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`Precisa ter no mínimo, 10 cadastros no banco de dados`)
				}
				await limitAdd(sender)
				break
					case 'grup':
					case 'group':
					case 'grupo':
					  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'abrir') {
					    reply(`*GRUPO ABERTO*`)
						baby.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'fechar') {
						reply(`*GRUPO FECHADO*`)
						baby.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break 
          case 'groupinfo':
          case 'grupoinfo':
          case 'infogrupo':
          case 'infogp':
            try {
				if (!isRegistered) return reply( ind.noregis())
                baby.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(ind.group())
                ppUrl = await baby.getProfilePicture(from) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
			    var nsfw1 = nsfw.includes(from)
		        baby.sendMessage(from, buffer, image, {quoted: mek, caption: `*Nome*: ${groupName}\n*Membros*: ${groupMembers.length}\n*Admin*: ${groupAdmins.length}\n\n*Descrição*: ${groupDesc}`})
            } catch (err) {
				console.error(err)
				await reply(`Precisa ter uma imagem no grupo.`)
				}
                break 
			case 'closetime': 
			case 'fechartime':
			case 'fechatime':
			case 'fechartmp':
			case 'fechatmp':
					if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
              baby.updatePresence(from, Presence.composing) 
        if (args[1]=="s") {var timer = args[0]+"000"
				} else if (args[1]=="m") {var timer = args[0]*"60000"
				} else if (args[1]=="h") {var timer = args[0]*"3600000"
				} else {return reply('*Use:*\n"s" para segundos\n"m" para minutos\n"h" para horas\n\n*Exemplo*\n_fechatmp 10 s')}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `*Concluído!* Comando executado por: @${nomor.split("@s.whatsapp.net")[0]}\nAgora *somente os adm* podem mandar mensagem.`,
					contextInfo: { mentionedJid: [nomor] }
					}
					baby.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
				case 'opentime': 
				case 'abrirtime':
				case 'abretmp':
				case 'abrirtmp':
				case 'abretime':
					if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
              baby.updatePresence(from, Presence.composing) 
        if (args[1]=="s") {var timer = args[0]+"000"
				} else if (args[1]=="m") {var timer = args[0]*"60000"
				} else if (args[1]=="h") {var timer = args[0]*"3600000"
				} else {return reply('*Use:*\n"s" para segundos\n"m" para minutos\n"h" para horas\n\n*Exemplo*\n_abretmp 10 s')}
				setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: `*Concluido!* Comando executado por: @${nomor.split("@s.whatsapp.net")[0]}\nAgora *todos os membros* podem mandar mensagem.`,
					contextInfo: { mentionedJid: [nomor] }
					}
					baby.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break
				case 'add':
				case 'adc':
				  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (isNaN(args[0])) return reply(`Deve incluir apenas números`)
					if (args.length < 1) return reply('Informe o número que deseja adc ao grupo! ex: 55119863738628 (esse número não existe, eu acho)')
					if (args[0].startsWith('08')) return reply('Qual o código do país amigo? Se for +55, coloque apenas 55 no início')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						baby.groupAdd(from, [num])
					} catch (e) {
						console.log('Erro:', e)
						reply('Infelizmente esse perfil é privado, impossível adicioná-lo :/')
					}
					await limitAdd(sender)
					break
			     	case 'kick':
			     	case 'remover':
			     	  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(ind.mencao())
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Removendo o lixo do grupo :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						baby.groupRemove(from, mentioned)
					} else {
						mentions(`Expulsando @${mentioned[0].split('@')[0]} a mando do adm. Até nunca mais 😈`, mentioned, true)
						baby.groupRemove(from, mentioned)
					}
					break
                    case 'filtro':
                   if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Use "atv" para habilitar, "dstv" para desabilitar')
                if (args[0] === 'atv') {
                if (isBadWord) return reply('anti palavrão já on')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   reply('✓Ativado com sucesso o recurso de Filtro.')
              	  } else if (args[0] === 'dstv') {
                    	if (!isBadWord) return reply('anti palavrão já off')
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    reply(`✓ Desativado com sucesso o recurso de Filtro`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
                    case 'addfiltro':
                    if (!isOwner) return reply(ind.ownerb())
                    if (args.length < 1) return reply( `Enviar filtro ${prefix}addfiltro [mensagem].\nExemplo: ${prefix}addfiltro cuzao`)
                    const bw = body.slice(11)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Sucesso em adicionar filtro!')
                    break
                    case 'delfiltro':
                    if (!isOwner) return reply(ind.ownerb())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}delbadword [kata kasar]. contoh ${prefix}delbadword bego`)
                    let dbw = body.slice(10)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Sucesso em excluir filtro!')
                    break 
                case 'filtrolista':
                case 'filtrolist':
                case 'filterlist':
                case 'listfilter':
                case 'listafiltro':
                  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
                    let lbw = `Esta e uma lista de palavras ruins\nTotal: ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break
                case 'anuncio':
                  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())                
                if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isPrem) return reply(ind.premium())
					if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					var value = body.slice(9)
					var group = await baby.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					baby.sendMessage(from, options, text)
					await limitAdd(sender)
					break					
					case 'tagsticker':
                    if (!isOwner) return reply(ind.ownerb())
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await baby.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await baby.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        baby.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Precisa marcar a figurinha desejada`)
                    }
                    break
                case 'level':
                  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())                
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━━━━━♡ *LEVEL* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NOME: ${pushname}\n┃│➸ NÚMERO: wa.me/${sender.split("@")[0]}\n┃│➸ XP: ${userXp}/${requiredXp}\n┃│➸ LEVEL: ${userLevel}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
               baby.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Erro!\n${err}`)
                    })
					break
                 case 'linkgp':
                 case 'linkgrupo':
                   if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))                
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pushname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await baby.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink do Grupo *${groupName}*`
				    baby.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'tagall':
				case 'marcartodos':
				case 'marcartds':
				  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `➸ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					await limitAdd(sender)
					break
           case 'setname':
             if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                baby.groupUpdateSubject(from, `${body.slice(9)}`)
                baby.sendMessage(from, `⟪ SUCESSO ⟫ Alterado o nome do grupo\n*Para:* ${args.slice(0)}`, text, {quoted: mek})
                await limitAdd(sender)
					break
                case 'setdesc':
                  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                baby.groupUpdateDescription(from, `${body.slice(9)}`)
                baby.sendMessage(from, `⟪ SUCESSO ⟫ Alterado a descrição do grupo\n*Para* ${args.slice(0)}`, text, {quoted: mek})
                await limitAdd(sender)
					break 
					case 'setft':
	             if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				reply(ind.wait())
        media = await baby.downloadAndSaveMediaMessage(mek)
        await baby.updateProfilePicture (from, media)
        reply(`\`\`\`Foto do grupo foi alterado com sucesso\`\`\``)
        await limitAdd(sender)
        break
           case 'demote':
           case 'removeradm':
           case 'removeadm':
           case 'deladm':
             if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(ind.mencao)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*removendo da adm*🏃:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						baby.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Pronto, agora o(a) *@${mentioned[0].split('@')[0]}* não é mais adm do grupo 🏃`, mentioned, true)
						baby.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
				case 'daradm':
				case 'daadm':
				case 'addadm':
				  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(ind.mencao)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Aeee 🥳 Agora você e adm >_< :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						baby.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Aeee 🥳 *@${mentioned[0].split('@')[0]}* agora você é adm`, mentioned, true)
						baby.groupMakeAdmin(from, mentioned)
					}
					break
				case 'hedsot':
				  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('O alvo precisa ser marcado!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Alvo abatido:\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						baby.groupRemove(from, mentioned)
						mentions(teks, mentioned, true)
						baby.groupAdd(from, [num])
					} else {
						mentions(`Alvo na mira! O @${mentioned[0].split('@')[0]} pronto para ser abatido!`, mentioned, true)
						baby.groupRemove(from, mentioned)
						}
						await limitAdd(sender)
					break
                 case 'fake':
                   if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					if (!isGroup) return reply(ind.groupo())                 
				if (args.length < 1) return reply(`Use: ${prefix}fake @marquealguem&mensagem1&mensagem2\n\nExemplo: ${prefix}fake @Gustavo&oi&oi gustavo`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("&")[0];
					var target = gh.split("&")[1];
					var bot = gh.split("&")[2];
					baby.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					await limitAdd(sender)
					break
                      case 'leave':
                      case 'sair':
                        if (!isPublic) return reply(ind.publicoff())
                      if (isBanned) return reply(ind.baned())      
                      if (!isRegistered) return reply(ind.noregis())           
                      if (!isGroup) return reply(ind.groupo())
                      if (!isGroupAdmins) return reply(ind.admin())
                      setTimeout( () => {
                      baby.groupLeave (from) 
                      }, 2000)
                      setTimeout( () => {
                      baby.updatePresence(from, Presence.composing) 
                      if (!isRegistered) return reply(ind.noregis())
                      if (isBanned) return reply(ind.baned())   
                      baby.sendMessage(from, 'Saindo do grupo 😔', text)
                      }, 0)
                      break																									
/*
]=====> DOWNLOAD MENU <=====[
*/
                     case 'play':
                       try {
                       if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                if (args.length == 0) return reply(`Examplo: ${prefix + command} nome da música`)
                reply(ind.wait())
                play = body.slice(5)
                anu = await fetchJson(`https://videfikri.com/api/ytplay/?query=${play}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                infomp3 = `╭─「 *TIMELINE PLAY MP3* 」\n│• *Título:* ${anu.result.title}\n│• *Canal:* ${anu.result.channel}\n│• *Tamanho:* ${anu.result.size}\n│\n│*Espere um momento para ser enviado*\n│ *USE OS COMANDOS COM MODERACAO, PODE DEMORAR UM POUCO PARA RECEBER*\n╰─────────────────────`
                buffer = await getBuffer(anu.result.thumbnail)
                baby.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                lagu = await getBuffer(anu.result.url)
                baby.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
            } catch (e) {
						console.log(`Erro:`, color(e,'red'))
						reply(ind.errado())
					}
					await limitAdd(sender)
                break			
                case 'play2':
					  if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
		        		if (!isRegistered) return reply(ind.noregis())
		        		if (isLimit(sender)) return reply(ind.limitend(pushname))
		        		if (args.length == 0) return reply(`Examplo: ${prefix + command} nome da música`)
				reply(ind.wait())
				play = body.slice(6)
				anu = await fetchJson(`https://xinzbot-api.herokuapp.com/api/ytplaymp3/?q=${play}&apikey=XinzBot`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*AQUI ESTA SEU AUDIO MP3*\nTítulo: ${anu.result.title}\nTamanho: ${anu.result.filesize}\n│\n│ *Espere um momento para ser enviado.*\n│ *USE OS COMANDOS COM MODERACAO, CASO O _PLAY2 NAO FUNCIONE, TENTE O _PLAY OU _PLAY3. PODE DEMORAR UM POUCO PARA RECEBER*\n╰─────────────────────`
				buffer = await getBuffer(anu.result.thumbnail)
				baby.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.link)
				baby.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)
				break 
                case 'play3':
                if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
		        		if (!isRegistered) return reply(ind.noregis())
		        		if (!isPrem) return reply(ind.premium())
		        		if (isLimitVip(sender)) return reply(ind.limitend(pushname))
		        		if (args.length == 0) return reply(`Examplo: ${prefix + command} nome da música`)
				reply(ind.wait())
				play = body.slice(6)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*AQUI ESTA SEU AUDIO MP3*\nTítulo: ${anu.result.title}\nLink: https://youtu.be/${anu.result.id}\nTamanho: ${anu.result.size}\n│\n│ *Espere um momento para ser enviado.*\n│ *USE OS COMANDOS COM MODERACAO, CASO O _PLAY2 NAO FUNCIONE, TENTE O _PLAY OU _PLAY3. PODE DEMORAR UM POUCO PARA RECEBER*\n╰─────────────────────`
				buffer = await getBuffer(anu.result.thumbnail)
				baby.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				lagu = await getBuffer(anu.result.url_audio)
				baby.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)
				break 
                    case 'play4':   
                if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
		        		if (!isRegistered) return reply(ind.noregis())
		        		if (isLimit(sender)) return reply(ind.limitend(pushname))
				        if (args.length == 0) return reply(`Examplo: ${prefix + command} nome da música/vídeo`)
                baby.sendMessage(from, ind.wait(), text,{quoted : mek})
				play = body.slice(5)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${args.slice(0)}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = ` *VÍDEO ENCONTRADO!!!*
				
Nome: ${anu.result.title}
Link: ${anu.result.source}
				
*_Enviando..._*`
				buffer = await getBuffer(anu.result.thumbnail)
				baby.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				buffer1 = await getBuffer(anu.result.url_video)
				setTimeout( () => {
				baby.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:mek, caption: 'Aqui está!'})
				}, 10)
				await limitAdd(sender)
					break 
					case 'play5':
				      	if (!isPublic) return reply(ind.publicoff())
                if (isBanned) return reply(ind.baned())
		        		if (!isRegistered) return reply(ind.noregis())
		        		if (!isPrem) return reply(ind.premium())
		        		if (isLimitVip(sender)) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Examplo: ${prefix + command} nome da música`)
                    reply(ind.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=${ApiLolh}&query=${args.slice(0)}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Título : ${get_info.title}\n`
                    ini_txt += `Postado por: ${get_info.uploader}\n`
                    ini_txt += `Duração: ${get_info.duration}\n`
                    ini_txt += `Visualizações: ${get_info.view}\n`
                    ini_txt += `Gostei: ${get_info.like}\n`
                    ini_txt += `Não gostei: ${get_info.dislike}\n`
                    ini_txt += `Descrição:\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    baby.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    baby.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek })
                    get_video = await getBuffer(get_result.video[0].link)
                    baby.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: mek })
                    await limitAdd(sender)
                    break 
                case 'ytmp4':
          try {
          if (!isPublic) return reply(ind.publicoff())
          if (isBanned) return reply(ind.baned())
			   	if (!isRegistered) return reply(ind.noregis())
			   	if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (args.length < 1) return reply('Cadê o url mano?')
					if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply('link errado')
					anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${args[0]}&apikey=apivinz`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `╭─「 *AQUI ESTÁ SEU VÍDEO* 」\n│\n│• *Título:* ${anu.result.title}\n│• *Tamanho:* ${anu.result.size}\n│• *Link:* https://www.youtu.be/${anu.result.id}\n│\n│ Tunggu Sebentar 1 menit Mungkin Agak Lama \n│ Karna Mendownload Video\n╰─────────────────────`
					buff = await getBuffer(anu.result.thumbnail)
					reply(ind.wait())
					buffer = await getBuffer(anu.result.url_video)
					baby.sendMessage(from, buff, image, {quoted: mek, caption: ytt})
					baby.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek, caption: 'Aqui mano'})
          } catch (e) {
						console.log(`Erro:`, color(e,'red'))
						reply(ind.errado())
					}
					await limitAdd(sender)
					break 
					case 'ytmp42':
					if (!isPublic) return reply(ind.publicoff())
          if (isBanned) return reply(ind.baned())
			   	if (!isRegistered) return reply(ind.noregis())
			   	if (!isPrem) return reply(ind.premium())
			   	if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					if (args.length < 1) return reply('Onde está o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('link errado')
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					reply(ind.wait())
					teks = `*❏ Título* : ${anu.title}\n\n│ *Espere um momento para ser enviado*\n│ *POR FAVOR, NAO SPAM! AAS VEZES O BOT DEMORA PARA ENVIAR, CASO NÃO VÁ, ME CONTACTE USANDO _TICKET E A MENSAGEM*\*`
					thumb = await getBuffer(anu.thumb)
					baby.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					baby.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
					break 
					case 'ytmp3':
					if (!isPublic) return reply(ind.publicoff())
          if (isBanned) return reply(ind.baned())
		  		if (!isRegistered) return reply(ind.noregis())
		  		if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (args.length < 1) return reply('Cadê o url mano?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('link errado')
					anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${args[0]}&apikey=apivinz`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					yta = `╭─「 *YOUTUBE MP3 DOWNLOAD* 」\n│\n│• *Título:* ${anu.result.title}\n│• *Tamanho:* ${anu.result.size}\n│• *Qualidade:* ${anu.result.quality}\n│\n│ Espere um minuto 1 minuto, talvez um pouco mais \n│ Estou baixando seu vídeo\n╰─────────────────────`
					buff = await getBuffer(anu.result.thumb)
					reply(ind.wait())
					buffer = await getBuffer(anu.result.link)
					baby.sendMessage(from, buff, image, {quoted: mek, caption: yta})
					baby.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek, caption: 'Aqui mano'})
					await limitAdd(sender)
					break 
					case 'ytmp32':
					  try {
					if (!isPublic) return reply(ind.publicoff())
          if (isBanned) return reply(ind.baned())
		  		if (!isRegistered) return reply(ind.noregis())
		  		if (!isPrem) return reply(ind.premium())
		  		if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					if (args.length < 1) return reply('Cadê o url mano?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('link errado')
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${args[0]}&APIKEY=${XteamKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					reply(ind.wait())
					yta = `╭─「 *YOUTUBE MP32 DOWNLOAD* 」\n│\n│• *Título:* ${anu.judul}\n│\n│ Espere um minuto 1 minutos talvez um pouco mais \n│ Porque baixando Video\n╰─────────────────────`
					buff = await getBuffer(anu.thumbnail)
					buffer = await getBuffer(anu.url)
					baby.sendMessage(from, buff, image, {quoted: mek, caption: yta})
					baby.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', filename: `${anu.judul}.mp3`, quoted: mek, caption: 'Aqui mano'})
					  } catch (e) {
						console.log(`Erro:`, color(e,'red'))
						reply(ind.errado())
					}
					await limitAdd(sender)
					break 
					case 'ytmp33':
                if (!isPublic) return reply(ind.publicoff())
          if (isBanned) return reply(ind.baned())
		  		if (!isRegistered) return reply(ind.noregis())
		  		if (!isPrem) return reply(ind.premium())
		  		if (isLimitVip(sender)) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${ApiLolh}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `Título: ${get_result.title}\n`
                    ini_txt += `Uploader: ${get_result.uploader}\n`
                    ini_txt += `Duração: ${get_result.duration}\n`
                    ini_txt += `Visualizações: ${get_result.view}\n`
                    ini_txt += `Like: ${get_result.like}\n`
                    ini_txt += `Dislike: ${get_result.dislike}\n`
                    ini_txt += `Descrição:\n ${get_result.description}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    baby.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    baby.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    await limitAdd(sender)
                    break
                case 'ytmp34':
                if (!isPublic) return reply(ind.publicoff())
          if (isBanned) return reply(ind.baned())
		  		if (!isRegistered) return reply(ind.noregis())
		  		if (!isPrem) return reply(ind.premium())
		  		if (isLimitVip(sender)) return reply(ind.limitend(pushname))
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=${ApiLolh}&url=${ini_link}`)
                    get_result = get_result.result
                    ini_txt = `${get_result.title} - ${get_result.size}`
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    baby.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.link)
                    baby.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    await limitAdd(sender)
                    break
					case 'fbmp4':
				  baby.updatePresence(from, Presence.composing)
				if (!isPublic) return reply(ind.publicoff())
        if (isBanned) return reply(ind.baned())
    		if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (args.length < 1) return reply('Cade o link?')
					if (!isUrl(args[0]) && !args[0].includes('www.facebook.com')) return reply('link invalido')
					reply(ind.wait())
					anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					baby.sendMessage(from, '*[ AGUARDE ] Seu pedido esta sendo processado*\n\nSo aceito videos, se mandar link de foto nao enviarei. Aguarde enquanto estou processando seu pedido, se hidratou hoje?', text, {quoted: mek})
					efbe = `Título: *${anu.judul}*\nTamanho: *${anu.result.url}\nPublicado por: *${anu.creator}*`
					tefbe = await getBuffer(anu.thumb)
					baby.sendMessage(from, tefbe, image, {quoted: mek, caption: efbe})
					buffer = await getBuffer(anu.result.url)
					baby.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'Aqui está!'})
					await limitAdd(sender) 
					break 
					case 'fbmp42':
          if (!isPublic) return reply(ind.publicoff())
          if (isBanned) return reply(ind.baned())
		  		if (!isRegistered) return reply(ind.noregis())
		  		if (!isPrem) return reply(ind.premium())
		  		if (isLimitVip(sender)) return reply(ind.limitend(pushname))
			            	reply(ind.wait())
                    if (args.length == 0) return reply(`Examplo: ${prefix + command} https://www.facebook.com/tododia1musicalegendada/videos/245297380310571/`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=${ApiLolh}&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    ini_buffer = await getBuffer(ini_url)
                    baby.sendMessage(from, ini_buffer, video, { quoted: mek })
                    await limitAdd(sender)
                    break
          case 'igmp4':
				  baby.updatePresence(from, Presence.composing)
				if (!isPublic) return reply(ind.publicoff())
        if (isBanned) return reply(ind.baned())
    		if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if (args.length < 1) return reply('Cade o link?')
					if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply('link invalido')
					reply(ind.wait())
					anu = await fetchJson(`https://videfikri.com/api/igtv/?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					baby.sendMessage(from, '*[ AGUARDE ] Seu pedido esta sendo processado*\n\nNao baixo imagens do Instagram, somente videos. Aguarde enquanto estou processando seu pedido, se hidratou hoje?', text, {quoted: mek})
					efbe = `Título: *${anu.judul}*\nTamanho: *${anu.result.url}\nCriador: *${anu.creator}*`
					tefbe = await getBuffer(anu.thumb)
					baby.sendMessage(from, tefbe, image, {quoted: mek, caption: efbe})
					buffer = await getBuffer(anu.result.video_url)
					baby.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'Aqui está!'})
					await limitAdd(sender) 
					break 
          case 'igstory':
          case 'igs':
					if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
          reply(ind.wait())
          baby.sendMessage(from, '*[ AGUARDE ] Seu pedido esta sendo processado*\n\nNao baixo imagens do Instagram, somente videos. Aguarde enquanto estou processando seu pedido, se hidratou hoje?', text, {quoted: mek})
					query = args.join(" ")
					anu = await fetchJson(`http://api.lolhuman.xyz/api/igstory/${query}?apikey=${ApiLolh}`, {method: 'get'})
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Aqui está o Story:* ${i.url}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
                case 'ytsearch':
					if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
          reply(ind.wait())
					query = args.join(" ")
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${ApiLolh}&query=${query}`, {method: 'get'})
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Título*: ${i.title}\n*Link*: https://youtu.be/${i.videoId}\n*Publicado*: ${i.published}\n*Visualizações*: ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
          case 'xvideos':
          if (!isPublic) return reply(ind.publicoff())
				  if (isBanned) return reply(ind.baned())
				  if (!isPorno) return reply(ind.porno())
					if (!isRegistered) return reply(ind.noregis())
					if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					porno = body.slice(8)
					anu = await fetchJson(`https://hujanapi.herokuapp.com/api/xvideos?query=${porno}&apikey=trial2k21`, {method: 'get'})
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Titulo*: ${i.title}\n*Link*: ${i.url}\n*Por*: ${i.channel}\n*Duracao*: ${h2k(i.duration)}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
          case 'xnxx':
          if (!isPublic) return reply(ind.publicoff())
				  if (isBanned) return reply(ind.baned())
				  if (!isPorno) return reply(ind.porno())
					if (!isRegistered) return reply(ind.noregis())
					if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					porno1 = body.slice(5)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${ApiLolh}&query=${porno1}`, {method: 'get'})
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Titulo*: ${i.title}\n*Link*: ${i.link}\n*Postado por*: ${i.uploader}\n*Duracao*: ${h2k(i.duration)}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
/*
]=====> LIMIT MENU <=====[
*/
				case 'limit':
				case 'limite':
				  if (!isPublic) return reply(ind.publicoff())
				  if (isBanned) return reply(ind.baned())
				  if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break 
					case 'darlimit': 
			    case 'darlmt':
					case 'dalmt':
        if (!isOwner) return reply(ind.ownerb())
				const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 0) return reply(`Mínimo 1 limite`)
                		if(isNaN(jmla)) return await reply('O limite deve ser um número!')
                		if (!nomerr) return reply(`*Formato inválido!*\nPrecisa usar o número da pessoa primeiro e depois o valor atribuído\nExemplo: ${prefix}dalmt @17372213845 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(_limit).forEach((i) => {
                            			if(_limit[i].id === cysz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                            	_limit[found].limit -= jmla
                            	const updated = _limit[found]
                            	const result = `Enviado o limite com sucesso!\nNS: ${createSerial(20)} \nHorario: ${moment().format('DD/MM/YY HH:mm:ss')}
							*「 PRESENTE DE LIMITE 」*
							• Usuário: @${updated.id.replace('@s.whatsapp.net','')}
							• Limite: ${limitawal-updated.limit}`
                            	console.log(_limit[found])
                            	fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            	reply(result)
                        	} else {
                                reply(`Ops! O número *${nomerr}* não foi encontrado no banco de dados!`)
                        	}
               			break
        case 'resetlimit':
        case 'rlimit':
				if (!isOwner) return reply(ind.ownerb())
				let resetl = args.slice(0)
        _limit.splice(resetl)
				fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
			  await reply(`Limite resetado.`)
				break
        case 'ocr':
        case 'ler':
          if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await baby.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+por', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Só aceito foto')
					}
					await limitAdd(sender) 
					break 
				case 'transfer':
				case 'transferir':
				  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
				await limitAdd(sender)
				if (!q.includes('|')) return  reply(ind.wronff())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (jumblah > 20000) return reply(`Máximo de transferência: 20000 (vinte mil) pontos.`)
            		if (jumblah < 1) return reply(`Mínimo de transferência: 1 (um) ponto.`)
                if (isNaN(jumblah)) return reply(`Deve incluir apenas números na transferência`)
                if (checkATMuser(sender) < jumblah) return reply(`Você nao tem pontos o suficiente para fazer a transferencia`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 5 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('558186663773@s.whatsapp.net', fee)
                reply(`*⟪ SUCESSO ⟫*\n\nTransferência de pontos foi bem sucedida!\n➸ De: +${sender.split("@")[0]}\n➸ Para:${tujuan}\n➸ Valor da Transferência: ${jumblah}\n➸ Imposto: ${fee}`)
                break
				case 'atm':
				case 'banco':
				  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'buylimit':
				case 'comprarlimite':
				case 'buylimite':
				  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())				
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				if (isNaN(payout)) return reply(`Deve incluir apenas números na compra de limite`)
				if (payout <= 1) return reply(`Precisa incluir o valor acima de 1`)
				if (payout > 50) return reply('Não pode ultrapassar 50 limites')
				const koinPerlimit = 1000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`Você nao possui pontos o suficiente.`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*⟪ LIMITE COMPRADO COM SUCESSO ⟫*\n\n➸ Comprador: ${pushname}\n➸ Limite(s) Comprado(s): ${payout} \n➸ Preço Limite: ${koinPerlimit}/limite\n➸ Pontos Atuais: ${checkATMuser(sender)}\n\nProcesso bem-sucedido com RG: ${createSerial(15)}`)
				} 
				break
/*
]=====> RANDOM MENU <=====[
*/
                case 'pokemon':
                  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					baby.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break 
          case 'casal':
					if (!isPublic) return reply(ind.publicoff())
        if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
        if (!isGroup) return reply(ind.groupo())
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `@${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break	
					case 'trisal':
					if (!isPublic) return reply(ind.publicoff())
          if (isBanned) return reply(ind.baned())
	  			if (!isRegistered) return reply(ind.noregis())
	  			if (isLimitVip(sender)) return reply(ind.limitend(pushname))
          if (!isGroup) return reply(ind.groupo())
          if (!isPrem) return reply(ind.premium())
					trisal = []
					const jdii1 = groupMembers
					const koss1 = groupMembers 
					const aaaa = groupMembers
					const akuu1 = jdii1[Math.floor(Math.random() * jdii1.length)]
					const diaa1 = koss1[Math.floor(Math.random() * koss1.length)] 
					const diae = aaaa[Math.floor(Math.random() * aaaa.length)] 
					teks = `@${akuu1.jid.split('@')[0]} ❤️ @${diaa1.jid.split('@')[0]} ❤️ @${diae.jid.split('@')[0]} `
					trisal.push(akuu1.jid)
					trisal.push(diaa1.jid)
					trisal.push(diae.jid)
					mentions(teks, trisal, true)
					await limitAdd(sender)
					break	
					case 'bnt':
					case 'bonito':
					case 'bonita':
					if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                   if (!isGroup) return reply(ind.groupo())
					membr = []
					const mes = groupMembers
					const msk = groupMembers
					const siaps = mes[Math.floor(Math.random() * mes.length)]
					const sips = pushname[Math.floor(Math.random() * msk.length)]
					teks = `*O(a) mais bonito(a) aqui é:* @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					await limitAdd(sender)
					break
          case 'feio':
          case 'feia':
					if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                   if (!isGroup) return reply(ind.groupo())
					membr = []
					const fe = groupMembers
					const io = groupMembers
					const feiao = fe[Math.floor(Math.random() * fe.length)]
					const feio = pushname[Math.floor(Math.random() * io.length)]
					teks = `*O(a) mais feio(a) aqui é:* @${feiao.jid.split('@')[0]}`
					membr.push(feiao.jid)
					mentions(teks, membr, true)
					await limitAdd(sender)
					break
          case 'corno':
          case 'corna':
					if (!isPublic) return reply(ind.publicoff())
          if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                   if (!isGroup) return reply(ind.groupo())
					membr = []
					const nge = groupMembers
					const tod = groupMembers
					const beb = nge[Math.floor(Math.random() * nge.length)]
					const an = pushname[Math.floor(Math.random() * tod.length)]
					teks = `*O(a) mais corno(a) aqui é:* @${beb.jid.split('@')[0]}`
					membr.push(beb.jid)
					mentions(teks, membr, true)
					await limitAdd(sender)
					break
          case 'dado':    
					if (!isPublic) return reply(ind.publicoff())
          if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
					kapankah = body.slice(1)
					const elu =['1','2','3','4','5','6']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					baby.sendMessage(from, ule, text, { quoted: mek })
					break 
                case 'anjing':
                  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					baby.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
					case 'neko':
					  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
            if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://api.zeks.xyz/api/nekonime?apikey=apivinz`, {method: 'get'})
						buffer = await getBuffer(res.result.result)
						baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aqui está o seu nekonime >_<'})
					await limitAdd(sender)
					break
                case 'kpop':
                  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzKey}`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.result)
                                        randomkpop = `*PLASTIQUE*`
                                        baby.sendMessage(from, buffer, image, {quoted: mek, caption: randomkpop})
                                        await limitAdd(sender)
                                        break
                case 'husbu':
                  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
            if (!isGroup) return reply(ind.groupo())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=${TobzKey}`)
						buffer = await getBuffer(res.image)
						baby.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
					await limitAdd(sender)
					break
                case 'loli':
                  try {
                  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					reply(ind.wait())
					buffer = await getBuffer(`http://docs-jojo.herokuapp.com/api/randomloli`)
					baby.sendMessage(from, buffer, image, {quoted: mek, caption: 'Aqui está!'})
          } catch (e) {
						console.log(`Erro:`, color(e,'red'))
						reply(ind.errado())
					}
					await limitAdd(sender)
					break										
					case 'pussy':
					if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://alpin-api-2021.herokuapp.com/api/nsfw/pussy?apikey=alpin1`, {method: 'get'})
					reply(ind.wait())
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						baby.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'wibu':
					  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
						data = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${VhtearKey}`)
						buffer = await getBuffer(data.result.foto)
						baby.sendMessage(from, buffer, image, {quoted: mek, caption: '>_<'})
					await limitAdd(sender)
					break
         /*       case 'darkjokes':
                  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*Darkjokes aqui*')
				break								*/		
/*
]=====> OTHER MENU <=====[
*/				
            	case 'mining':
            	case 'minerar':
            	  if (!isPublic) return reply(ind.publicoff())
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`Desculpe ${pushname} a mineração de eventos não foi ativada pelo dono do bot`)
                      if (isOwner) {
                      const one = 9000000
                      const two = 2
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, two)
                      reply(`Você recebe *${one} pontos* por ser meu dono.`)
                      }else{
                      const mining = Math.ceil(Math.random() * 2000)
                      addLevelingXp(sender, mining)
                      await reply(`*Parabéns* ${pushname} você pega *${mining} Pontos*`)
                      }
                      await limitAdd(sender)
					break
                case 'moddroid':
                  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzKey}`)
			hepi = data.result[0] 
			teks = `*➸ Nome*: ${data.result[0].title}\n*➸ Publicado*: ${hepi.publisher}\n*➸ Mod info:* ${hepi.mod_info}\n*➸ Tamanho*: ${hepi.size}\n*➸ Ultima Versao*: ${hepi.latest_version}\n*➸ Genero*: ${hepi.genre}\n*➸ Link*: ${hepi.link}\n*➸ Download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			baby.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			break
			case 'happymod':
			  try {
if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
reply(ind.wait())
anu = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=apivinz&q=${body.slice(9)}`, {method: 'get'})
teks = '𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱\n'
					for (let i of anu.result) {
						teks += `Nome Apk: ${i.title}
Votos: ${i.rating}
Url: ${i.url}\n\n𝗛𝗮𝗽𝗽𝘆 𝗺𝗼𝗱\n`}
reply(teks.trim())
} catch (e) {
					  console.log(`Erro:`, color(e,'red'))
						reply(ind.stikga())
					}
break
					case 'pinterest':
					  try {
					  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
					baby.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${args.slice(0)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					baby.sendMessage(from, pok, image, { quoted: mek, caption: `*⟪ PINTEREST ⟫*`})
					} catch (e) {
					  console.log(`Erro:`, color(e,'red'))
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break 
                case 'beritahoax':
                  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                    baby.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '♡───────────♡\n'
					for (let i of data.result) {
						teks += `*➸ Foto:* ${i.image}\n*➸ Título:* ${i.title}\n*➸ Link:* ${i.link}\n*➸ Tag:* ${i.tag}\n♡───────────♡\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
					case 'brainly':
				  if (!isPublic) return reply(ind.publicoff())
	        if (isBanned) return reply(ind.baned())
			  	if (!isRegistered) return reply(ind.noregis())
			  	if (isLimit(sender)) return reply(ind.limitend(pushname))
          brien = body.slice(8)
					brainly(`${brien}`).then(res => {
					teks = '♡───────────♡\n'
					for (let Y of res.data) {
						teks += `\n*「 BRAINLY 」*\n\n*➸ Pergunta:* ${Y.pertanyaan}\n\n*➸ Resposta:* ${Y.jawaban[0].text}\n♡───────────♡\n`
					}
					baby.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break
				case 'info':
				  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					me = baby.user
					uptime = process.uptime()
					teks = `*➸ Nome do bot*: ${me.name}\n*➸ Dono*: ${ownerName}\n*➸ Numero do Bot*: @${me.jid.split('@')[0]}\n*➸ Prefixo*: ${prefix}\n*➸ Total Contatos Bloqueados*: ${blocked.length}\n*➸ O bot esta ativo desde*: ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					baby.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
            case 'owner':
            case 'creator':
            case 'criador':
            case 'dono':
                  baby.sendMessage(from, {displayname: "Gugu", vcard: vcard}, MessageType.contact, { quoted: mek})
                  baby.sendMessage(from, 'Aqui o numero do meu patrao 😏',MessageType.text, { quoted: mek} )
					break
        case 'translate':
				case 'traduzir':
				if (!isPublic) return reply(ind.publicoff())
        if (isBanned) return reply(ind.baned())
        if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(limitend(pushname))
				    if (args.length < 1) return baby.sendMessage(from, 'Qual o codigo de linguagem esta escrito?', text, {quoted: mek})
				    if (args.length < 2) return baby.sendMessage(from, 'Cade o texto que deseja traduzir?', text, {quoted: mek})
				    ts = body.slice(11)
				    kode = ts.split("/")[0]
				    teks = ts.split("/")[1]
				    anu = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/pt?apikey=${ApiLolh}&text=${teks}`)
				    reply(ind.wait())
				    translate = `Text Asli: *${teks}*\n\nHasil: *${anu.translated_text}*`
				    baby.sendMessage(from, translate, text, {quoted: mek})
				   await limitAdd(sender)
				   break 
case 'hartatahta':
  if (!isPublic) return reply(ind.publicoff())
if (isBanned) return reply(ind.baned())
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pushname))
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}hartatahta botwea`)
har = body.slice(12)
reply('「❗」SABAR NGAB')
buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${har}&apikey=${VhtearKey}`)
baby.sendMessage(from, buffer, image, {quoted: mek})
await limitAdd(sender)
break
case 'cloudtext':
  if (!isPublic) return reply(ind.publicoff())
                  if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(ind.premium())
				if (isLimitVip(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
if (args.length < 1) return reply(`「❗」Contoh : ${prefix}cloudtext NakanoMiku`)
cloud = body.slice(11)
reply('「❗」Bentar Bro Gw Terbang dumlu yakan')
buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/cloud?apikey=${ApiLolh}&text=${cloud}`)
baby.sendMessage(from, buffer, image, {quoted: mek})
break
case 'wanted':
if (!isPublic) return reply(ind.publicoff())
        if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
        if (!isGroup) return reply(ind.groupo())
         await limitAdd(sender)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(ind.wait())
  tels = body.slice(7)
  owgi = await baby.downloadAndSaveMediaMessage(ted)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hsehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Individuo%20Procurado&text2=Vivo%20ou%20Morto`)
 baby.sendMessage(from, hsehe, image, {quoted:mek})
} else {
  reply('Precisa mencionar a imagem.')
}
break

/*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
]=====> OWNER MENU <=====[
*/
                case 'addvip':
					if (!isOwner) return reply(ind.ownerb())
					addp = body.slice(9)
					premium.push(`${addp}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
					reply(`Parabens @${addp}! Seja bem-vindo ao grupo Vip. Confira seus recursos em _vipmenu 🥳`)
					break
				case 'delvip':
					if (!isOwner) return reply(ind.ownerb())
					delp = body.slice(8)
					premium.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
					reply(`Poxa, o @${delp} foi removido do Vip 🥺 Espero que algum dia volte `)
					break					
					case 'notif':
					case 'nota':
					case 'notificacao':
if (!isGroup) return reply(ind.groupo())
if (!isGroupAdmins) return reply(ind.admin())
teks = `*Notificação de:* @${sender.split("@")[0]}\n*Motivo:* ${body.slice(6)}`
group = await baby.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await baby.sendMessage(from, options, text)
break
				case 'bc':
					baby.updatePresence(from, Presence.composing) 
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await baby.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await baby.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							baby.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISSAO 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 TRANSMISSAO 」*\n\n${body.slice(4)}`)
						}
						reply('*「 ENVIADO COM SUCESSO 」*')
					}
					break
				case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await baby.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							baby.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISSAO DE GRUPO 」*\n\n➸ Grupo: ${groupName}\n➸ Por: wa.me/${(sender.split('@')[0])}\n➸ Motivo: ${body.slice(6)}`})
						}
						reply('*「 ENVIADO COM SUCESSO 」*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 TRANSMISSAO DO GRUPO 」*\n\n➸ Grupo: ${groupName}\n➸ Por: wa.me/${(sender.split('@')[0])}\n➸ Motivo: ${body.slice(6)}`)
						}
						reply('*「 ENVIADO COM SUCESSO 」*')
					}
					break 
					case 'bctexto':
					baby.updatePresence(from, Presence.composing)
					baby.sendMessage('status@broadcast', `${q}`, extendedText)
					baby.sendMessage(from, `Postado no status! Texto: ${q}`, text,{quoted : mek})
					break 
					case 'bcimg':
					baby.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await baby.downloadMediaMessage(swsw)
						baby.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Imagem postada no status! Título: ${q}`
					baby.sendMessage(from, bur, text, { quoted: mek })
					break
				case 'bcvideo':
					baby.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await baby.downloadMediaMessage(swsw)
						baby.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Vídeo postado no status! Título: ${q}`
					baby.sendMessage(from, bur, text, { quoted: mek })
					break
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    baby.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*「 SUCESSO 」* Trocado para ➸ : ${prefix}`)
					break
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await baby.chats.all()
					baby.setMaxListeners(25)
					for (let _ of anu) {
						baby.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
			       case 'block':
			       case 'bloquear':
				 baby.updatePresence(from, Presence.composing) 
				 baby.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					baby.blockUser (`${body.slice(11)}@c.us`, "add")
					baby.sendMessage(from, `Pronto! O ${body.slice(11)}@c.us foi bloqueado.`, text)
					break
                    case 'unblock':
                    case 'desbloquear':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    baby.blockUser (`${body.slice(11)}@c.us`, "remove")
					baby.sendMessage(from, `Pronto! O ${body.slice(11)}@c.us foi desbloqueado.`, text)
					break   				
					case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    baby.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(enmedia)
					await baby.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya bosku😗')
					break 
					case 'donogrupo':
				  case 'ownergroup':
               baby.updatePresence(from, Presence.composing) 
              options = {
          text: `Número do dono do grupo: wa.me/${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           baby.sendMessage(from, options, text, { quoted: mek } )
				break
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg())
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await baby.getProfilePicture(id)
						buffer = await getBuffer(pp)
						baby.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					break 
					case 'bloqlist':
					case 'blocklist':
					teks = 'Lista de Bloqueados:\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total: ${blocked.length}`
					baby.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'banlist':
				ben = '```Lista de Banidos``` :\n'
					for (let banned of ban) {
						ben += `~> @${banned.split('@')[0]}\n`
					}
					ben += `Total: ${ban.length}`
					baby.sendMessage(from, ben.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break 
					case 'totalchat':
					baby.updatePresence(from, Presence.composing)
					baby.sendMessage(from, `Total: ${totalchat.length} Chats`, text, {quoted  : mek})
					break
          case 'ban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Número wa.me/${bnnd} foi banido!`)
					break
			  	case 'unban':
				  case 'rban':
					if (!isOwner) return reply(ind.ownerb())
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
					reply(`Número wa.me/${bnnd} foi desbanido!`)
					break
        case 'listonline': 
        case 'listaon':
        case 'liston':
        		if (!isOwner) return reply(ind.ownerb())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(baby.chats.get(ido).presences), baby.user.jid]
			    baby.sendMessage(from, 'Lista dos Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
/*case 'iri':
const irimp3 = fs.readFileSync('./assets/iri.mp3');
baby.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break*/ 
					case 'bass':    
					  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=90:width_type=o:width=2:g=25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						hah = fs.readFileSync(ran)
						baby.sendMessage(from, hah, audio, {mimetype: 'audio/mp3/ttp/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
						bass.push(from)
						fs.writeFileSync('./assets/bass.json', JSON.stringify(bass))
				break
case 'slow':
  if (!isPublic) return reply(ind.publicoff())
  if (isBanned) return reply(ind.baned())    
  if (!isRegistered) return reply(ind.noregis())
  if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.8,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						hah = fs.readFileSync(ran)
						baby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
	case 'wa.me':
  case 'wame':
  if (!isPublic) return reply(ind.publicoff())
  if (isBanned) return reply(ind.baned())    
  if (!isRegistered) return reply(ind.noregis())
  if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
                  baby.updatePresence(from, Presence.composing) 
                  options = {
                  text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSeu link WhatsApp:\n\n*wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  baby.sendMessage(from, options, text, { quoted: mek } )
			      break
								case 'kicktime':
			    if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Precisa marcar quem deseja remover do grupo!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					reply('Removido com sucesso!')
					}, 5000)
					setTimeout( () => {
					baby.groupRemove(from, mentioned)
					}, 4000)
					setTimeout( () => {
					baby.sendMessage(from, `1`, text) // ur cods
					}, 3000)
					setTimeout( () => {
					baby.sendMessage(from, '2', text)
					}, 2000)
					setTimeout( () => {
					baby.sendMessage(from, '3', text)
					}, 1000)
					setTimeout( () => {
					reply('Você será removido em:')
					}, 0)
					break
				case 'tesss':
				  if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())    
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
					if (args.length < 1) return reply('mau apa om')
					teks = body.slice(7)
					if (teks.length > 8) return reply('Teksnya kepanjangan, maksimal 8 karakter')
					reply(ind.wait())
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/leavest?text=${args.slice(0)}&apikey=RamlanID`)
					buffer8 = await getBuffer(anu.result)
					baby.sendMessage(from, buffer8, image, {quoted: mek})
					break
									case 'infomobil':
									  if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())    
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
					if (args.length < 1) return reply('Masukan nama mobil!!')
					ige = body.slice(9)
					reply(ind.wait())
					anu = await fetchJson(`https://api.vhtear.com/infomobil?merk=${args.slice(0)}&apikey=RamlanID`, {method: 'get'})
					buffer0 = await getBuffer(anu.result.image)
					capt = `mobil Ditemukan!!\n\n*➸ title :* ${anu.result.title}\n*➸ harga :* ${anu.result.harga}\n*➸ kekurangan :* ${anu.result.kekurangan}\n*➸ kelebihan :* ${anu.result.kelebihan}`
					baby.sendMessage(from, buffer0, image, {quoted: mek, caption: capt})
					break
									case 'playstore':
									  if (!isPublic) return reply(ind.publicoff())
				if (isBanned) return reply(ind.baned())    
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
					kuji = body.slice(10)
					reply(ind.wait())
					anu = await getBuffer(`http://api.lolhuman.xyz/api/playstore?apikey=${ApiLolh}&query=${args.slice(0)}`, {method: 'get'})
					capty = `*➸ Titulo:* ${anu.title}\n*➸ app_id:* ${anu.app_id}\n*➸ Descricao:* ${anu.description}\n*➸ developer_id:* ${anu.developer_id}\n*➸ Desenvolvedor:* ${anu.developer}\n*➸ Score:* ${anu.score}\n*➸ full_price :* ${anu.full_price}\n*➸ Preco:* ${anu.price}\n*➸ Gratuito:* ${anu.free}`
					baby.sendMessage(from, anu, image, {quoted: mek, caption: capty})
				break 
case 'fast':
  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.63asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						hah = fs.readFileSync(ran)
						baby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
case 'gemuk':
  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						hah = fs.readFileSync(ran)
					baby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
break
case 'tebalik':
  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())    
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
        teb = `${body.slice(9)}`
				anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${args.slice(0)}`, {method: 'get'})
				teb = `${anu.result.kata}`
				reply('➸ Aqui amigo(a)\n\n'+anu.result.kata)
				break
				case 'fasst':
				  if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3/m4a/ptt')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.4,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						hah = fs.readFileSync(ran)
						baby.sendMessage(from, hah, audio, {mimetype: 'audio/mp3/ptt/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				  case 'tomp3':
          if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (isLimitVip(sender)) return reply(ind.limitend(pushname))
					if (!isPrem) return reply(ind.premium())
                	baby.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('_*Marca o vídeo, mano!*_')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Falha ao converter vídeo para mp3')
						bufferlkj = fs.readFileSync(ran)
						baby.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
					case 'ppcouple':
          if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
		  		if (!isGroup) return reply(ind.groupo())
					data = fs.readFileSync('./lib/ppcouple.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					Laki = await getBuffer(randKey.result.laki)
					baby.sendMessage(from, Laki, image, { caption: '*Hominho*', quoted: mek })
		      Cewe = await getBuffer(randKey.result.cewek)
					baby.sendMessage(from, Cewe, image, { caption: '*Menininha*', quoted: mek })
			  	await limitAdd(sender) 
					break 
				  case 'couple':
                if (!isPublic) return reply(ind.publicoff())
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(limits.limitend(pushname))
                if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=${LeysKey}`, {method: 'get'})
					reply(ind.wait())
					pok = await getBuffer(anu.result.male)
					baby.sendMessage(from, pok, image, { caption: '*Hominho*', quoted: mek })
		      Cewe = await getBuffer(anu.result.female)
					baby.sendMessage(from, Cewe, image, { caption: '*Menininha*', quoted: mek })
					await limitAdd(sender)
					break  
          case 'anime':
                if (!isPublic) return reply(ind.publicoff())
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(limits.limitend(pushname))
                if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzKey}`, {method: 'get'})
					reply(ind.wait)
					pok = await getBuffer(anu.result)
					baby.sendMessage(from, pok, image, { quoted: mek , caption: 'Aqui está!'})
					await limitAdd(sender)
					break  
					case 'wallpaperanime':
			          if (!isPublic) return reply(ind.publicoff())
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(limits.limitend(pushname))
                if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/wallpaper?apikey=${ApiLolh}`)
                    baby.sendMessage(from, buffer, image, { quoted: mek })
                    break 
          case 'wallpapersearch': 
          case 'wppprocurar':
          case 'wppsearch':
          case 'wpprocurar':
          case 'wlpp':
                if (!isPublic) return reply(ind.publicoff())
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(limits.limitend(pushname))
                if (!isNsfw) return reply(ind.nsfwoff())
			        	reply(ind.wait())
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} xxxtentacion`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=${ApiLolh}&query=${query}`)
                    baby.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
          case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
          if (!isPublic) return reply(ind.publicoff())
					if (isBanned) return reply(ind.baned())	
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
						reply(ind.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await baby.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							baby.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
		      				})
					} else {
						reply('Mencione a imagem do anime')
					}
					break
					case 'public':
					case 'publico':
					if (isBanned) return reply(ind.baned())  
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Selecione atv ou dstv')
					if (args[0] === 'atv') {
						if (isPublic) return reply('ativado')
						publik.push(from)
						fs.writeFileSync('./database/group/public.json', JSON.stringify(publik))
						reply(`Sucesso, por favor digite ${prefix}menu para ver os recursos do bot`)
					} else if (args[0] === 'dstv') {
						publik.splice(from, 1)
						fs.writeFileSync('./database/group/public.json', JSON.stringify(publik))
						reply(`Sucesso Agora Os Membros Não Podem Usar o Bot`)
					} else {
						reply('escolher atv / dstv')
					}
					break 
					
					case 'bass':         
					case 'bas':
					if (!isPublic) return reply(ind.publicoff())
       if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await baby.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						hah = fs.readFileSync(ran)
						baby.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
           case 'say':
       teks = body.slice(5)
       if (!isPublic) return reply(ind.publicoff())
       if (!isRegistered) return reply(ind.noregis())
       if (isBanned) return reply(ind.baned())
       if (isLimit(sender)) return reply(ind.limitend(pushname))
                    await limitAdd(sender)
       if (args.length < 1) return reply(ind.wrongf())
       saying = teks
       baby.sendMessage(from, saying, text)
       break

/*======================================================================================================================================================================================*/

/*
<=====[ CRÉDITOS ]=====> 
> GUGU
> YOUTUBE
> MIKUBOT
<======================>
*/
      default:
/*======================================================================================================================================================================================*/
	        
	        //mensagem do bot
      if (budy.includes('obg bot')) {
        setTimeout( () => {
        reply('dnd amg 😉')
		    }, 10)
      }
      if (budy.includes('obrigado bot')) {
        setTimeout( () => {
        reply('dnd amg 😉')
        }, 10)
      }
      if (budy.includes('Obg bot')) {
        setTimeout( () => {
        reply('dnd amg 😉')
        }, 10)
      }
      if (budy.includes('Obrigado bot')) {
        setTimeout( () => {
        reply('dnd amg 😉')
        }, 10)
      }
      if (budy.includes(`Silencio`)) {
         const Silencio = fs.readFileSync('./lib/audio/silencio.mp3');
         setTimeout( () => {
         baby.sendMessage(from, Silencio, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
         }, 10)
      }
         if (budy.includes(`silencio`)) {
         const silencio = fs.readFileSync('./lib/audio/silencio.mp3');
         setTimeout( () => {
         baby.sendMessage(from, silencio, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
         }, 10)
      }
      if (budy.includes(`Silêncio`)) {
         const Silencio = fs.readFileSync('./lib/audio/silencio.mp3');
         setTimeout( () => {
         baby.sendMessage(from, Silencio, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
         }, 10)
      }
         if (budy.includes(`silêncio`)) {
         const silencio = fs.readFileSync('./lib/audio/silencio.mp3');
         setTimeout( () => {
         baby.sendMessage(from, silencio, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
         }, 10)
      }
      if (budy.includes('Grita bot')) {
        const grito = fs.readFileSync('./lib/audio/grito.mp3');
        setTimeout( () => {
        baby.sendMessage(from, grito, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('Grita Bot')) {
        const grito = fs.readFileSync('./lib/audio/grito.mp3');
        setTimeout( () => {
        baby.sendMessage(from, grito, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('grita bot')) {
        const grito = fs.readFileSync('./lib/audio/grito.mp3');
        setTimeout( () => {
        baby.sendMessage(from, grito, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('Carioca')) {
        const carioca = fs.readFileSync('./lib/audio/carioca.mp3');
        setTimeout( () => {
        baby.sendMessage(from, carioca, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('carioca')) {
        const carioca = fs.readFileSync('./lib/audio/carioca.mp3');
        setTimeout( () => {
        baby.sendMessage(from, carioca, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('Bot?')) {
        const bot = fs.readFileSync('./lib/audio/posso falar agr n.mp3');
        setTimeout( () => {
        baby.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
      }, 10)
      }
      if (budy.includes('bot?')) {
        const bot = fs.readFileSync('./lib/audio/posso falar agr n.mp3');
        setTimeout( () => {
        baby.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('bot gay')) {
        const gay = fs.readFileSync('./lib/audio/eu n nasci gay.mp3');
        setTimeout( () => {
        baby.sendMessage(from, gay, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('Bot gay')) {
        const gay = fs.readFileSync('./lib/audio/eu n nasci gay.mp3');
        setTimeout( () => {
        baby.sendMessage(from, gay, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('Bot Gay')) {
        const gay = fs.readFileSync('./lib/audio/eu n nasci gay.mp3');
        setTimeout( () => {
        baby.sendMessage(from, gay, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('bot lixo')) {
        const bot = fs.readFileSync('./lib/audio/bot inútil.mp3');
        setTimeout( () => {
        baby.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('Bot lixo')) {
        const bot = fs.readFileSync('./lib/audio/bot inútil.mp3');
        setTimeout( () => {
        baby.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('Bot Lixo')) {
        const bot = fs.readFileSync('./lib/audio/bot inútil.mp3');
        setTimeout( () => {
        baby.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('bot inútil')) {
        const bot = fs.readFileSync('./lib/audio/bot inútil.mp3');
        setTimeout( () => {
        baby.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('bot inutil')) {
        const bot = fs.readFileSync('./lib/audio/bot inútil.mp3');
        setTimeout( () => {
        baby.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('Bot inútil')) {
        const bot = fs.readFileSync('./lib/audio/bot inútil.mp3');
        setTimeout( () => {
        baby.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('Bot inutil')) {
        const bot = fs.readFileSync('./lib/audio/bot inútil.mp3');
        setTimeout( () => {
        baby.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('Bot Inútil')) {
        const bot = fs.readFileSync('./lib/audio/bot inútil.mp3');
        setTimeout( () => {
        baby.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('Bot Inutil')) {
        const bot = fs.readFileSync('./lib/audio/bot inútil.mp3');
        setTimeout( () => {
        baby.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('bodia')) {
        const bodia = fs.readFileSync('./lib/audio/bom dia é o crl.mp3');
        setTimeout( () => {
        baby.sendMessage(from, bodia, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      if (budy.includes('Bodia')) {
        const bodia = fs.readFileSync('./lib/audio/bom dia é o crl.mp3');
        setTimeout( () => {
        baby.sendMessage(from, bodia, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }, 10)
      }
      
/*======================================================================================================================================================================================*/
      
      //antigrupo
    		  	if (budy.includes("chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiGrupo) return
		        if (isGroupAdmins) return reply('Você é adm do grupo, você pode.')
		        if (!isBotGroupAdmins) return reply(ind.badmin())
		        baby.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("evite spam")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Opa!! ${sender.split("@")[0]} nao aceitamos links de grupos aqui. Você será removido!`)
		        setTimeout( () => {
		          baby.updatePresence(from, Presence.composing)
		          reply("Removido com sucesso!")
		        }, 1500)
		        setTimeout( () => {
			        baby.groupRemove(from, [kic]).catch((e)=>{reply(`O BOT DEVE SER ADMINISTRADOR`)})
		        }, 900)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Adeus")
		        }, 0)
	        }            
	        
/*======================================================================================================================================================================================*/
	        
	     //antitrava 2
	        if (budy.includes("https://wa.me/642756999999")) {
		        if (!isGroup) return
		        if (!isAntiVirtex2) return
		        if (isGroupAdmins) return reply('Você é adm do grupo, você pode.')
		        if (!isBotGroupAdmins) return reply(ind.badmin())
		        baby.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("Proibido travas aqui!")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Opa!! ${sender.split("@")[0]} não aceitamos travas aqui. Você será removido! (Perdão caso duplique)`)
		        setTimeout( () => {
		          baby.updatePresence(from, Presence.composing)
		          reply("Removido com sucesso!")
		        }, 1200)
		        setTimeout( () => {
			        baby.groupRemove(from, [kic]).catch((e)=>{reply(`O BOT DEVE SER ADMINISTRADOR`)})
		        }, 900)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Adeus")
		        }, 0)
	        } 
	        if (budy.includes("🧙‍♂️𝐀𝐥𝐚𝐤𝐚𝐳𝐚𝐦🔮")) {
		        if (!isGroup) return
		        if (!isAntiVirtex2) return
		        if (isGroupAdmins) return reply('Você é adm do grupo, você pode.')
		        if (!isBotGroupAdmins) return reply(ind.badmin())
		        baby.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("Proibido travas aqui!")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Opa!! ${sender.split("@")[0]} não aceitamos travas aqui. Você será removido! (Perdão caso duplique)`)
		        setTimeout( () => {
		          baby.updatePresence(from, Presence.composing)
		          reply("Removido com sucesso!")
		        }, 1200)
		        setTimeout( () => {
			        baby.groupRemove(from, [kic]).catch((e)=>{reply(`O BOT DEVE SER ADMINISTRADOR`)})
		        }, 900)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Adeus")
		        }, 0)
	        }
	        if (budy.includes("𖤛⏳ 𝐷𝑂𝑀𝐴𝐼𝑁 𝐸𝑋𝑃𝐴𝑁𝑆𝐼𝑂𝑁 : 𝑆𝐻𝐼𝑅𝑂 𝐴𝑁𝐷 𝐹𝑅𝑂𝑆𝑇𝑌 — 無量空処 ⏳𖤛")) {
		        if (!isGroup) return
		        if (!isAntiVirtex2) return
		        if (isGroupAdmins) return reply('Você é adm do grupo, você pode.')
		        if (!isBotGroupAdmins) return reply(ind.badmin())
		        baby.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("Proibido travas aqui!")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Opa!! ${sender.split("@")[0]} não aceitamos travas aqui. Você será removido! (Perdão caso duplique)`)
		        setTimeout( () => {
		          baby.updatePresence(from, Presence.composing)
		          reply("Removido com sucesso!")
		        }, 1200)
		        setTimeout( () => {
			        baby.groupRemove(from, [kic]).catch((e)=>{reply(`O BOT DEVE SER ADMINISTRADOR`)})
		        }, 900)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Adeus")
		        }, 0)
	        }
	        if (budy.includes("*🤴·.¸ℕ𝔸𝔾𝔸ℤ𝔸ℙ_×¸,�,¸×_𝕋𝕕𝕄¸.·🤴* . *𝐛𝐲 𝐝𝐚𝐯𝐢𝐳𝐢𝐧𝐦𝐚𝐤𝐞𝐫 & 𝐃𝐚𝐧𝐭𝐞𝐬𝐙𝐤𝐌𝐚𝐤𝐞𝐫* ಷೖಿ بٍٍٍرٍٍٍآًٍٍ🦠بٍٍٍرٍٍٍآًٍٍ رً ॣ ॣ ॣ لُلُصّبُلُلصّبُررً ॣ ॣh ॣ ॣ 〽️.〽️.〽️. https://lol.davizinmaker.ml/nagazap")) {
		        if (!isGroup) return
		        if (!isAntiVirtex2) return
		        if (isGroupAdmins) return reply('Você é adm do grupo, você pode.')
		        if (!isBotGroupAdmins) return reply(ind.badmin())
		        baby.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("Proibido travas aqui!")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Opa!! ${sender.split("@")[0]} não aceitamos travas aqui. Você será removido! (Perdão caso duplique)`)
		        setTimeout( () => {
		          baby.updatePresence(from, Presence.composing)
		          reply("Removido com sucesso!")
		        }, 1200)
		        setTimeout( () => {
			        baby.groupRemove(from, [kic]).catch((e)=>{reply(`O BOT DEVE SER ADMINISTRADOR`)})
		        }, 900)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Adeus")
		        }, 0)
	        }
	        
/*======================================================================================================================================================================================*/
	        
	        //antilink 
	        if (budy.includes(".gov")) {
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Você é adm do grupo, você pode.')
		        if (!isBotGroupAdmins) return reply(ind.badmin())
		        baby.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("evite spam")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Opa!! ${sender.split("@")[0]} não aceitamos links aqui. Você será removido! (Perdão caso duplique)`)
		        setTimeout( () => {
		          baby.updatePresence(from, Presence.composing)
		          reply("Removido com sucesso!")
		        }, 1500)
		        setTimeout( () => {
			        baby.groupRemove(from, [kic]).catch((e)=>{reply(`O BOT DEVE SER ADMINISTRADOR`)})
		        }, 900)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Adeus")
		        }, 0)
	        }
	        if (budy.includes(".org")) {
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Você é adm do grupo, você pode.')
		        if (!isBotGroupAdmins) return reply(ind.badmin())
		        baby.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("evite spam")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Opa!! ${sender.split("@")[0]} não aceitamos links aqui. Você será removido! (Perdão caso duplique)`)
		        setTimeout( () => {
		          baby.updatePresence(from, Presence.composing)
		          reply("Removido com sucesso!")
		        }, 1500)
		        setTimeout( () => {
			        baby.groupRemove(from, [kic]).catch((e)=>{reply(`O BOT DEVE SER ADMINISTRADOR`)})
		        }, 900)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Adeus")
		        }, 0)
	        }
	        if (budy.includes(".net")) {
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Você é adm do grupo, você pode.')
		        if (!isBotGroupAdmins) return reply(ind.badmin())
		        baby.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("evite spam")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Opa!! ${sender.split("@")[0]} não aceitamos links aqui. Você será removido! (Perdão caso duplique)`)
		        setTimeout( () => {
		          baby.updatePresence(from, Presence.composing)
		          reply("Removido com sucesso!")
		        }, 1500)
		        setTimeout( () => {
			        baby.groupRemove(from, [kic]).catch((e)=>{reply(`O BOT DEVE SER ADMINISTRADOR`)})
		        }, 900)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Adeus")
		        }, 0)
	        }
	        if (budy.includes(".com")) {
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Você é adm do grupo, você pode.')
		        if (!isBotGroupAdmins) return reply(ind.badmin())
		        baby.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes("#izinbos")) return reply("evite spam")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Opa!! ${sender.split("@")[0]} não aceitamos links aqui. Você será removido! (Perdão caso duplique)`)
		        setTimeout( () => {
		          baby.updatePresence(from, Presence.composing)
		          reply("Removido com sucesso!")
		        }, 1500)
		        setTimeout( () => {
			        baby.groupRemove(from, [kic]).catch((e)=>{reply(`O BOT DEVE SER ADMINISTRADOR`)})
		        }, 900)
		        setTimeout( () => {
			        baby.updatePresence(from, Presence.composing)
			        reply("Adeus")
		        }, 0)
	        }

/*======================================================================================================================================================================================*/

          //filtro anti palavras ofensivas 
    if (budy.includes("neymar")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
    if (budy.includes("Neymar")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
    if (budy.includes("cuzão")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (budy.includes("Cuzão")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
    if (budy.includes("macaco")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (budy.includes("Macaco")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (budy.includes("Cuzao")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (budy.includes("cuzao")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (budy.includes("Nigga")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (budy.includes("nigga")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (budy.includes("Cú")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (budy.includes("cú")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (budy.includes("fodido")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (budy.includes("Fodido")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (budy.includes("Arrombado")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (budy.includes("arrombado")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (budy.includes("Filho da puta")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (budy.includes("filho da puta")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (budy.includes("fdp")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		if (budy.includes("Fdp")) {
		if (!isGroup) return
    if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* você é adm, você pode.`)
		baby.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
		}, 2000)
		setTimeout( () => {
		baby.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1500)
	  setTimeout( () => {
	  reply(`Pare de ser racista ou de desrespeitar as regras do grupo! Até a próxima. 👋🏻`)
	  }, 1000)
		setTimeout( () => {
		reply(`*_「DETECTADA PALAVRA OFENSIVA」_*\n*${pushname}* você será removido por usar palavra da qual esta definido no filtro!\nRemovendo do grupo: *${groupMetadata.subject}*`)
		}, 0)
		}
		//prefixo com comando inválido + simi
      if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Comando *${prefix}${command}* não está listado no *menu*! Veja a lista de comandos em: *${prefix}menu*`)
                  }
			if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} /*else {
						console.log(color('[ERRO]','red'), 'Comando nao registrado por', color(sender.split('@')[0]))
					}*/
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
