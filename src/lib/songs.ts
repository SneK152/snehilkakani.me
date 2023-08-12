const songs: string[] = [
	'/songs/4Free_Bob.mp3',
	'/songs/4_Bob.mp3',
	'/songs/Apparently_Bob.mp3',
	'/songs/Arcade_FFart.mp3',
	'/songs/Blastin_Bob.mp3',
	'/songs/Boat_FFart.mp3',
	'/songs/C_Poison.mp3',
	'/songs/Cabbage_FFart.mp3',
	'/songs/Celestial_Poison.mp3',
	'/songs/Clouds_Bob.mp3',
	'/songs/Dark_Snek.mp3',
	'/songs/Demon10_Bob.mp3',
	'/songs/Demon8_Bob.mp3',
	'/songs/Drill3_Bob.mp3',
	'/songs/DunkOpps_Bob.mp3',
	'/songs/E_Bob_FFart.mp3',
	'/songs/E_FFart.mp3',
	'/songs/EmotionalGuitar_Bob.mp3',
	'/songs/EmotionalPiano2_Bob.mp3',
	'/songs/Equation_Poison.mp3',
	'/songs/F_FFart.mp3',
	'/songs/FallenSoldiers_Bob.mp3',
	'/songs/FirePiano_Bob.mp3',
	'/songs/FreestyleRemake_Bob.mp3',
	'/songs/Freestyle_Bob.mp3',
	'/songs/G_FFart.mp3',
	'/songs/HateCorn_Bob.mp3',
	'/songs/Heavenly2_Bob.mp3',
	'/songs/IDLI CYPHER.mp3',
	'/songs/King_FFart.mp3',
	'/songs/LifeIsHard_MC.mp3',
	'/songs/LilSlime_Bob.mp3',
	'/songs/MTR_Bob.mp3',
	'/songs/Mellow10_Bob.mp3',
	'/songs/Mellow12_Bob.mp3',
	'/songs/Memories_Bob.mp3',
	'/songs/Memories_Poison.mp3',
	'/songs/NightSky_Poison.mp3',
	'/songs/Operator_FFart.mp3',
	'/songs/OppsTalkin_Bob.mp3',
	'/songs/PVZ_Poison_FFart.mp3',
	'/songs/Plugg14_Bob.mp3',
	'/songs/Pluggnb29_Bob.mp3',
	'/songs/Problem_Bob.mp3',
	'/songs/PsychoPacman_Snek.mp3',
	'/songs/Psycho_Poison.mp3',
	'/songs/Rage2_Bob.mp3',
	'/songs/Rage7_Bob.mp3',
	'/songs/RageMillion_Bob.mp3',
	'/songs/Rager_Poison.mp3',
	'/songs/Redemption_Poison.mp3',
	'/songs/Revival_Bob.mp3',
	'/songs/Revival_Poison.mp3',
	'/songs/SevenSeas_FFart.mp3',
	'/songs/Soda_FFart.mp3',
	'/songs/SorryBottomHeart_Bob.mp3',
	'/songs/Sorry_Bob.mp3',
	'/songs/Sorry_Snek.mp3',
	'/songs/Spooky2_FFart.mp3',
	'/songs/Static_FFart.mp3',
	'/songs/Sunken_FFart.mp3',
	'/songs/Sunset_Poison_FFart.mp3',
	'/songs/TTLH1_Bob.mp3',
	'/songs/TTLH2_Bob_FFart.mp3',
	'/songs/TTLH_Snek.mp3',
	'/songs/Thunder_FFart.mp3',
	'/songs/Trappin_Bob.mp3',
	'/songs/Twinkle2_Bob.mp3',
	'/songs/Twinkle3_Bob.mp3',
	'/songs/Twinkle_Bob.mp3',
	'/songs/UltimateMix_Bob.mp3',
	'/songs/Vision_Snek.mp3',
	'/songs/War_Bob.mp3',
	'/songs/WhereWeAt_Bob.mp3',
	'/songs/Wildin_Bob.mp3',
	'/songs/Zombie2_FFart.mp3'
];

console.log(songs.length);

const finalSongs: {
	title: string;
	file: string;
}[] = [];

songs.forEach((song) => {
	const title = song.split('.')[0].split('/').pop();

	finalSongs.push({
		title: title ? title : 'Unknown',
		file: song
	});
});

export default finalSongs;
