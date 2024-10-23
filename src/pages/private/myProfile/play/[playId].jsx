import React, { useState, useEffect } from 'react';
import VideoPlayerDRM from '@/component/player';
import { useRouter } from 'next/router';

// PlayId component definition
const PlayId = ({ videoData }) => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Set initial window size
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
        // Check if videoData is available
        if (!videoData) {
            return <p>No Data found! Unable to locate data, seeking alternative methods for retrieval.</p>;
        }

        const { video_type, vdc_id, file_url, title } = videoData;

        // Debugging logs
        console.log('Video Data:', videoData);

        // Render different video players based on video_type
        switch (video_type) {
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

// Fetch data on server side
export async function getServerSideProps(context) {
    const { query } = context; // Get the query from the context

    // Extract the necessary parameters from the query
    const videoData = {
        video_type: parseInt(query.video_type) || 0, // Default to 0 if not present
        vdc_id: query.vdc_id || null,
        file_url: query.file_url || null,
        title: query.title || '',
    };

    // You can validate the extracted data if needed
    if (!videoData.vdc_id || !videoData.file_url) {
        return {
            notFound: true, // Return a 404 page if required data is not present
        };
    }

    // Pass the video data as props to the component
    return {
        props: {
            videoData,
        },
    };
}

export default PlayId;
