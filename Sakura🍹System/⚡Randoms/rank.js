
const Sakura_Buttons = require(`../../Sakura๐ฐ๏ธServer/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura๐ฐ๏ธServer/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UsersSakura = require(`../../Sakura๐Goose/experience`);
const cleanRF = require(`../../Sakura๐ฐ๏ธServer/cleanRF`);
const ๊ฐแดแดแด = require(`../../Sakura๐ฐ๏ธServer/oShit`);
const _๐๐๐_ = require(`../../Sakura๐ฐ๏ธServer/_๐๐๐_`);
const { registerFont } = require(`canvas`);
registerFont(`./Sakura๐ฐ๏ธServer/LobsterTwo-Bold.ttf`, {
  family: `LobsterTwo-Bold`,
});
registerFont(`./Sakura๐ฐ๏ธServer/SlouchybrushRegular-eZnEB.ttf`, {
  family: `SlouchybrushRegular`,
});
registerFont(`./Sakura๐ฐ๏ธServer/TheHeartOfEverythingDemo-KRdD.ttf`, {
  family: `TheHeartOfEverythingDemo`,
});
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const fs = require(`fs`);
var path = require(`path`);
var Canvas = require(`canvas`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
module.exports = {
  name: newScpt,
  async handle(ำสวำษจีผส, chat, ึวำสสว, Needs, ๊ฑษชแดสแดแด, Clock, Ping) {
    try {
      var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
      const defaultnm = ึวำสสว.commandName;
      var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
      const hold = require(`../../Sakura๐ฐ๏ธServer/Hold`);
      hold.Hold(ึวำสสว);
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
      if (!ึวำสสว.isGroup) {
        try {
          return Sakura_Buttons.MTB(
            ำสวำษจีผส,
            chat,
            ึวำสสว,
            `๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @${ีกษฆึึษีผศถษฆวศถีผสส}, _This Command is Only For Groups!_!`
          );
        } catch (Error) {
          ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat);
        }
      }
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
      const applyText = (canvas, text) => {
        const ctx = canvas.getContext(`2d`);
        let fontSize = 50;
        do {
          ctx.font = `${(fontSize -= 10)}px Symbola`;
        } while (ctx.measureText(text).width > canvas.width - 300);
        return ctx.font;
      };
      var canvas = Canvas.createCanvas(840, 300);
      var ctx = canvas.getContext(`2d`);
      try {
        ๐ป๐ป๐๐๐๐๐ = await ำสวำษจีผส.getProfilePicture(ึวำสสว.sender);
      } catch {
        ๐ป๐ป๐๐๐๐๐ = `https://i.postimg.cc/gcw6vq3X/Npp.png`;
      }
      let xpAdd = Math.ceil(Math.random() * 10);
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
      UsersSakura.findOne(
        {
          ID: ึวำสสว.sender,
        },
        async (Error, users) => {
          if (Error) console.log(Error);
          if (!users) {
            var newUsers = new UsersSakura({
              ID: ึวำสสว.sender,
              xp: xpAdd,
              level: 0,
            });
            return newUsers
              .save()
              .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat));
          } else {
            var groupDataRank = await ำสวำษจีผส.groupMetadata(chat.key.remoteJid);
            await ำสวำษจีผส
              .sendMessage(
                ึวำสสว.chatId,
                {
                  url: "https://i.postimg.cc/GtzHrQNr/Sakura-Rank-Catelog.png",
                },
                MessageType.image,
                {
                  quoted: chat,
                  mimetype: Mimetype.jpeg,
                  contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ] },
                  caption: `๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @${ีกษฆึึษีผศถษฆวศถีผสส}
                  โโโโโโโโโโโโโโโโโโ
                  โ ๐๐๐ง๐ค๐ข๐ง๐?๐๐๐ฒ๐ฌ๐ญ๐๐ฆ
                  โโโโโโโโโโโโโโโโโโ

โโโโโโ๐๐๐๐ง๐ค
โ๐ฅ ๐ซ๐ฝ: ${users.xp}
โ๐ฉ ๐๐ฒ๐๐ฒ๐น: ${users.level}
โ๐ช ๐๐ฟ๐ผ๐๐ฝ: ${groupDataRank.subject}
โโโโโโโโโโโโโโ

โโโโโโ๐ฟ
โโ? The More You Talk, The More *Xp+Coins* You Gain.
โโ? You Can Spend The Coins in *${แดแดษช}shop!*
โโโโโโโโโโโโโโ`,
                }
              )
              .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat));
            return;
          }
        }
      );
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
    } catch (Error) {
      ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat);
      return;
    }
  },
};
