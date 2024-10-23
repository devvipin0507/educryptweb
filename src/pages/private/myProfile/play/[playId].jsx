import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const VideoPlayerDRM = dynamic(() => import('@/component/player'), { ssr: false });

const PlayId = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    const [isLoading, setIsLoading] = useState(true);
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
        // Check if router is ready and has query params
        if (router.isReady) {
            const { video_type, vdc_id, file_url, title } = router.query;

            // Check if essential params are available
            if (!video_type || !vdc_id || !file_url || !title) {
                setHasError(true); // Set error state if parameters are missing
            }

            setIsLoading(false); // Set loading to false once router is ready
        }
    }, [router.isReady, router.query]);

    const renderPlayer = () => {
        const videoType = parseInt(router.query.video_type, 10);

        if (hasError) {
            return <p>No Data found! Unable to locate data, seeking alternative methods for retrieval.</p>;
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }

        switch (videoType) {
            case 7:
            case 8:
                return (
                    <VideoPlayerDRM
                        vdc_id={router.query.vdc_id}
                        NonDRMVideourl={router.query.file_url}
                        item={null}
                        title={router.query.title}
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
                        src={`https://www.youtube.com/embed/${router.query.file_url}`}
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

export default PlayId;
