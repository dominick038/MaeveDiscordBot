import * as dotenv from 'dotenv';
dotenv.config( {path: './.env'} );

import { Client, Events, GatewayIntentBits } from 'discord.js';




console.log(process.env.DISCORD_API_KEY);