
const Sakura_Static = require(`../../Sakura๐ฐ๏ธServer/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require(`../../Sakura๐ฐ๏ธServer/cleanRF`);
const _๐๐๐_ = require(`../../Sakura๐ฐ๏ธServer/_๐๐๐_`);
const ๊ฐแดแดแด = require(`../../Sakura๐ฐ๏ธServer/oShit`);
const qrCode = require("qrcode-reader");
const vers = require(`../../package.json`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const Jimp = require("jimp");
const fs = require("fs");
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
module.exports = {
  name: newScpt,
  async handle(ำสวำษจีผส, chat, ึวำสสว, Needs, ๊ฑษชแดสแดแด, Clock, Ping) {
    try {
      var filePath;
      var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
      const defaultnm = ึวำสสว.commandName;
      var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
      if (!ึวำสสว.fromMe && !ึวำสสว.isSenderDev) {
        return Sakura_Buttons.MIB(
          ำสวำษจีผส,
          chat,
          ึวำสสว,
          `*โ Owner Only | You Are Not Allowed! โ*`,
          _๐๐๐_.ษดแดแดแดแดแดษชษด
        );
      }
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
      const qrToText = async (imagePath) => {
        try {
          var buffer = fs.readFileSync(imagePath);
          Jimp.read(buffer, async function (Error, image) {
            if (Error) {
              console.log(Error);
              return ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat);
            }
            let qrcode = new qrCode();
            qrcode.callback = async function (Error, value) {
              if (Error) {
                console.log(Error);
                return ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat);
              } else {
                console.log(value.result);
                const media = await ำสวำษจีผส.prepareMessage(
                  ึวำสสว.chatId,
                  fs.readFileSync(imagePath),
                  MessageType.image,
                  { mimetype: Mimetype.png }
                );
                await ำสวำษจีผส
                  .sendMessage(
                    ึวำสสว.chatId,
                    {
                      contentText: `๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @${ีกษฆึึษีผศถษฆวศถีผสส}, 
*Sir Here Is The Verified KrakinzLab Link!*

.sudo($req%%From-${Ping}-Engage-At${Clock}%Symlinked)
${_๐๐๐_.HASH.replace(`https://chat.whatsapp.com/`, `/kryo/`)}${value.result}`,
                      footerText: `โฟ (๐)BNH โ\nโฟ โ๐๐๐ญ๐: ${Clock} โ\nโฟ โ๐๐ข๐ง๐?: ${Ping}ms โ`,
                      buttons: [
                        {
                          buttonId: `${แดแดษช}thumbsup`,
                          buttonText: { displayText: `${แดแดษช}thumbsup` },
                          type: 1,
                        },
                      ],
                      headerType: 4,
                      imageMessage: media.message.imageMessage,
                    },
                    MessageType.buttonsMessage,
                    {
                      quoted: chat,
                      contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ] },
                    }
                  )
                  .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat));
                return await cleanRF.cleanRF(imagePath);
              }
            };
            qrcode.decode(image.bitmap);
          });
        } catch (Error) {
          console.log(Error);
          return ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat);
        }
      };
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
      if (ึวำสสว.isReplyImage) {
        try {
          var imageId = chat.key.id;
          const fileName = "./Sakura๐๏ธTemp/engr-" + imageId;
          filePath = await ำสวำษจีผส.downloadAndSaveMediaMessage(
            {
              message:
                chat.message.extendedTextMessage.contextInfo.quotedMessage,
            },
            fileName
          );
          qrToText(filePath);
        } catch (Error) {
          console.log(Error);
          return ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat);
        }
      } else {
        return Sakura_Buttons.MTB(
          ำสวำษจีผส,
          chat,
          ึวำสสว,
          `๐ฆ๐๐จ๐ง๐ข๐๐ก๐ข๐ฐ๐ @${ีกษฆึึษีผศถษฆวศถีผสส},\n*Sir Please Reply To _QR_!*`
        );
      }
      `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
    } catch (Error) {
      console.log(Error);
      return ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat);
    }
  },
};
