import { FastForward, Music2, Pause, Play, Rewind } from "lucide-react";
import { useRef, useState } from "react";

function RadioPlayer() {
	const audioRef = useRef(null);
	const [volume, setVolume] = useState(1);
	const [status, setStatus] = useState("idle");

	const togglePlay = () => {
		const audio = audioRef.current;

		if (!audio) return;

		if (audio.paused) {
			setStatus("loading");
			audio
				.play()
				.then(() => setStatus("playing"))
				.catch((err) => {
					console.error("Erro ao reproduzir:", err);
					setStatus("error");
				});
		} else {
			audio.pause();
			setStatus("paused");
		}
	};

	const handleVolumeChange = (e) => {
		const newVolume = parseFloat(e.target.value);
		setVolume(newVolume);
		if (audioRef.current) {
			audioRef.current.volume = newVolume;
		}
	};

	return (
		<div className="flex pb-5 bg-[url('./assets/udf.png')] bg-center bg-cover h-full w-full rounded-xl gap-8">
			<audio
				ref={audioRef}
				src="/radio/stream"
				preload="none"
				onError={() => setStatus("error")}
				onPlaying={() => setStatus("playing")}
				onPause={() => setStatus("paused")}
			/>
			<div className="w-[95%] flex h-full items-end justify-center gap-8">
				<button className="w-14 h-14 flex items-center justify-center cursor-pointer border border-gray-900/80 rounded-full bg-gray-900/30 text-blue-500">
					<Rewind className="w-9 h-9" />
				</button>
				<button
					onClick={togglePlay}
					className="w-15 h-15 text-blue-500 cursor-pointer border border-y-gray-900/80 rounded-4xl bg-gray-900/30 flex items-center justify-center"
				>
					{status === "playing" ? (
						<Pause className="w-8 h-8" />
					) : (
						<Play className="w-8 h-8" />
					)}
				</button>
				<button className="w-14 h-14 flex items-center justify-center cursor-pointer border border-gray-900/80 rounded-full bg-gray-900/30 text-blue-500">
					<FastForward className="w-9 h-9" />
				</button>
			</div>

			<div className="h-full w-[5%] mr-1 flex flex-co pb-13 items-end justify-center">
				<input
					id="volume"
					type="range"
					min="0"
					max="1"
					step="0.01"
					value={volume}
					onChange={handleVolumeChange}
					className="w-30 rotate-[-90deg]"
				/>
			</div>
		</div>
	);
}

export default RadioPlayer;
