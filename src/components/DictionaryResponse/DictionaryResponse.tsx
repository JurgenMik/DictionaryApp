import React, {useRef, useState} from 'react';
import './DictionaryResponse.scss';
import {FaPlay, FaPause} from 'react-icons/fa';
import {LuExternalLink} from 'react-icons/lu';
import {themeBasedTextStyle} from "../../utils";

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
                    <h1 style={themeBasedTextStyle(isThemeDark)}>
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
            <>
                {result[0].meanings.map((info: any) => (
                    <div className="word-response-container" key={info.partOfSpeech}>
                        <h1 id="word-category" style={themeBasedTextStyle(isThemeDark)}>
                            {info.partOfSpeech}
                        </h1>
                        <div className="word-meaning-container">
                            <h1>Meaning</h1>
                            <ul style={themeBasedTextStyle(isThemeDark)}>
                                {info.definitions.map((meaning: {definition: string}, index: number) => (
                                    <li key={index}>{meaning.definition}</li>
                                ))}
                            </ul>
                            {info.synonyms.length > 0 && (
                                <div className="d-flex align-items-center word-synonym">
                                    <h1>Synonyms</h1>
                                    {info.synonyms.map((synonym: string) => (
                                        <p key={synonym}>{synonym}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                {result[0].sourceUrls && (
                    <div className="d-flex align-items-center word-source">
                        <a
                            href={result[0].sourceUrls}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={themeBasedTextStyle(isThemeDark)}
                        >
                            {result[0].sourceUrls}
                            <LuExternalLink id="link" />
                        </a>
                    </div>
                )}
            </>
        </div>
    )
}

export default DictionaryResponse;