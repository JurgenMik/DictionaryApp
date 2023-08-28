import React, {useRef, useState} from 'react';
import './DictionaryResponse.scss';
import {FaPlay, FaPause} from 'react-icons/fa';

interface Props {
    result: any,
    isThemeDark: boolean
}

function DictionaryResponse({result, isThemeDark}: Props) {

    const [isAudioPlaying, setAudio] = useState<boolean>(false);

    const audioRef = useRef<any>(null);

    const handlePlayAudioSample = () => {
        if (!audioRef.current) {
            return;
        }

        if (audioRef.current.paused) {
            audioRef.current.src = result[0].phonetics[0].audio;

            audioRef.current.play();

            setAudio(true);
        } else {
            audioRef.current.pause();

            setAudio(false)
        }
    }

    return (
        <div className="container d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center audio">
                <span>
                    <h1 style={{color: isThemeDark ? 'white' : ''}}>
                        {result[0].word}
                    </h1>
                    <p>{result[0].phonetic}</p>
                </span>
                <audio ref={audioRef}>
                    <source
                        type="audio/mpeg"
                    />
                </audio>
                <button
                    style={{backgroundColor: isThemeDark ? 'hsl(273,40%,31%)' : ''}}
                    onClick={handlePlayAudioSample}
                >
                    {isAudioPlaying
                        ? <FaPause id="audio" />
                        : <FaPlay id="audio" />
                    }
                </button>
            </div>
        </div>
    )
}

export default DictionaryResponse;