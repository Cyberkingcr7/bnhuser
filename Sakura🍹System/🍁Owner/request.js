`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const { Encoder, QRByte, ErrorCorrectionLevel } = require("@nuintun/qrcode");
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../Sakura🛰️Server/cleanRF`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
module.exports = {
  name: newScpt,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      const hold = require("../../Sakura🛰️Server/Hold");
      hold.Hold(ֆǟӄʊʀǟ);
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (
        Needs.length === 0 &&
        !ֆǟӄʊʀǟ.body.includes(`https://chat.whatsapp`)
      ) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `

╔════◇❓ 𝐇𝐨𝐰 𝐓𝐨 𝐆𝐞𝐭 BNH in your group?
║• Join BNH support Group.
║• Your Group Should Have *30 members* atleast.
║• Turn Disappearing Message *Off* in your Gc.
║• *Private:* use ${ᴋᴇɪ}${newScpt} _yout gc link_
╚════════════╝
`
        );
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      const qrcode = new Encoder();
      qrcode.setEncodingHint(true);
      qrcode.setErrorCorrectionLevel(ErrorCorrectionLevel.Q);
      qrcode.write(
        new QRByte(
          `${Needs.join(" ").replace(
            `https://chat.whatsapp.com/`,
            `?KryZen%%Verity/`
          )}\n` +
            `\n` +
            `*ReqBy:* @${աɦօֆɛռȶɦǟȶռʊʍ}` +
            `\n` +
            `*ChatID:* ${ֆǟӄʊʀǟ.chatId}`
        )
      );
      qrcode.make();
      const output = qrcode.toDataURL().split(",")[1];
      const OutPutResult = Date.now() + ".png";
      fs.writeFileSync(
        OutPutResult,
        output,
        { encoding: "base64" },
        function (Error) {
          if (Error) {
            console.log(Error);
            return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
          }
        }
      );
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      Sakura_Buttons.MIB(
        ӄʀǟӄɨռʐ,
        chat,
        ֆǟӄʊʀǟ,
        `
╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║• Thank you For Requesting BNH.
╚═══════════`,
        OutPutResult
      );
      await cleanRF.cleanRF(OutPutResult);
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      await ӄʀǟӄɨռʐ.sendMessage(
        `918436686758@s.whatsapp.net`,
        `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 Sir

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍪 𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐁𝐲: ${աɦօֆɛռȶɦǟȶ}
║🔗 𝐋𝐢𝐧𝐤: ${Needs.join(" ")}
╚════════════╝`,
        MessageType.text
      );
      await ӄʀǟӄɨռʐ.sendMessage(
        `27835829791@s.whatsapp.net`,
        `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 Sir

╔════◇🌿𝐓𝐨𝐩𝐢𝐜: ${FinalName}
║🍪 𝐑𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐁𝐲: ${աɦօֆɛռȶɦǟȶ}
║🔗 𝐋𝐢𝐧𝐤: ${Needs.join(" ")}
╚════════════╝`,
        MessageType.text
      );
      return;
    } catch (Error) {
      console.log(Error);
      return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
    }
  },
};
