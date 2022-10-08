/**
 * Base By Dika Ardnt.
 * Recode By GuaAbuzz
 * Kalau Mau Recode, Edit Aja Di confiq.js
 * Mumpung Lagi Baik Ini Gua Share No Enc Buat Kalian
 * Contact Me On wa.me/6289636827082
 * Follow https://github.com/Abuzzpoet
 */

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const hx = require('hxz-api')
const fdl = require("caliph-api")
const bochil = require('@bochilteam/scraper')
const alya = require('./lib/null.js')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./lib/myfunc')

// read database
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
    users: {},
    group: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    donate: {},
    others: {},
    sticker: {},
    anonymous: {},
    ...(global.db.data || {})
}
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let tebakbendera = db.data.game.bendera = []
let tebakbendera2 = db.data.game.bendera2 = []
let tebakkabupaten = db.data.game.kabupaten = []
let tebakkimia = db.data.game.kimia = []
let tebakasahotak = db.data.game.asahotak = []
let tebaksiapakahaku = db.data.game.siapakahaku = []
let tebaksusunkata = db.data.game.susunkata = []
let tebaktekateki = db.data.game.tekateki = []
let vote = db.data.others.vote = []

moment.tz.setDefault("Asia/Jakarta").locale("id")

module.exports = akame = async (akame, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await akame.decodeJid(akame.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await akame.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑴𝒂𝒍𝒂𝒎 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑷𝒆𝒕𝒂𝒏𝒈 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒐𝒓𝒆 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒊𝒂𝒏𝒈 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑷𝒂𝒈𝒊 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑺𝒖𝒃𝒖𝒉 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = '𝑺𝒆𝒍𝒂𝒎𝒂𝒕 𝑻𝒆𝒏𝒈𝒂𝒉 𝑴𝒂𝒍𝒂𝒎 🌃'
        }

        //Time Menuju Ulang Tahun Untuk GuaAbuzz :)
        const HBD = new Date('July 17, 2023 06:00:00').getTime();
        const sekarang = new Date().getTime();
        const Selisih = HBD - sekarang;
        const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor(Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const mmmenit = Math.floor(Selisih % (1000 * 60 * 60) / (1000 * 60));
        const ddetik = Math.floor(Selisih % (1000 * 60) / 1000);
        const menuju = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`


//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//
const ftroli = {
    key: {
        fromMe: false,
        "participant": "0@s.whatsapp.net",
        "remoteJid": "status@broadcast"
    },
    "message": {
        orderMessage: {
            itemCount: 2022,
            status: 200,
            thumbnail: thumb,
            surface: 200,
            message: `Haii Kak ${pushname}\n𝙲𝚖𝚍 ${command}`,
            orderTitle: 'Please Follow TikTok @GuaAbuzz',
            sellerJid: '0@s.whatsapp.net'
        }
    },
    contextInfo: {
        "forwardingScore": 999,
        "isForwarded": true
    },
    sendEphemeral: true
}

const fdoc = {
    key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        documentMessage: {
            title: 'KomunismBot☭',
            jpegThumbnail: thumb
        }
    }
}
const fvn = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "audioMessage": {
            "mimetype": "audio/ogg; codecs=opus",
            "seconds": 359996400,
            "ptt": "true"
        }
    }
}

const fgif = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "videoMessage": {
            "title": 'KomunismBot☭',
            "h": `Hmm`,
            'seconds': '359996400',
            'gifPlayback': 'true',
            'caption': 'KomunismBot☭',
            'jpegThumbnail': thumb
        }
    }
}

const fgclink = {
    key: {
        participant: "0@s.whatsapp.net",
        "remoteJid": "0@s.whatsapp.net"
    },
    "message": {
        "groupInviteMessage": {
            "groupJid": "6289636827082-1635036556@g.us",
            "inviteCode": "https://chat.whatsapp.com/FGmVjFYJBjjGst62qwNKJB",
            "groupName": "KomunismBot☭",
            "caption": 'KomunismBot☭',
            'jpegThumbnail': thumb
        }
    }
}

const fvideo = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "videoMessage": {
            "title": `${pushname}`,
            "h": `Hmm`,
            'seconds': '359996400',
            'caption': `${pushname}`,
            'jpegThumbnail': thumb
        }
    }
}

const floc = {
    key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        locationMessage: {
            name: 'GuaAbuzz Creator',
            jpegThumbnail: thumb
        }
    }
}

const fkontak = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: `status@broadcast`
        } : {})
    },
    message: {
        'contactMessage': {
            'displayName': 'KomunismBot☭',
            'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;KomunismBot☭ Creator;;;\nFN:GuaAbuzz Creator\nitem1.TEL;waid=6289636827082:6289636827082\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            'jpegThumbnail': thumb,
            thumbnail: thumb,
            sendEphemeral: true
        }
    }
}

const fakestatus = {
    key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? {
            remoteJid: "status@broadcast"
        } : {})
    },
    message: {
        "imageMessage": {
            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
            "mimetype": "image/jpeg",
            "caption": 'KomunismBot☭',
            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
            "fileLength": "28777",
            "height": 1080,
            "width": 1079,
            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
            "mediaKeyTimestamp": "1610993486",
            "jpegThumbnail": fs.readFileSync('./image/akame.jpg'),
            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
        }
    }
}
        //END

        //member
        let picaks = [flaming, fluming, flarun, flasmurf, mehk, awog, mohai, mhehe]
        let picak = picaks[Math.floor(Math.random() * picaks.length)]

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
                if (!('antilinktt' in chats)) chats.antilinktt = false
                if (!('antivirtex' in chats)) chats.antivirtex = true
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
                antilinkyt: false,
                antilinktt: false,
                antivirtex: true,
            }

            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = true
                if (!('templateImage' in setting)) setting.templateImage = true
                if (!('templateVideo' in setting)) setting.templateVideo = false
                if (!('templateGif' in setting)) setting.templateGif = false
                if (!('templateMsg' in setting)) setting.templateMsg = false
                if (!('templateLocation' in setting)) setting.templateLocation = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: true,
                templateImage: true,
                templateVideo: false,
                templateGif: false,
                templateMsg: false,
                templateLocation: false,
            }

        } catch (err) {
            console.error(err)
        }
        // Public & Self
        if (!akame.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            akame.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })

	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await akame.updateProfileStatus(`I am Akame-Bot | Aktif Selama ${uptime} | Mode : ${akame.public ? 'Public-Mode' : 'Self-Mode'} | User : ${Object.keys(global.db.data.users).length} | Jangan Telp Bot | © Created GuaAbuzz-Kun`).catch(_ => _)
		setting.status = new Date() * 1
	    }
	}
	
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: akame.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, akame.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        akame.ev.emit('messages.upsert', msg)
        }
	    
        if (('family100' + m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100' + m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            akame.sendText(m.chat, caption, fakestatus, {
                contextInfo: {
                    mentionedJid: parseMention(caption)
                }
            }).then(mes => {
                return _family100['family100' + m.chat].pesan = mesg
            }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100' + m.chat]
        }

        if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak asahotak',
                    buttonText: {
                        displayText: '⌲ Tebak Asah Otak'
                    },
                    type: 1
                }], `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, akame.user.name, fakestatus)
                delete tebakasahotak[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaksiapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksiapakahaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak siapakahaku',
                    buttonText: {
                        displayText: '⌲ Tebak Siapkah Aku'
                    },
                    type: 1
                }], `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, akame.user.name, fakestatus)
                delete tebaksiapakahaku[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksusunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak susunkata',
                    buttonText: {
                        displayText: '⌲ Tebak Susun Kata'
                    },
                    type: 1
                }], `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, akame.user.name, fakestatus)
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak bendera',
                    buttonText: {
                        displayText: '⌲ Tebak Bendera'
                    },
                    type: 1
                }], `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, akame.user.name, fakestatus)
                delete tebakbendera[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak bendera2',
                    buttonText: {
                        displayText: '⌲ Tebak Bendera 2'
                    },
                    type: 1
                }], `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, akame.user.name, fakestatus)
                delete tebakbendera2[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak kabupaten',
                    buttonText: {
                        displayText: '⌲ Tebak Kabupaten'
                    },
                    type: 1
                }], `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, akame.user.name, fakestatus)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaksusunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaksusunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak susunkata',
                    buttonText: {
                        displayText: '⌲ Tebak Susun Kata'
                    },
                    type: 1
                }], `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, akame.user.name, fakestatus)
                delete tebaksusunkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak kimia',
                    buttonText: {
                        displayText: '⌲ Tebak Kimia'
                    },
                    type: 1
                }], `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, akame.user.name, fakestatus)
                delete tebakkimia[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaktekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaktekateki[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak tekateki',
                    buttonText: {
                        displayText: '⌲ Tebak Teka Teki'
                    },
                    type: 1
                }], `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, akame.user.name, fakestatus)
                delete tebaktekateki[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaklagu[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak lagu',
                    buttonText: {
                        displayText: '⌲ Tebak Lagu'
                    },
                    type: 1
                }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, akame.user.name, fakestatus)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete kuismath[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakgambar[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak gambar',
                    buttonText: {
                        displayText: '⌲ Tebak Gambar'
                    },
                    type: 1
                }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, akame.user.name, fakestatus)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakkata[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak kata',
                    buttonText: {
                        displayText: '⌲ Tebak Kata'
                    },
                    type: 1
                }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, akame.user.name, fakestatus)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete caklontong[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak lontong',
                    buttonText: {
                        displayText: '⌲ Tebak Lontong'
                    },
                    type: 1
                }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, akame.user.name, fakestatus)
                delete caklontong[m.sender.split('@')[0]]
                delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebakkalimat[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak kalimat',
                    buttonText: {
                        displayText: '⌲ Tebak Kalimat'
                    },
                    type: 1
                }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, akame.user.name, fakestatus)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaklirik[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak lirik',
                    buttonText: {
                        displayText: '⌲ Tebak Lirik'
                    },
                    type: 1
                }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, akame.user.name, fakestatus)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
                await m.reply('*Anda Telah menyerah*')
                delete tebaktebakan[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
                await akame.sendButtonText(m.chat, [{
                    buttonId: 'tebak tebakan',
                    buttonText: {
                        displayText: '⌲ Tebak Tebakan'
                    },
                    type: 1
                }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, akame.user.name, fakestatus)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //Anti Link
        if (db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                m.reply(`「 ANTI LINK WHATSAPP 」\n\nKamu Terdeteksi Mengirim Link Group, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return m.reply(`Ehh Bot Gak Admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await akame.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return m.reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                akame.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Anti Link YouTube
        if (db.data.chats[m.chat].antilinkyt) {
            if (budy.match(`https://youtu.be`)) {
                m.reply(`「 ANTI LINK YOUTUBE 」\n\nKamu Terdeteksi Mengirim Link Youtube, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return m.reply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                akame.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Anti Link Tiktok
        if (db.data.chats[m.chat].antilinktt) {
            if (budy.match(`https://vt.tiktok.com`)) {
                m.reply(`「 ANTI LINK TIKTOK 」\n\nKamu Terdeteksi Mengirim Link TikTok, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return m.reply(`Ehh Bot Gak Admin T_T`)
                if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                akame.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //AntiVirtex
        if (db.data.chats[m.chat].antivirtex) {
            if (budy.length > 3500) {
                m.reply(`Seseorang mengirim spam virus!! tandai sebagai membaca⚠️\n`.repeat(300))
                m.reply(`「 ANTI VIRTEX 」\n\nKamu Terdeteksi Mengirim Virtex, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return m.reply(`Ehh Bot Gak Admin T_T`)
                akame.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        // Mute Chat
        if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
            return
        }
        //TicTacToe
        this.game = this.game ? this.game : {}
        let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
        if (room) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
            isSurrender = !/^[1-9]$/.test(m.text)
            if (m.sender !== room.game.currentTurn) { // nek wayahku
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
                m.reply({
                    '-3': 'Game telah berakhir',
                    '-2': 'Invalid',
                    '-1': 'Posisi Invalid',
                    0: 'Posisi Invalid',
                } [ok])
                return !0
            }
            if (m.sender === room.game.winner) isWin = true
            else if (room.game.board === 511) isTie = true
            let arr = room.game.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                room.game._currentTurn = m.sender === room.game.playerX
                isWin = true
            }
            let winner = isSurrender ? room.game.currentTurn : room.game.winner
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
                room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (room.x !== room.o) await akame.sendText(room.x, str, fakestatus, {
                mentions: parseMention(str)
            })
            await akame.sendText(room.o, str, fakestatus, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete this.game[room.id]
            }
        }
        //Suit PvP
        this.suit = this.suit ? this.suit : {}
        let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
        if (roof) {
            let win = ''
            let tie = false
            if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
                if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
                    akame.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, fgclink)
                    delete this.suit[roof.id]
                    return !0
                }
                roof.status = 'play'
                roof.asal = m.chat
                clearTimeout(roof.waktu)
                //delete roof[roof.id].waktu
                akame.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, fakestatus, {
                    mentions: [roof.p, roof.p2]
                })
                if (!roof.pilih) akame.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, fgclink)
                if (!roof.pilih2) akame.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, fgclink)
                roof.waktu_milih = setTimeout(() => {
                    if (!roof.pilih && !roof.pilih2) akame.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
                    else if (!roof.pilih || !roof.pilih2) {
                        win = !roof.pilih ? roof.p2 : roof.p
                        akame.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, fgclink)
                    }
                    delete this.suit[roof.id]
                    return !0
                }, roof.timeout)
            }
            let jwb = m.sender == roof.p
            let jwb2 = m.sender == roof.p2
            let g = /gunting/i
            let b = /batu/i
            let k = /kertas/i
            let reg = /^(gunting|batu|kertas)/i
            if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
                roof.pilih = reg.exec(m.text.toLowerCase())[0]
                roof.text = m.text
                m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih2) akame.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
                roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
                roof.text2 = m.text
                m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih) akame.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
                clearTimeout(roof.waktu_milih)
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true
                akame.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), fakestatus, {
                    mentions: [roof.p, roof.p2]
                })
                delete this.suit[roof.id]
            }
        }

        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }

        switch (command) {
            case 'myip': {
                if (!isCreator) throw mess.owner
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        m.reply("🔎 My public IP address is: " + ip);
                    })
                })
            }
            break
            //Salam
            case 'Assalamualaikum':
            case 'assalamualaikum':
            case 'Assalamualaikum Wr. Wb': {
                m.reply(`Waalaikumsalam Kak ${pushname} 🙏`)
                }
                break
            case 'Shalom':
            case 'Salam Sejahtera':
            case 'shalom':
            case 'salam sejahtera':
            case 'Salam sejahtera': {
                m.reply(`Salam Sejahtera Juga Untukmu Kak ${pushname} 🙏`)
                }
                break
            case 'Om Swastyastu':
            case 'om swastyastu':
            case 'Om swastyastu': {
                m.reply(`Om Santi, Santi, Santi, Om Kak ${pushname} 🙏`)
                }
                break
            case 'Namo Buddhaya':
            case 'Namo buddhaya':
            case 'namo buddhaya': {
                m.reply(`Nammo Buddhaya Juga Kak ${pushname} 🙏`)
                }
                break
            case 'Wie De Dong Tian':
            case 'Wie de dong tian':
            case 'wie de dong tian': {
                m.reply(`Xian You Yi De Kak ${pushname} 🙏`)
                }
                break
                //Thx
            case 'thanks':
            case 'makasih':
            case 'thx':
            case 'tengkiyu':
            case 'terima kasih':
            case 'Terima Kasih':
            case 'Terima kasih': {
                m.reply(`Sama-Sama Kak ${pushname}`)
                }
                break
                //Balas Cepat
            case 'p': {
                m.reply(`Ketik #menu Untuk Melihat List Menu Bot`)
                }
                break
            case 'menu': {
                    m.reply(`Hai *${pushname}*

*Fitur Utama* :
-> #sticker
-> #tiktok [url]

*Fitur Group* :
-> #menugroup

*©KomunismBot☭*`)
                    }
                break
                case 'menugroup': {
                    m.reply(`-> #add         @User
-> #kick          @User
-> #promote  @User
-> #demote   @User`)
                    }
                break
                case 'menudownload': {
                        m.reply(`
-> #tiktok     [Linknya]
`)
                        }
            break
            case 'kick': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await akame.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'add': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await akame.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'promote': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await akame.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'demote': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await akame.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nContoh : ${prefix + command} Akame ><`
                let getGroups = await akame.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      let buttons = [{ buttonId: 'command', buttonText: { displayText: '📖Simple Menu' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(i, buttons, txt, akame.user.name, fkontak)
                }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nContoh : ${prefix + command} Akame ><`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
		              let txt = `「 Broadcast Bot 」\n\n${text}`
                      let buttons = [{ buttonId: 'command', buttonText: { displayText: '📖Simple Menu' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖All Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
            await akame.sendButtonText(yoi, buttons, txt, akame.user.name, fkontak)
                }
		m.reply('Sukses Broadcast')
            }
            break
            case 'sticker':
            case 'stickers':
            case 'stimker':
            case 'stiker':
            case 's':
            case 'stickergif':
            case 'sgif': {
                if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await akame.sendImageAsSticker(m.chat, media, fdoc, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await akame.sendVideoAsSticker(m.chat, media, fgif, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
            case 'tiktok':
            case 'tt':
            case 'tiktokdownload': {
                if (!text) throw 'Link tiktoknya mana?'
                m.reply(mess.wait)
                let anu = await fdl.downloader.tiktok(text)
                let buttonMessage = {
                    video: {
                        url: anu.nowm
                    },
                    caption: `👤 *Author:* ${anu.author}\n📌 *Title:* ${anu.title}\n🔗 Download From ${text}`,
                    footer: akame.user.name,
                    headerType: 5
                }
                akame.sendMessage(m.chat, buttonMessage, {
                    quoted: fvideo
                })
            }	
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '⌲ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                akame.sendMessage(m.chat, buttonMessage, { quoted: fgclink })
            }
	    break
            case 'public': {
                if (!isCreator) throw mess.owner
                akame.public = true
                m.reply('Sukses Ubah Ke Penggunaan Umum')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                akame.public = false
                m.reply('Sukses Ubah Ke Penggunaan Sendiri')
            }

            break
            //Jangan Dihapus Tar Eror Banh
            case 'owner': case 'creator': {
                const _0x445474=_0x3cf6;(function(_0x3401e7,_0x53a2b9){const _0x158251=_0x3cf6,_0x46c70d=_0x3401e7();while(!![]){try{const _0x193874=-parseInt(_0x158251(0x1d1))/0x1*(-parseInt(_0x158251(0x1c1))/0x2)+-parseInt(_0x158251(0x1c5))/0x3+parseInt(_0x158251(0x1bd))/0x4+parseInt(_0x158251(0x1b7))/0x5+-parseInt(_0x158251(0x1ba))/0x6*(-parseInt(_0x158251(0x1bb))/0x7)+parseInt(_0x158251(0x1cf))/0x8+parseInt(_0x158251(0x1b9))/0x9*(-parseInt(_0x158251(0x1ce))/0xa);if(_0x193874===_0x53a2b9)break;else _0x46c70d['push'](_0x46c70d['shift']());}catch(_0xe21c14){_0x46c70d['push'](_0x46c70d['shift']());}}}(_0x3875,0x8d051));let vcard=_0x445474(0x1cc)+_0x445474(0x1cd)+_0x445474(0x1c2)+'FN:GuaAbuzz\x20Creator\x0a'+_0x445474(0x1ca)+_0x445474(0x1d0)+_0x445474(0x1c4)+_0x445474(0x1be)+_0x445474(0x1c7)+_0x445474(0x1c6)+_0x445474(0x1c3)+_0x445474(0x1c8)+_0x445474(0x1cb)+_0x445474(0x1bc);akame[_0x445474(0x1b8)](m[_0x445474(0x1bf)],{'contacts':{'displayName':'GuaAbuzz','contacts':[{'vcard':vcard}]}},{'quoted':fkontak}),akame[_0x445474(0x1c9)](m['chat'],global[_0x445474(0x1c0)],fkontak);function _0x3cf6(_0x22dca4,_0x3ee73c){const _0x38752a=_0x3875();return _0x3cf6=function(_0x3cf604,_0x347033){_0x3cf604=_0x3cf604-0x1b7;let _0x216783=_0x38752a[_0x3cf604];return _0x216783;},_0x3cf6(_0x22dca4,_0x3ee73c);}function _0x3875(){const _0xb70662=['item1.X-ABLabel:Creator\x20Akame\x20-\x20MD\x0a','1413057MtYRuC','item3.URL:https://tiktok.com/@guaabuzz\x0a','item2.X-ABLabel:Email\x0a','item4.ADR:;;Jepang;;;;\x0a','sendContact','ORG:GuaAbuzz;\x0a','item4.X-ABLabel:Region\x0a','BEGIN:VCARD\x0a','VERSION:3.0\x0a','18790eFXtSj','7868672tVraCp','item1.TEL;type=CELL;type=VOICE;waid=6289636827082:+62\x20896-3682-7082\x0a','1vsWqtL','237870SRUJgD','sendMessage','7299RVmKXN','700494gXijeh','49uhbWoM','END:VCARD','903716QJEYjg','item2.EMAIL;type=INTERNET:rajifarmansyah46@gmail.com\x0a','chat','owner','996350xypUAk','N:;GuaAbuzz\x20Creator;;;','item3.X-ABLabel:TikTok\x0a'];_0x3875=function(){return _0xb70662;};return _0x3875();}
            }
            break
            default:
        if ((m.mtype === 'groupInviteMessage' || budy.startsWith('https://chat') || budy.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        	let buttons = [
                    { buttonId: `owner`, buttonText: { displayText: 'Chat Owner' }, type: 1 }
                ]
			akame.sendMessage(m.chat, { text:`INVITE DETECT\n\nMau masukin bot ini ke group kamu?`, title: 'LINK GROUP DECTETED', footer: '© 2022 GuaAbuzz', buttons: buttons, headerType: 5 })
		}
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }

                if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }

                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    akame.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
        }


    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})