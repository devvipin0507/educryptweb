import React, { useState, useEffect } from 'react';
import VideoPlayerDRM from '@/component/player';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Chat from '@/component/chat/chat';
import { decrypt, encrypt, get_token } from '@/utils/helpers';
import { getContentMeta } from '@/services';

const PlayId = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    const [isLoading, setIsLoading] = useState(true); 
    const [pubicChat, setPublicChat] = useState(null);
    const router = useRouter();
    // console.log("router",router)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            fetchContentMeta();
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

            // Clean up the event listener on component unmount
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    useEffect(() => {
        // Check if router is ready
        if (router.isReady) {
            // Ensure to set loading to false when the router is ready
            setIsLoading(false);
        }
    }, [router.isReady]);

    const fetchContentMeta = async () => {
        try {
            const userId = localStorage.getItem('user_id') 
            const token = get_token();
            const formData = {
                token : router.query.video_id,
                user_id: userId
            }
            const response_contentMeta_service = await getContentMeta(encrypt(JSON.stringify(formData), token));
            const response_contentMeta_data = decrypt(response_contentMeta_service.data, token);
            console.log('response_contentMeta_data', response_contentMeta_data)
            if(response_contentMeta_data.status){
                const data = response_contentMeta_data?.data?.video
                setPublicChat(data?.extra_params?.public_chat)
            }
            else{
                setPublicChat(0)
            }
        } catch (error) {
            console.log('error found: ', error)
        }
    }

    const renderPlayer = () => {
        const videoType = parseInt(router?.query?.video_type);

        if (isLoading) {
            return <p>Loading...</p>; // Display loading state
        }

        switch (videoType) {
            case 7:
                return (
                    <VideoPlayerDRM
                        vdc_id={router?.query?.vdc_id}
                        NonDRMVideourl={router?.query?.file_url}
                        item={null}
                        title={router?.query?.title}
                        videoMetaData={null}
                        start_date={router.query.start_date}
                        end_date={router.query.end_date}
                        video_type={router.query.video_type}
                        chat_node = {router.query.chat_node}
                        course_id={router.query.course_id}
                    />
                );
            case 8:
                return (
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-md-8">
                                <VideoPlayerDRM
                                    vdc_id={router?.query?.vdc_id}
                                    NonDRMVideourl={router?.query?.file_url}
                                    item={null}
                                    title={router?.query?.title}
                                    videoMetaData={null}
                                    start_date={router.query.start_date}
                                    end_date={router.query.end_date}
                                    video_type={router.query.video_type}
                                    chat_node = {router.query.chat_node}
                                    course_id={router.query.course_id}
                                />
                            </div>
                            <div className="col-md-4">
                                <Chat 
                                    chat_node = {router.query.chat_node}
                                    course_id={router.query.course_id}
                                    isPublic = {pubicChat}
                                />
                            </div>
                    </div>
                    </div>
                );
            case 1:
                return (
                    <iframe
                        id="youtubePlayer"
                        width={windowSize.width}
                        height={windowSize.height - 10}
                        src={`https://www.youtube.com/embed/${router?.query?.file_url}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                );
            case 4:
                return (<div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-md-8">
                                <iframe
                                    id="youtubePlayer"
                                    width="100%"
                                    height="100%"
                                    // height={windowSize.height - 10}
                                    src={`https://www.youtube.com/embed/${router?.query?.file_url}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            
                            <div className="col-md-4">
                                <Chat 
                                    chat_node = {router.query.chat_node}
                                    course_id={router.query.course_id}
                                    isPublic = {pubicChat}
                                />
                            </div>
                        </div>
                    </div>
                );
            default:
                return <p>No supported video format found.</p>;
        }
    };

    return (
        <>
            <Head>
                <title>{router?.query?.title}</title>
                <meta name={router?.query?.title} content={router?.query?.title} />
            </Head>
            {renderPlayer()}
        </>
    );
};

export default PlayId;
