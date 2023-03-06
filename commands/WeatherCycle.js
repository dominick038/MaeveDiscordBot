const { SlashCommandBuilder } = require('discord.js');
const WeatherData = require('../WeatherRanges.json');

module.exports = {

	data: new SlashCommandBuilder()

		.setName('start-weather-cycle')
		.setDescription('Starts the weather cycle'),

	async execute ( interaction ) {

        const CurrentMonthInt = new Date().getMonth();
        const CurrentMonthString = getMonthName(CurrentMonthInt + 1);

        const X = WeatherData[CurrentMonthString];

        const DailyWeatherTemp = Math.floor(Math.random() * (X.VariableHigh + X.VariableLow + 1) * 10 ) / 10 + (X.AvgTemp - X.VariableLow)

        const lastMessage = await interaction.channel.messages.fetch({ limit: 1 }).then(messages => messages.first());
        lastMessage.delete()

		await interaction.reply(
            `Current month: ${CurrentMonthString} \n`+
            `Current temprature: ${DailyWeatherTemp}`
        );

	},
};

function getMonthName(monthNumber) {

    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', { month: 'long' });

}