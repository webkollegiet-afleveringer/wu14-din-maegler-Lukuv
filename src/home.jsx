import { Link } from "react-router";
import Header from "./components/header";
import "./home.sass"

const handleSubmit = (e) => {
    e.preventDefault();
};

function Home() {
    return (<div>
        <Header />
        <section className="homeSearchSection">
            <div className="homeSearchContainer">
                <h2>Søg efter din drømmebolig</h2>
                <div className="homeSearchDiv"><h3>Søg blandt 158 boliger til salg i 74 butikker </h3><svg width="43" height="4" viewBox="0 0 43 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="43" height="4" fill="#162A41" />
                </svg><p>Hvad skal din næste bolig indeholde</p><form onSubmit={handleSubmit}><input type="text" placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende" /><button type="submit">Søg</button></form></div>
            </div>
        </section>
        <article className="homeInfoArticle"><div className="maxWidth"><div className="firstArticle"><img src="Image.png" alt="38+ års mægler-erfaring" /><div><h2>Vi har fulgt danskerne hjem <br /> i snart 4 årtier</h2><h3>Det synes vi siger noget om os!</h3><p className="firstP">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.</p><p className="secondP">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p><img src="Funfact.png" alt="4829 boliger solgt 158 boliger til salg" /></div></div></div><div className="secondArticle"><div className="maxWidth"><img src="Feature.png" alt="" /></div></div></article>
        <section className="homeHouseSelectSection"><div className="maxWidth"><h2>Udvalgte Boliger</h2><p>There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p></div></section>
        <div className="homeNewsDiv"><div className="maxWidth"><h2>Tilmeld dig vores nyhedsbrev og
            hold dig opdateret på boligmarkedet</h2><form onSubmit={handleSubmit}><input placeholder="Indtast din email adresse" type="text" /><button type="submit"><svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.5586 8.85831L28.5572 8.85677L20.6936 0.469672C20.1045 -0.158634 19.1516 -0.156296 18.5652 0.475156C17.9789 1.10653 17.9812 2.12774 18.5703 2.75612L23.8499 8.3871H1.50494C0.673763 8.3871 0 9.10919 0 10C0 10.8908 0.673763 11.6129 1.50494 11.6129H23.8498L18.5703 17.2439C17.9812 17.8723 17.979 18.8935 18.5653 19.5248C19.1517 20.1564 20.1046 20.1586 20.6937 19.5303L28.5573 11.1432L28.5587 11.1417C29.1481 10.5112 29.1462 9.48669 28.5586 8.85831Z" fill="#162A41" />
            </svg>
            </button></form></div></div>
        <section className="homeAgentsContainer"><div className="maxWidth"><h2>Mød vores engagerede medarbejdere</h2><p>Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</p><Link>Se alle mæglere</Link></div></section>
        <div className="homeMobileAd">
            <div className="maxWidth">
                <article><h2>Hold dig opdateret
                    på salgsprocessen</h2><p>Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.  </p><div className="homeAppButtonsDiv"><button className="homeAppDownloadAndroid" ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_83_3141)">
                            <path d="M21.7508 10.2891L4.20381 0.258971C3.90129 0.0861714 3.56449 0 3.22769 0C3.22084 0 3.21409 0.000914286 3.20735 0.000914286C3.16209 0.00137143 3.11695 0.00365714 3.07192 0.0072C3.05158 0.0088 3.03135 0.0109714 3.01101 0.0132571C2.97581 0.0171429 2.94072 0.0220571 2.90575 0.0278857C2.89306 0.0300571 2.88026 0.0307429 2.86758 0.0331429L2.86826 0.0340571C2.64964 0.0744 2.43626 0.151429 2.23798 0.266514C1.63066 0.618857 1.25684 1.26789 1.25684 1.96994V22.0302C1.25684 22.7322 1.63066 23.3813 2.23798 23.7336C2.43615 23.8487 2.64952 23.9258 2.86815 23.9662L2.86758 23.967C2.87901 23.9691 2.89055 23.9698 2.90186 23.9717C2.93946 23.9781 2.97718 23.9833 3.01501 23.9873C3.03398 23.9894 3.05284 23.9914 3.07181 23.9929C3.11626 23.9965 3.16061 23.9985 3.20518 23.9991C3.21272 23.9992 3.22015 24.0001 3.22769 24.0001C3.56449 24.0001 3.90129 23.9139 4.20381 23.7411L21.7508 13.7109C22.3643 13.3601 22.7429 12.7078 22.7429 12.0009C22.7429 12.0009 22.7429 12.0006 22.7429 12.0005C22.7429 12.0005 22.7429 12.0001 22.7429 12C22.7429 12 22.7429 11.9997 22.7429 11.9995C22.7429 11.9995 22.7429 11.9992 22.7429 11.9991C22.7429 11.2923 22.3643 10.64 21.7508 10.2891ZM14.8116 8.29726L13.0669 10.5861L8.62804 4.76251L14.8116 8.29726ZM20.9 12.2225L8.62804 19.2375L16.3119 9.1568L20.8999 11.7793C20.9794 11.8247 21.0287 11.9097 21.0287 12.0008C21.0286 12.0922 20.9792 12.1773 20.9 12.2225Z" fill="#162A41" />
                        </g>
                        <defs>
                            <clipPath id="clip0_83_3141">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                        Google Play
                    </button><button className="homeAppDownloadApple"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.499 0C15.2195 0.0884995 13.724 0.907495 12.8525 1.97399C12.0575 2.94148 11.4035 4.37847 11.6585 5.77497C13.0565 5.81847 14.501 4.97997 15.338 3.89548C16.121 2.88598 16.7135 1.45799 16.499 0Z" fill="white" />
                        <path d="M21.5553 8.05186C20.3268 6.51137 18.6003 5.61737 16.9698 5.61737C14.8174 5.61737 13.9069 6.64786 12.4114 6.64786C10.8694 6.64786 9.69789 5.62037 7.8364 5.62037C6.00791 5.62037 4.06092 6.73786 2.82643 8.64885C1.09094 11.3398 1.38794 16.3993 4.20042 20.7088C5.20692 22.2508 6.55091 23.9848 8.3089 23.9998C9.87339 24.0148 10.3144 22.9963 12.4339 22.9858C14.5534 22.9738 14.9554 24.0133 16.5169 23.9968C18.2763 23.9833 19.6938 22.0618 20.7003 20.5198C21.4218 19.4143 21.6903 18.8578 22.2498 17.6098C18.1803 16.0603 17.5278 10.2733 21.5553 8.05186Z" fill="white" />
                    </svg>
                            Apple Store</button></div></article>
                <div className="homePhoneDiv">

                    <img className="homePhone1" src="phone0.png" alt="App Download Phone 1" />
                    <img className="homePhone2" src="phone1.png" alt="App Download Phone 2" />
                </div>
            </div>
        </div >

    </div >);
}

export default Home;