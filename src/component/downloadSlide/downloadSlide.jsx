import React from 'react'

const DownloadSlide = ({scrollToGetInTouch}) => {
  return (
    <nav className="navbar navbar-expand top_nav">
        <div className="container-fluid">
        <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
        >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                <svg
                    className="me-2"
                    width="15"
                    height="21"
                    viewBox="0 0 15 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_6404_9997)">
                    <path
                        d="M11.6621 0C11.8082 0.032967 11.9564 0.0638822 12.1004 0.0989096C12.8147 0.275876 13.4489 0.683005 13.9025 1.25586C14.3561 1.82871 14.6032 2.53455 14.6048 3.26168C14.6048 6.74794 14.6048 10.2335 14.6048 13.7184C14.6142 13.8107 14.6037 13.9039 14.5742 13.992C14.5446 14.08 14.4965 14.1609 14.4331 14.2294C14.3697 14.2978 14.2924 14.3523 14.2062 14.3893C14.12 14.4262 14.0269 14.4448 13.9329 14.4437C13.839 14.4427 13.7463 14.4221 13.661 14.3833C13.5756 14.3445 13.4995 14.2884 13.4377 14.2186C13.3758 14.1487 13.3295 14.0668 13.3019 13.9782C13.2743 13.8895 13.266 13.7961 13.2774 13.704C13.2774 10.2534 13.2774 6.8022 13.2774 3.35028C13.2924 2.97882 13.199 2.61094 13.0085 2.29028C12.818 1.96962 12.5383 1.70965 12.2027 1.54122C12.1317 1.50207 12.0524 1.47528 11.9668 1.4382C11.9501 1.69781 11.9522 1.94094 11.9126 2.17995C11.8387 2.66428 11.5925 3.10677 11.218 3.4281C10.8436 3.74942 10.3655 3.92856 9.86945 3.93338C8.16232 3.94437 6.45449 3.94437 4.74597 3.93338C4.19416 3.92802 3.66649 3.7092 3.27628 3.32396C2.88607 2.93871 2.66445 2.41774 2.65901 1.87294C2.65901 1.73696 2.65901 1.60096 2.65901 1.44025C2.36355 1.53966 2.09667 1.70784 1.88091 1.93054C1.66514 2.15325 1.50684 2.42395 1.41936 2.71978C1.35977 2.91627 1.33022 3.12045 1.33171 3.32555C1.33171 8.10852 1.33171 12.8922 1.33171 17.6765C1.3237 17.9422 1.3706 18.2068 1.46954 18.454C1.56849 18.7013 1.71741 18.926 1.90722 19.1146C2.09703 19.3031 2.32376 19.4516 2.57357 19.5508C2.82338 19.65 3.09104 19.6979 3.36023 19.6916H11.2448C11.5139 19.6981 11.7815 19.6506 12.0314 19.552C12.2814 19.4533 12.5085 19.3056 12.6989 19.1178C12.8894 18.93 13.0392 18.7059 13.1394 18.4592C13.2395 18.2126 13.2879 17.9484 13.2816 17.6827C13.2816 17.2706 13.2816 16.8585 13.2816 16.4464C13.2762 16.3576 13.2892 16.2686 13.3197 16.1848C13.3502 16.101 13.3977 16.0242 13.4592 15.9591C13.5206 15.894 13.5949 15.8419 13.6773 15.8059C13.7598 15.77 13.8489 15.751 13.939 15.75C14.0295 15.7484 14.1193 15.7653 14.2028 15.7996C14.2864 15.8339 14.3618 15.8848 14.4245 15.9492C14.4872 16.0136 14.5358 16.0901 14.5671 16.1739C14.5985 16.2577 14.612 16.347 14.6068 16.4361C14.5922 17.0975 14.634 17.7713 14.515 18.4162C14.3708 19.1404 13.977 19.7929 13.4006 20.2628C12.8242 20.7327 12.1008 20.991 11.3533 20.9938C8.64858 21.0048 5.94458 21.0048 3.24128 20.9938C2.46264 20.9774 1.71487 20.6902 1.12963 20.1829C0.54439 19.6755 0.159228 18.9806 0.0419704 18.2205C0.0316528 18.175 0.0184096 18.1303 0.00231934 18.0865V2.9114C0.0179527 2.8747 0.0305165 2.8368 0.0398846 2.79808C0.121816 2.21801 0.362315 1.67096 0.735534 1.21571C1.10875 0.760473 1.60058 0.414268 2.15814 0.214294C2.41722 0.129509 2.68138 0.0606949 2.9491 0.00824981L11.6621 0ZM3.98423 1.3228C3.98423 1.50824 3.98423 1.68339 3.98423 1.86058C3.98532 2.06119 4.06623 2.25333 4.20951 2.39556C4.3528 2.5378 4.54697 2.61873 4.75015 2.62089C6.45171 2.62089 8.15188 2.62089 9.85067 2.62089C10.0122 2.62461 10.1704 2.57522 10.3003 2.48048C10.4303 2.38573 10.5246 2.25101 10.5686 2.09753C10.6106 1.84059 10.6336 1.58099 10.6375 1.32075L3.98423 1.3228Z"
                        fill="#2B2B2B"
                    />
                    <path
                        d="M6.64071 10.2196V9.95795C6.64071 8.83089 6.64071 7.70382 6.64071 6.57676C6.63623 6.43901 6.67658 6.30347 6.75582 6.19C6.83507 6.07653 6.94905 5.99111 7.08106 5.94627C7.20341 5.89509 7.33952 5.88553 7.46798 5.9191C7.59644 5.95267 7.70994 6.02747 7.79062 6.13171C7.89354 6.2819 7.95207 6.45741 7.95967 6.63858C7.97427 7.74504 7.95967 8.85149 7.95967 9.95795V10.2217C8.27062 9.91467 8.54192 9.63652 8.82575 9.37278C8.90835 9.29184 9.01117 9.23394 9.12377 9.20493C9.23637 9.17592 9.35475 9.17683 9.46687 9.20759C9.579 9.23836 9.68088 9.29786 9.76218 9.38007C9.84347 9.46228 9.90129 9.56427 9.92975 9.67567C9.96168 9.78394 9.963 9.89876 9.93357 10.0077C9.90414 10.1167 9.84508 10.2156 9.7628 10.2938C9.09497 10.9573 8.42923 11.6207 7.75306 12.278C7.6925 12.3401 7.61966 12.3892 7.53905 12.4224C7.45844 12.4555 7.37179 12.4719 7.28449 12.4705C7.19719 12.4692 7.1111 12.4501 7.03159 12.4145C6.95207 12.3789 6.88082 12.3275 6.82227 12.2636C6.15862 11.6139 5.49845 10.9621 4.84175 10.3082C4.77447 10.2486 4.72018 10.1761 4.6822 10.0951C4.64423 10.0141 4.62336 9.92636 4.62086 9.83714C4.61836 9.74793 4.63429 9.65914 4.66769 9.57621C4.70108 9.49327 4.75122 9.41792 4.81507 9.35474C4.87892 9.29157 4.95513 9.24189 5.03906 9.20874C5.12299 9.17559 5.21288 9.15965 5.30325 9.16192C5.39362 9.16418 5.48257 9.1846 5.56469 9.22192C5.64681 9.25923 5.72036 9.31267 5.78088 9.37897C6.06471 9.64888 6.33393 9.91881 6.64071 10.2196Z"
                        fill="#2B2B2B"
                    />
                    <path
                        d="M7.28974 15.0823H5.38017C5.10778 15.0911 4.83645 15.0448 4.5829 14.9461C4.32935 14.8474 4.09897 14.6985 3.90597 14.5085C3.71296 14.3186 3.56143 14.0915 3.4607 13.8415C3.35998 13.5915 3.31222 13.3238 3.32035 13.0548C3.32035 12.8488 3.32035 12.6592 3.32035 12.4614C3.32035 12.2876 3.39027 12.121 3.51472 11.9981C3.63918 11.8752 3.80799 11.8062 3.984 11.8062C4.16001 11.8062 4.32881 11.8752 4.45327 11.9981C4.57773 12.121 4.64765 12.2876 4.64765 12.4614C4.64765 12.6674 4.64765 12.8858 4.64765 13.0981C4.6448 13.1855 4.66001 13.2726 4.69235 13.3541C4.72469 13.4356 4.77349 13.5097 4.83577 13.572C4.89805 13.6342 4.97251 13.6833 5.05462 13.7163C5.13673 13.7492 5.22477 13.7653 5.31339 13.7636C6.64348 13.7636 7.97148 13.7636 9.29739 13.7636C9.38433 13.7641 9.4705 13.7476 9.5509 13.715C9.6313 13.6823 9.70432 13.6342 9.76569 13.5734C9.82707 13.5126 9.87558 13.4404 9.9084 13.3609C9.94123 13.2814 9.9577 13.1963 9.95687 13.1104C9.95687 12.892 9.95687 12.6716 9.95687 12.4532C9.95686 12.2804 10.0259 12.1147 10.149 11.992C10.2721 11.8693 10.4393 11.7996 10.6143 11.7979C10.7011 11.7966 10.7873 11.8123 10.8679 11.8442C10.9485 11.8762 11.0219 11.9236 11.0837 11.9839C11.1455 12.0441 11.1945 12.1159 11.2278 12.1951C11.2612 12.2742 11.2782 12.3592 11.2779 12.4449C11.2936 12.8394 11.267 13.2345 11.1986 13.6235C11.0958 14.0341 10.857 14.3991 10.5201 14.6604C10.1832 14.9217 9.76755 15.0644 9.33913 15.0658C8.65461 15.0782 7.97009 15.0658 7.28556 15.0658L7.28974 15.0823Z"
                        fill="#2B2B2B"
                    />
                    </g>
                    <defs>
                    <clipPath id="clip0_6404_9997">
                        <rect width="14.6087" height="21" fill="white" />
                    </clipPath>
                    </defs>
                </svg>
                Download App
                </a>
            </li>
            <li className="nav-item">
                <div onClick={scrollToGetInTouch} style={{cursor:'pointer'}}>
                <a className="nav-link">
                <svg
                    className="me-2"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_6404_9993)">
                    <path
                        d="M3.17354 7.38558H3.04673C3.01531 7.38558 2.98416 7.38548 2.95324 7.38538C2.80063 7.38487 2.65384 7.38438 2.5091 7.39644L2.50176 7.39705L2.4944 7.39694C2.31309 7.39422 2.13307 7.42757 1.96479 7.49506C1.7965 7.56254 1.6433 7.66281 1.51414 7.79002C1.38499 7.91723 1.28243 8.06885 1.21243 8.23605C1.14244 8.40325 1.1064 8.58269 1.10642 8.76394V8.76396V13.2766C1.10839 13.5987 1.22632 13.9093 1.43865 14.1516C1.65074 14.3937 1.94285 14.5514 2.26163 14.5959C2.5267 14.6272 2.79375 14.6382 3.06049 14.629L3.0657 14.6288V14.6289C3.58345 14.6289 3.9717 14.4802 4.23052 14.2215C4.48933 13.9627 4.63801 13.5746 4.63801 13.0571V13.0482V13.0394V13.0306V13.0218V13.013V13.0041V12.9953V12.9865V12.9777V12.9689V12.96V12.9512V12.9424V12.9336V12.9248V12.9159V12.9071V12.8983V12.8895V12.8807V12.8719V12.863V12.8542V12.8454V12.8366V12.8278V12.819V12.8101V12.8013V12.7925V12.7837V12.7749V12.7661V12.7573V12.7484V12.7396V12.7308V12.722V12.7132V12.7044V12.6956V12.6868V12.6779V12.6691V12.6603V12.6515V12.6427V12.6339V12.6251V12.6163V12.6075V12.5986V12.5898V12.581V12.5722V12.5634V12.5546V12.5458V12.537V12.5282V12.5194V12.5105V12.5017V12.4929V12.4841V12.4753V12.4665V12.4577V12.4489V12.4401V12.4313V12.4225V12.4137V12.4049V12.396V12.3872V12.3784V12.3696V12.3608V12.352V12.3432V12.3344V12.3256V12.3168V12.308V12.2992V12.2904V12.2816V12.2728V12.264V12.2552V12.2463V12.2375V12.2287V12.2199V12.2111V12.2023V12.1935V12.1847V12.1759V12.1671V12.1583V12.1495V12.1407V12.1319V12.1231V12.1143V12.1055V12.0967V12.0879V12.0791V12.0703V12.0615V12.0527V12.0439V12.0351V12.0263V12.0175V12.0087V11.9999V11.9911V11.9823V11.9735V11.9647V11.9559V11.9471V11.9383V11.9295V11.9207V11.9118V11.903V11.8942V11.8854V11.8766V11.8678V11.859V11.8502V11.8414V11.8326V11.8238V11.815V11.8062V11.7974V11.7886V11.7798V11.771V11.7622V11.7534V11.7446V11.7358V11.727V11.7182V11.7094V11.7006V11.6918V11.683V11.6742V11.6654V11.6566V11.6478V11.639V11.6302V11.6214V11.6126V11.6038V11.595V11.5862V11.5774V11.5686V11.5598V11.551V11.5422V11.5334V11.5246V11.5158V11.507V11.4982V11.4894V11.4806V11.4718V11.463V11.4542V11.4454V11.4366V11.4278V11.419V11.4102V11.4014V11.3926V11.3838V11.375V11.3662V11.3574V11.3486V11.3398V11.331V11.3222V11.3134V11.3046V11.2958V11.287V11.2782V11.2694V11.2606V11.2518V11.243V11.2342V11.2254V11.2166V11.2078V11.199V11.1902V11.1814V11.1726V11.1638V11.155V11.1462V11.1374V11.1286V11.1198V11.111V11.1022V11.0934V11.0846V11.0758V11.067V11.0582V11.0494V11.0406V11.0318V11.023V11.0142V11.0054V10.9966V10.9878V10.979V10.9702V10.9614V10.9526V10.9438V10.935V10.9262V10.9174V10.9086V10.8998V10.8909V10.8821V10.8733V10.8645V10.8557V10.8469V10.8381V10.8293V10.8205V10.8117V10.8029V10.7941V10.7853V10.7765V10.7677V10.7589V10.7501V10.7413V10.7325V10.7236V10.7148V10.706V10.6972V10.6884V10.6796V10.6708V10.662V10.6532V10.6444V10.6356V10.6268V10.618V10.6091V10.6003V10.5915V10.5827V10.5739V10.5651V10.5563V10.5475V10.5387V10.5299V10.5211V10.5122V10.5034V10.4946V10.4858V10.477V10.4682V10.4594V10.4506V10.4418V10.4329V10.4241V10.4153V10.4065V10.3977V10.3889V10.3801V10.3713V10.3624V10.3536V10.3448V10.336V10.3272V10.3184V10.3096V10.3007V10.2919V10.2831V10.2743V10.2655V10.2567V10.2478V10.239V10.2302V10.2214V10.2126V10.2038V10.1949V10.1861V10.1773V10.1685V10.1597V10.1508V10.142V10.1332V10.1244V10.1156V10.1067V10.0979V10.0891V10.0803V10.0715V10.0626V10.0538V10.045V10.0362V10.0274V10.0185V10.0097V10.0009V9.99206V9.98324V9.97441V9.96559V9.95676V9.94794V9.93911V9.93029V9.92146V9.91264V9.90381V9.89498V9.88616V9.87733V9.8685V9.85967V9.85085V9.84202V9.83319V9.82436V9.81553V9.8067V9.79787V9.78904V9.78021V9.77138V9.76255V9.75372V9.74488V9.73605V9.72722V9.71839V9.70955V9.70072V9.69189V9.68305V9.67422V9.66538V9.65655V9.64771V9.63888V9.63004V9.62121V9.61237V9.60353V9.5947V9.58586V9.57702V9.56818V9.55934V9.5505V9.54166V9.53282V9.52398V9.51514V9.5063V9.49746V9.48862V9.47978V9.47094V9.46209V9.45325V9.44441V9.43556V9.42672V9.41788V9.40903V9.40019V9.39134V9.38249V9.37365V9.3648V9.35595V9.34711V9.33826V9.32941V9.32056V9.31171V9.30286V9.29401V9.28516V9.27631V9.26746V9.25861V9.24976V9.24091V9.23206V9.2232V9.21435V9.20549V9.19664V9.18779V9.17893V9.17008V9.16122V9.15236V9.14351V9.13465V9.12579V9.11694V9.10808V9.09922V9.09036V9.0815V9.07264V9.06378V9.05492V9.04606V9.0372V9.02833V9.01947V9.01061V9.00175V8.99288V8.98402V8.97515V8.96629V8.95742V8.94856V8.93969V8.93082V8.92195V8.91309V8.90422V8.89535V8.88648V8.87761V8.86874V8.85987V8.851V8.84213V8.83325V8.82438V8.81551V8.80664V8.79776V8.78889V8.78001V8.77114V8.76226V8.75338V8.74451V8.73563V8.72675V8.71787V8.709V8.70012V8.69124V8.68236V8.67348V8.66459V8.65571V8.64683V8.63795V8.62906V8.62018V8.6113V8.60241V8.59353V8.58464V8.57575V8.56687V8.55798V8.54909V8.54163C4.62372 7.78787 4.76685 7.03941 5.05823 6.34406C5.34974 5.64842 5.78321 5.02126 6.33095 4.50263C8.11504 2.78911 10.269 2.28931 12.6352 2.83769C13.9824 3.11795 15.1901 3.85804 16.0512 4.93109C16.9127 6.00458 17.3735 7.34437 17.3547 8.72051L17.3547 8.7217C17.3319 9.76889 17.3395 10.8143 17.3471 11.8622C17.3509 12.387 17.3547 12.9125 17.3547 13.4392C17.3547 13.4395 17.3547 13.4398 17.3547 13.4401H17.2047C17.2143 14.2705 17.0332 15.0921 16.6754 15.8416C16.3176 16.5911 15.7927 17.2486 15.1409 17.7636L3.17354 7.38558ZM3.17354 7.38558L3.19464 7.26055C3.79904 3.67973 7.34879 0.959757 11.3073 1.11268L11.3075 1.11268C15.0635 1.25438 18.1821 3.88246 18.7869 7.26201L18.8091 7.38558H18.9346H19.424V7.38574L19.4308 7.38543C19.6251 7.37663 19.819 7.40847 20.0003 7.4789C20.1816 7.54933 20.3462 7.6568 20.4836 7.79445C20.621 7.93209 20.7281 8.09688 20.7981 8.27826L20.938 8.22424L20.7981 8.27826C20.8681 8.45964 20.8995 8.65363 20.8902 8.84783L20.8901 8.84783V8.85498V8.86338V8.87178V8.88017V8.88857V8.89698V8.90538V8.91377V8.92218V8.93058V8.93898V8.94738V8.95578V8.96418V8.97258V8.98098V8.98938V8.99778V9.00618V9.01458V9.02298V9.03138V9.03978V9.04819V9.05659V9.06499V9.07339V9.08179V9.09019V9.09859V9.10699V9.1154V9.1238V9.1322V9.1406V9.149V9.1574V9.16581V9.17421V9.18261V9.19101V9.19942V9.20782V9.21622V9.22462V9.23302V9.24143V9.24983V9.25823V9.26663V9.27504V9.28344V9.29184V9.30025V9.30865V9.31705V9.32545V9.33386V9.34226V9.35066V9.35907V9.36747V9.37587V9.38428V9.39268V9.40108V9.40949V9.41789V9.4263V9.4347V9.4431V9.45151V9.45991V9.46831V9.47672V9.48512V9.49353V9.50193V9.51033V9.51874V9.52714V9.53555V9.54395V9.55236V9.56076V9.56917V9.57757V9.58598V9.59438V9.60279V9.61119V9.6196V9.628V9.63641V9.64481V9.65322V9.66162V9.67003V9.67843V9.68684V9.69524V9.70365V9.71206V9.72046V9.72887V9.73727V9.74568V9.75408V9.76249V9.7709V9.7793V9.78771V9.79611V9.80452V9.81293V9.82133V9.82974V9.83815V9.84655V9.85496V9.86337V9.87177V9.88018V9.88859V9.89699V9.9054V9.91381V9.92222V9.93062V9.93903V9.94744V9.95584V9.96425V9.97266V9.98107V9.98948V9.99788V10.0063V10.0147V10.0231V10.0315V10.0399V10.0483V10.0567V10.0651V10.0736V10.082V10.0904V10.0988V10.1072V10.1156V10.124V10.1324V10.1408V10.1492V10.1576V10.166V10.1745V10.1829V10.1913V10.1997V10.2081V10.2165V10.2249V10.2333V10.2417V10.2501V10.2585V10.267V10.2754V10.2838V10.2922V10.3006V10.309V10.3174V10.3258V10.3342V10.3426V10.3511V10.3595V10.3679V10.3763V10.3847V10.3931V10.4015V10.4099V10.4183V10.4267V10.4352V10.4436V10.452V10.4604V10.4688V10.4772V10.4856V10.494V10.5024V10.5109V10.5193V10.5277V10.5361V10.5445V10.5529V10.5613V10.5697V10.5781V10.5866V10.595V10.6034V10.6118V10.6202V10.6286V10.637V10.6454V10.6539V10.6623V10.6707V10.6791V10.6875V10.6959V10.7043V10.7127V10.7212V10.7296V10.738V10.7464V10.7548V10.7632V10.7716V10.78V10.7885V10.7969V10.8053V10.8137V10.8221V10.8305V10.8389V10.8474V10.8558V10.8642V10.8726V10.881V10.8894V10.8978V10.9062V10.9147V10.9231V10.9315V10.9399V10.9483V10.9567V10.9651V10.9736V10.982V10.9904V10.9988V11.0072V11.0156V11.024V11.0325V11.0409V11.0493V11.0577V11.0661V11.0745V11.083V11.0914V11.0998V11.1082V11.1166V11.125V11.1334V11.1419V11.1503V11.1587V11.1671V11.1755V11.1839V11.1924V11.2008V11.2092V11.2176V11.226V11.2344V11.2429V11.2513V11.2597V11.2681V11.2765V11.2849V11.2934V11.3018V11.3102V11.3186V11.327V11.3354V11.3439V11.3523V11.3607V11.3691V11.3775V11.3859V11.3944V11.4028V11.4112V11.4196V11.428V11.4364V11.4449V11.4533V11.4617V11.4701V11.4785V11.4869V11.4954V11.5038V11.5122V11.5206V11.529V11.5375V11.5459V11.5543V11.5627V11.5711V11.5795V11.588V11.5964V11.6048V11.6132V11.6216V11.6301V11.6385V11.6469V11.6553V11.6637V11.6722V11.6806V11.689V11.6974V11.7058V11.7143V11.7227V11.7311V11.7395V11.7479V11.7564V11.7648V11.7732V11.7816V11.79V11.7984V11.8069V11.8153V11.8237V11.8321V11.8406V11.849V11.8574V11.8658V11.8742V11.8827V11.8911V11.8995V11.9079V11.9163V11.9248V11.9332V11.9416V11.95V11.9584V11.9669V11.9753V11.9837V11.9921V12.0005V12.009V12.0174V12.0258V12.0342V12.0427V12.0511V12.0595V12.0679V12.0763V12.0848V12.0932V12.1016V12.11V12.1185V12.1269V12.1353V12.1437V12.1521V12.1606V12.169V12.1774V12.1858V12.1943V12.2027V12.2111V12.2195V12.2279V12.2364V12.2448V12.2532V12.2616V12.2701V12.2785V12.2869V12.2953V12.3038V12.3122V12.3206V12.329V12.3375V12.3459V12.3543V12.3627V12.3711V12.3796V12.388V12.3964V12.4048V12.4133V12.4217V12.4301V12.4385V12.447V12.4554V12.4638V12.4722V12.4807V12.4891V12.4975V12.5059V12.5144V12.5228V12.5312V12.5396V12.5481V12.5565V12.5649V12.5733V12.5818V12.5902V12.5986V12.607V12.6155V12.6239V12.6323V12.6407V12.6492V12.6576V12.666V12.6744V12.6829V12.6913V12.6997V12.7082V12.7166V12.725V12.7334V12.7419V12.7503V12.7587V12.7671V12.7756V12.784V12.7924V12.8008V12.8093V12.8177V12.8261V12.8346V12.843V12.8514V12.8598V12.8683V12.8767V12.8851V12.8935V12.902V12.9104V12.9188V12.9273V12.9357V12.9441V12.9525V12.961V12.9694V12.9778V12.9863V12.9947V13.0031V13.0115V13.02V13.0284V13.0368V13.0453V13.0537V13.0621V13.0705V13.079V13.0874V13.0958V13.1043V13.1127V13.1211V13.1295V13.138V13.1464V13.1548V13.1633H20.89L20.8902 13.1693C20.8979 13.361 20.8658 13.5523 20.7959 13.7311C20.7261 13.9098 20.6199 14.0722 20.4842 14.2079C20.3484 14.3436 20.186 14.4497 20.0072 14.5196C19.8284 14.5894 19.637 14.6215 19.4452 14.6138L19.4452 14.6137H19.4392H18.9574H18.8476L18.8144 14.7183C18.7626 14.8815 18.7175 15.0388 18.6737 15.1915C18.5875 15.4916 18.5065 15.7739 18.3906 16.0477L18.3903 16.0483C17.2738 18.7159 15.2099 20.2332 12.3832 20.7674C11.9648 20.8376 11.5416 20.8762 11.1173 20.8827L11.1077 20.8829L11.0982 20.8842C10.992 20.8996 10.8838 20.892 10.7807 20.8621C10.6777 20.8322 10.5823 20.7807 10.5008 20.7109C10.4193 20.6411 10.3537 20.5548 10.3083 20.4576C10.263 20.3604 10.2389 20.2546 10.2378 20.1474L10.2378 20.147C10.2363 20.0371 10.2581 19.9282 10.3017 19.8273C10.3454 19.7264 10.4099 19.6359 10.491 19.5617C10.5721 19.4875 10.668 19.4313 10.7724 19.3968C10.8768 19.3623 10.9874 19.3503 11.0968 19.3615L11.1043 19.3623L11.112 19.3623C12.6171 19.3633 14.0754 18.8392 15.2353 17.8802L3.17354 7.38558Z"
                        fill="#2B2B2B"
                        stroke="#2B2B2B"
                        stroke-width="0.3"
                    />
                    <path
                        d="M13.133 15.5375L13.133 15.5375L13.1323 15.5392C12.9318 16.0064 12.6215 16.396 12.2398 16.665C11.8584 16.9339 11.4208 17.0719 10.9774 17.0658C10.534 17.0598 10.0992 16.9099 9.7232 16.6305C9.34695 16.351 9.04465 15.9528 8.85379 15.4801L8.85022 15.4712L8.84556 15.4629C8.78924 15.3624 8.75835 15.2438 8.75803 15.1213C8.75772 14.9988 8.78803 14.88 8.84386 14.7791C8.89966 14.6782 8.97765 14.6009 9.06623 14.5535C9.15446 14.5063 9.25085 14.4898 9.34484 14.5042L9.35892 14.5063L9.37315 14.5058C9.73589 14.4922 10.0892 14.4966 10.453 14.5012C10.6394 14.5035 10.8285 14.5059 11.0231 14.5059H12.592C12.8931 14.5059 13.0812 14.6243 13.1713 14.7895C13.2642 14.96 13.2741 15.2191 13.133 15.5375Z"
                        fill="#2B2B2B"
                        stroke="#2B2B2B"
                        stroke-width="0.3"
                    />
                    </g>
                    <defs>
                    <clipPath id="clip0_6404_9993">
                        <rect width="21.9983" height="21.99" fill="white" />
                    </clipPath>
                    </defs>
                </svg>
                     Help & Support
                </a>
                </div>
            </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default DownloadSlide