function ViewButtons({ activeView, onViewChange }) {
    return (
        <div className="viewButtons" aria-label="Skift visning">
            <button
                type="button"
                className={`viewButton ${activeView === "gallery" ? "viewButton--active" : ""}`}
                aria-pressed={activeView === "gallery"}
                onClick={() => onViewChange("gallery")}
            >
                <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M38.135 1H5.84412C3.16906 1 1.00049 3.16857 1.00049 5.84364V31.6764C1.00049 34.3514 3.16906 36.52 5.84412 36.52H38.135C40.8101 36.52 42.9787 34.3514 42.9787 31.6764V5.84364C42.9787 3.16857 40.8101 1 38.135 1Z" stroke="#7B7B7B" stroke-width="2" stroke-linejoin="round" />
                    <path d="M30.0621 13.9162C31.8455 13.9162 33.2912 12.4705 33.2912 10.6871C33.2912 8.90372 31.8455 7.45801 30.0621 7.45801C28.2787 7.45801 26.833 8.90372 26.833 10.6871C26.833 12.4705 28.2787 13.9162 30.0621 13.9162Z" stroke="#7B7B7B" stroke-width="2" stroke-miterlimit="10" />
                    <path d="M18.76 36.5197L31.2061 24.0735C31.7753 23.5032 32.5372 23.1662 33.3421 23.1289C34.147 23.0916 34.9368 23.3565 35.5563 23.8717L42.9782 30.0615M26.8327 26.8112L17.6843 17.6799C17.1022 17.0979 16.3197 16.7602 15.4969 16.7358C14.6741 16.7114 13.873 17.0022 13.2574 17.5487L1 28.4469L26.8327 26.8112Z" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </button>
            <button
                type="button"
                className={`viewButton ${activeView === "floorplan" ? "viewButton--active" : ""}`}
                aria-pressed={activeView === "floorplan"}
                onClick={() => onViewChange("floorplan")}
            >
                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2497 24.5607L2.28116 28.1364C0.585316 28.9072 0.585316 30.1695 2.28116 30.9403L16.5417 37.4443C18.1691 38.1852 20.8478 38.1852 22.4752 37.4443L36.7357 30.9403C38.4316 30.1695 38.4316 28.9072 36.7357 28.1364L29.0331 24.4296M36.728 8.09653L22.3364 1.53477C20.7765 0.821744 18.2231 0.821744 16.6631 1.53477L2.28116 8.09653C0.585316 8.86737 0.585316 10.1287 2.28116 10.8995L16.5417 17.4034C18.1691 18.1454 20.8478 18.1454 22.4752 17.4034L36.7357 10.8995C38.4238 10.1287 38.4238 8.86641 36.728 8.09653Z" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.2501 14.5356L2.27188 18.1162C0.576039 18.887 0.576039 20.1493 2.27188 20.9201L16.5324 27.4231C18.1598 28.165 20.8385 28.165 22.4659 27.4231L36.7264 20.9201C38.4319 20.1493 38.4319 18.887 36.7361 18.1162L28.7502 14.5356" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </button>
            <button
                type="button"
                className={`viewButton ${activeView === "map" ? "viewButton--active" : ""}`}
                aria-pressed={activeView === "map"}
                onClick={() => onViewChange("map")}
            >
                <svg width="27" height="38" viewBox="0 0 27 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.296 1C6.50758 1 1 6.24202 1 12.6983C1 20.1271 9.19733 31.8997 12.2073 35.9659C12.3322 36.1375 12.496 36.2772 12.6852 36.3735C12.8744 36.4698 13.0837 36.52 13.296 36.52C13.5083 36.52 13.7176 36.4698 13.9068 36.3735C14.096 36.2772 14.2598 36.1375 14.3847 35.9659C17.3947 31.9014 25.592 20.1331 25.592 12.6983C25.592 6.24202 20.0844 1 13.296 1Z" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.2964 17.3944C15.56 17.3944 17.3951 15.5593 17.3951 13.2957C17.3951 11.0321 15.56 9.19702 13.2964 9.19702C11.0328 9.19702 9.19775 11.0321 9.19775 13.2957C9.19775 15.5593 11.0328 17.3944 13.2964 17.3944Z" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </button>
        </div>
    );
}

export default ViewButtons;