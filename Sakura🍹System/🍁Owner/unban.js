
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
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
        let ʀᴍʙᴀɴ = ֆǟӄʊʀǟ.chatId;
        if (!(await BanList.getBanlistUser(ʀᴍʙᴀɴ, ``))) {
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ} 

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║👌🏽 ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
║🔓𝐒𝐭𝐚𝐭𝐮𝐬: Was Not Banned!
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
        }
        `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        BanList.removeBanlistUser(ʀᴍʙᴀɴ, ``);
        return Sakura_Static.MGS(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ} 

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║👌🏽‍𝐔𝐧𝐁𝐚𝐧𝐧𝐞𝐝: ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
║🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧: removed from BanList for all the chats.
╚════════════╝`,
          `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
        );
        `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      } else {
        if (Needs.length > 0) {
          let ʀᴍʙᴀɴ = await motor.nomentioncontact(Needs, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ);
          if (ʀᴍʙᴀɴ === undefined) return;
          ʀᴍʙᴀɴ += `@s.whatsapp.net`;
          if (!(await BanList.getBanlistUser(ʀᴍʙᴀɴ, ֆǟӄʊʀǟ.chatId))) {
            return Sakura_Static.MGS(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ} 

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║👌🏽 ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
║🔓𝐒𝐭𝐚𝐭𝐮𝐬: Was Not Banned!
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝`,
              `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
            );
          }
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
          BanList.removeBanlistUser(ʀᴍʙᴀɴ, ֆǟӄʊʀǟ.chatId);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ} 

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║👌🏽‍𝐔𝐧𝐁𝐚𝐧𝐧𝐞𝐝: ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
║🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧: has been removed from the BanList for this group.
╚════════════╝`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        } else if (ֆǟӄʊʀǟ.isReply) {
          let ʀᴍʙᴀɴ = ֆǟӄʊʀǟ.replyParticipant;
          if (!(await BanList.getBanlistUser(ʀᴍʙᴀɴ, ֆǟӄʊʀǟ.chatId))) {
            return Sakura_Static.MGS(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ} 

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║👌🏽 ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
║🔓𝐒𝐭𝐚𝐭𝐮𝐬: Was Not Banned!
║⚙️𝐄𝐧𝐠𝐢𝐧𝐞: ⋊ʀʏᴏ
╚════════════╝`,
              `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
            );
          }
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
          BanList.removeBanlistUser(ʀᴍʙᴀɴ, ֆǟӄʊʀǟ.chatId);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ} 

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║👌🏽 𝐔𝐧𝐁𝐚𝐧𝐧𝐞𝐝: ${ʀᴍʙᴀɴ.substring(0, ʀᴍʙᴀɴ.indexOf(`@`))}
║🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧: has been removed from the BanList for this group.
╚════════════╝`,
            `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
          );
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
        } else {
          if (!(await BanList.getBanlistUser(``, ֆǟӄʊʀǟ.chatId))) {
            return Sakura_Static.MGS(
              ӄʀǟӄɨռʐ,
              chat,
              ֆǟӄʊʀǟ,
              `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ} 

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║👌🏽 ${ֆǟӄʊʀǟ.groupName}
║🔓𝐒𝐭𝐚𝐭𝐮𝐬: Was Not Banned!
╚════════════╝`,
              `./Sakura☣️Reactor/ֆǟӄʊʀǟ™.mp4`
            );
          }
          `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
          BanList.removeBanlistUser(``, ֆǟӄʊʀǟ.chatId);
          return Sakura_Static.MGS(
            ӄʀǟӄɨռʐ,
            chat,
            ֆǟӄʊʀǟ,
            `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ} 

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║👌🏽𝐆𝐫𝐨𝐮𝐩 𝐔𝐧𝐁𝐚𝐧𝐧𝐞𝐝: ${ֆǟӄʊʀǟ.groupName}
║🛡️𝐒𝐮𝐝𝐨 𝐔𝐧𝐁𝐚𝐧: Bot has been enabled for the group
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
