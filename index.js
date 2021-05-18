const Discord = require("discord.js"),
  {Structures} = Discord;

// loads discord-reply, this wraps that...
require("discord-reply");

class PatchedMessage extends Structures.get("Message") {

  constructor() {
    super(...arguments);
  }

  reply(content, options) {
    // default = true
    if (options && options.allowedMentions && options.allowedMentions.repliedUser === false) {
      return this.lineReplyNoMention(content, options);
    } else {
      return this.lineReply(content, options);
    }
  }

}

Structures.extend("Message", () => PatchedMessage);
