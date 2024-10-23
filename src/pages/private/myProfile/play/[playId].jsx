import React, { useState, useEffect } from 'react';
import VideoPlayerDRM from '@/component/player';
import { useRouter } from 'next/router';

const PlayId = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });

            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };

            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const renderPlayer = () => {
        if (!router.isReady) {
            return <p>Loading...</p>;
        }

        const videoType = parseInt(router.query.video_type);
        const vdcId = router.query.vdc_id;
        const fileUrl = router.query.file_url;
        const title = router.query.title;

        // Debugging logs
        console.log('Router query:', router.query);
        console.log('Parsed values:', { videoType, vdcId, fileUrl, title });

        if (!vdcId || !fileUrl) {
            return <p>No Data found! Unable to locate data, seeking alternative methods for retrieval.</p>;
        }

        switch (videoType) {
            case 7:
            case 8:
                return (
                    <VideoPlayerDRM
                        vdc_id={vdcId}
                        NonDRMVideourl={fileUrl}
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
                        src={`https://www.youtube.com/embed/${fileUrl}`}
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
