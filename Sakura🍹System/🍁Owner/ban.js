
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const BanList = require(`../../Sakura🛰️Server/BanList`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
const motor = require(`../../Sakura🛰️Server/motor`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
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
      if (!ֆǟӄʊʀǟ.fromMe && !ֆǟӄʊʀǟ.isSenderDev) {
        return Sakura_Buttons.MIB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `*❌ Owner Only | You Are Not Allowed! ❌*`,
          _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
        );
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (ֆǟӄʊʀǟ.isPm && ֆǟӄʊʀǟ.fromMe && ֆǟӄʊʀǟ.isSenderDev) {
        let ᴀᴅᴅʙᴀɴ = ֆǟӄʊʀǟ.chatId;
        BanList.addBanlistUser(ᴀᴅᴅʙᴀɴ, ``);
        return Sakura_Static.MGS(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ} 

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║🛑𝐁𝐚𝐧𝐧𝐞𝐝: ${ᴀᴅᴅʙᴀɴ.substring(0, ᴀᴅᴅʙᴀɴ.indexOf(`@`))}
║You are: _Banlisted from using the bot!_
╚════════════╝`,
          `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
        );
      } else {
        if (Needs.length > 0) {
          let ᴀᴅᴅʙᴀɴ = await motor.nomentioncontact(Needs, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ);
          if (ᴀᴅᴅʙᴀɴ === undefined) return;
          ᴀᴅᴅʙᴀɴ += `@s.whatsapp.net`;
          if (ֆǟӄʊʀǟ.owner === ᴀᴅᴅʙᴀɴ) {
            return Sakura_Buttons.MIB(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `*❌ Owner Only | You Are Not Allowed! ❌*`,
              _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
            );
          }
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
          BanList.addBanlistUser(ᴀᴅᴅʙᴀɴ, ֆǟӄʊʀǟ.chatId);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ} 

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║🛑𝐁𝐚𝐧𝐧𝐞𝐝: ${ᴀᴅᴅʙᴀɴ.substring(0, ᴀᴅᴅʙᴀɴ.indexOf(`@`))}
║You are: _Banlisted from using the bot in this group!_
╚════════════╝`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        } else if (ֆǟӄʊʀǟ.isReply) {
          let ᴀᴅᴅʙᴀɴ = ֆǟӄʊʀǟ.replyParticipant;
          if (ֆǟӄʊʀǟ.owner === ᴀᴅᴅʙᴀɴ) {
            return Sakura_Buttons.MIB(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `*❌ Owner Only | You Are Not Allowed! ❌*`,
              _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
            );
          }
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
          BanList.addBanlistUser(ᴀᴅᴅʙᴀɴ, ֆǟӄʊʀǟ.chatId);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ} 

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║🛑𝐁𝐚𝐧𝐧𝐞𝐝: ${ᴀᴅᴅʙᴀɴ.substring(0, ᴀᴅᴅʙᴀɴ.indexOf(`@`))}
║You are: _Banlisted from using the bot in this group!_
╚════════════╝`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        } else {
          BanList.addBanlistUser(``, ֆǟӄʊʀǟ.chatId);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ} 

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║🛑𝐆𝐫𝐨𝐮𝐩 𝐁𝐚𝐧𝐧𝐞𝐝: ${ֆǟӄʊʀǟ.groupName}
 _Bot has been disabled for the group!_
╚════════════╝`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        }
      }
    } catch (Error) {
      ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      return;
    }
  },
};
