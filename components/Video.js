import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

const VideoContainer = styled.div`
	margin-bottom: 20px;
`;

const VideoWrapper = styled.div`
	max-width: 695px;
	padding: 0 10px;
	margin: 0 auto;
	aspect-ratio: 1.5;
	position: relative;
	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

const VideoEl = ({ data }) => {
	const videoRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			videoRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'end',
				inline: 'nearest',
			});
		}, 1000);
	}, []);
	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 1,
			controls: 1,
			rel: 0,
		},
	};

	function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.ENDED) {
			window.clearInterval(t);
		}

		if (event.data == YT.PlayerState.PLAYING) {
			console.log(event.target);
			const player = event.target;

			const duration = parseInt(player.getDuration() * 10);

			const title = player.playerInfo.videoData.title;
			const videoId = player.playerInfo.videoData.video_id;

			console.log(title, videoId);

			let progArray = [0.25, 0.5, 0.75, 1];

			permutiveVideo(0, 0, title, videoId);

			var t = window.setInterval(function () {
				let progress = player.getCurrentTime() / player.getDuration();
				progress = +progress.toFixed(2);
				if (progArray.includes(progress)) {
					const index = progArray.indexOf(progress);
					if (index > -1) {
						progArray.splice(index, 1);
					}
					permutiveVideo(duration, progress, title, videoId);
				}
			}, duration);
		}
	}

	function permutiveVideo(duration, progress, title, videoId) {
		console.log(duration, progress, title, videoId);
		console.log(permutive);
		permutive.track('VideoEngagement', {
			campaign: 'STB',
			createdAt: new Date(),
			duration,
			title,
			videoId,
			progress,
		});
	}

	function onPlayerReady(event) {
		player.mute();
		event.target.playVideo();
	}

	return (
		<VideoContainer>
			<VideoWrapper ref={videoRef}>
				<YouTube
					videoId={data.youTubeId}
					opts={opts}
					onStateChange={event => onPlayerStateChange(event)}
          onPlayerReady={event => onPlayerReady(event)}
				/>
			</VideoWrapper>
		</VideoContainer>
	);
};

export default VideoEl;
