import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Import VideoPlayerDRM without disabling SSR
const VideoPlayerDRM = dynamic(() => import('@/component/player'));

const PlayId = ({ videoType, vdc_id, file_url, title }) => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    const [hasError, setHasError] = useState(false);

    const router = useRouter();

    useEffect(() => {
        // Update window size
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Call handleResize once to set initial size
        handleResize();

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Check for errors if videoType is not provided
        if (!videoType) {
            setHasError(true);
        }
    }, [videoType]);

    const renderPlayer = () => {
        if (hasError) {
            return <p>No Data found! Unable to locate data, seeking alternative methods for retrieval.</p>;
        }

        switch (videoType) {
            case 7:
            case 8:
                return (
                    <VideoPlayerDRM
                        vdc_id={vdc_id}
                        NonDRMVideourl={file_url}
                        item={null}
                        title={title}
                        videoMetaData={null}
                    />
                );
            case 1:
            case 4:
                return (
                    <iframe
                        id="youtubePlayer"
                        width={windowSize.width}
                        height={windowSize.height - 10}
                        src={`https://www.youtube.com/embed/${file_url}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                );
            default:
                return <p>No supported video format found.</p>;
        }
    };

    return <>{renderPlayer()}</>;
};

// Get parameters from the request and pass them as props
export const getServerSideProps = async (context) => {
    const { video_type, vdc_id, file_url, title } = context.query;

    // Ensure all required parameters are present
    if (!video_type || !vdc_id || !file_url || !title) {
        return {
            props: {
                videoType: null,
                vdc_id: null,
                file_url: null,
                title: null,
            },
        };
    }

    return {
        props: {
            videoType: parseInt(video_type, 10),
            vdc_id,
            file_url,
            title,
        },
    };
};

export default PlayId;
