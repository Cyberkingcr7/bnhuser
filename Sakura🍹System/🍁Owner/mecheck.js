
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
const fs = require(`fs`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
const vers = require(`../../package.json`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
module.exports = {
  name: newScpt,
  ֆǟӄʊʀǟӄǟɨʐօ: `${ᴋᴇɪ}bugreport <feature> <Describe Error>`,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (!ֆǟӄʊʀǟ.isSenderDev) {
        return Sakura_Buttons.MIB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `*❌ Owner Only | You Are Not Allowed! ❌*`,
          _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
        );
      } else if (ֆǟӄʊʀǟ.isGroup) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 
║💡 _This Command is Only For Private!_
╚════════════╝`
        );
      } else if (ֆǟӄʊʀǟ.isSenderDev && !ֆǟӄʊʀǟ.isGroup) {
        Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `
╔════| 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ by _Krakinz🐙kon_ 
║
║- @${աɦօֆɛռȶɦǟȶռʊʍ}, _(Verified-Admin)_
║- 𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐬 𝐎𝐧 𝐁𝐞𝐢𝐧𝐠 𝐀 𝐕𝐞𝐫𝐢𝐟𝐢𝐞𝐝 𝐀𝐝𝐦𝐢𝐧 𝐨𝐟 THIS 𝐆𝐫𝐨𝐮𝐩 𝐂𝐡𝐚𝐭.
║- 𝗥𝗲𝗺𝗲𝗺𝗯𝗲𝗿 𝗗𝗼 𝗡𝗼𝘁 𝗩𝗶𝗼𝗹𝗮𝘁𝗲 𝗮𝗻𝗱/𝗼𝗿 𝗔𝗯𝘂𝘀𝗲 𝗮𝗻𝘆𝘁𝗵𝗶𝗻𝗴/𝗼𝗻𝗲.
║- 𝗬𝗼𝘂 𝗪𝗶𝗹𝗹 𝗕𝗲 𝗠𝗼𝗻𝗶𝘁𝗼𝗿𝗲𝗱.
╚════════════╝
`
        );
        return;
      } else {
        return Sakura_Buttons.MIB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `*❌ Owner Only | You Are Not Allowed! ❌*`,
          _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
        );
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
    } catch (Error) {
      ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      return;
    }
  },
};
