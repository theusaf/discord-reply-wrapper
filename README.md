# Discord Reply Wrapper

## About
This package wraps [discord-reply](https://npmjs.com/package/discord-reply) and replaces [`Message.reply`](https://discord.js.org/#/docs/main/stable/class/Message?scrollTo=reply) with inline replies rather than prepending a mention.

This is meant to make it easy to change your current code and have to do little changes when inline `.reply` is implemented in discord.js@13.0.0.

## Usage
```js
/*
 * Important: require() this module before
 * creating your client.
 */
require("discord-reply-wrapper");
const Discord = require("discord.js"),
  {Client} = Discord;

const client = new Client();

client.on("message", (message) => {
  // With mention
  message.reply("I am mentioning you!");

  // Without mention
  message.reply("I am not mentioning you!", {
    allowedMentions: {
      repliedUser: false
    }
  });

  // Using embeds
  message.reply({
    embed: {
      title: "This is a title"
    }
  });
});

client.login("TOKEN");
```

## Documentation

`.reply([content], [options])`
> Replies to the message inline

|PARAMETER|TYPE|OPTIONAL|DEFAULT|DESCRIPTION|
|---------|----|--------|-------|-----------|
|content  |[StringResolvable](https://discord.js.org/#/docs/main/stable/typedef/StringResolvable) or [APIMessage](https://discord.js.org/#/docs/main/stable/class/APIMessage)|Yes|`""`|The content for the message|
|options|[MessageOptions](https://discord.js.org/#/docs/main/stable/typedef/MessageOptions) or [MessageAdditions](https://discord.js.org/#/docs/main/stable/typedef/MessageAdditions)|Yes|`{}`|The options to provide|

> Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<([Message](https://discord.js.org/#/docs/main/stable/class/Message)|[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Message](https://discord.js.org/#/docs/main/stable/class/Message)>)>
>
> Examples:
```js
// Reply to a message (inline)
message.reply('Hey, I\'m a reply!', {
    allowedMentions: {
      repliedUser: false
    }
  })
  .then(() => console.log(`Sent a reply to ${message.author.username}`))
  .catch(console.error);
```

## More Information
The Discord API takes a `replied_user` field, which is currently implemented as `repliedUser` in [discord.js's GitHub repository](https://github.com/discordjs/discord.js/blob/master/src/structures/APIMessage.js#L173) in their [MessageMentionOptions](https://discord.js.org/#/docs/main/stable/typedef/MessageMentionOptions).

Default value for `repliedUser` is `true`
