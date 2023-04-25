import Svg, {Path} from "react-native-svg";

const Offline = (props) => {

    return (
        <>
            {/* offline icon in wifiOff activity */}
            <Svg
                id="wifiOff"
                xmlns="http://www.w3.org/2000/svg"
                width={228}
                height={228}
                viewBox="0 0 228 228"
                {...props}
            >
                <Path
                    id="Path_237"
                    data-name="Path 237"
                    d="M114,0A114,114,0,1,1,0,114,114,114,0,0,1,114,0Z"
                    fill="#518379"
                />
                <Path
                    id="wifi_off_FILL0_wght400_GRAD0_opsz48"
                    d="M128.373,254.083a106.1,106.1,0,0,0-27.549-19.177,73.481,73.481,0,0,0-32.129-7.156,77.428,77.428,0,0,0-10.161.644,41.988,41.988,0,0,0-8.158,1.789L39.929,219.735A80.513,80.513,0,0,1,53.6,216.158a89.624,89.624,0,0,1,52.809,7.013,106.021,106.021,0,0,1,30.984,21.9Zm-24.186,24.186A79.8,79.8,0,0,0,95.6,270.9a57.437,57.437,0,0,0-9.875-5.51L69.553,249.217A54.619,54.619,0,0,1,93.525,254.8,79.9,79.9,0,0,1,113.2,269.253Zm11.02,41.217L58.82,263.1a46.571,46.571,0,0,0-14.24,6.011A62.885,62.885,0,0,0,33.2,278.269l-9.016-9.016a85.177,85.177,0,0,1,10.948-9.3,65.216,65.216,0,0,1,13.524-7.156L32.773,236.909a79.217,79.217,0,0,0-12.737,7.8,113.63,113.63,0,0,0-11.02,9.374L0,245.067a108.467,108.467,0,0,1,11.02-9.875,83.768,83.768,0,0,1,12.022-7.871L9.875,214.154,16.029,208,121.361,313.332Zm-46.512-5.725L47.514,292.437a31.005,31.005,0,0,1,9.517-6.512,29.987,29.987,0,0,1,23.328,0,31.005,31.005,0,0,1,9.517,6.512Z"
                    transform="translate(44.805 -149.743)"
                    fill="#f8f9fa"
                />
            </Svg>
        </>
    )
}

export default Offline;