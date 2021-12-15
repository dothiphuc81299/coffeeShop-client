import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import coffee1 from "../../../assets/images/partials/home/coffe2.png";
import coffee2 from "../../../assets/images/partials/home/coffee.png";
import coffee3 from "../../../assets/images/partials/home/coffe3.png";
import album1 from "../../../assets/images/partials/home/album-1.png";
import album2 from "../../../assets/images/partials/home/album-2.png";
import album3 from "../../../assets/images/partials/home/album-3.png";

export default function Home(props) {
    const event = useSelector((state) => state.event.eventList);
    return (
        <div className="home-user">
            <main>
                <section className="banner">
                    <div className="container">
                        <div className="banner__text">
                            <div className="banner__text-title">
                                <span className="banner__text-title-question">Are you thirsty?</span>
                                <span className="banner__text-title-content">Don't wait!</span>
                                <span className="banner__text-title-answer">Let start to order drink now</span>
                            </div>
                            
                            <div className="banner__text-sub">
                                <div className="banner__text-sub-pre">
                                    <span>This Today</span>
                                    <span>Happy hours</span>
                                </div>
                                <div className="banner__text-sub-main">
                                    <span>1+1=3</span>
                                </div>
                            </div>

                            <div className="banner__text-button">
                                <Link to="/menu" className="button button-border">Order now</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="event">
                    <div className="container-fluid">
                        <div className="event__text">
                            <div className="event__text-subtitle">
                                <h6 className="typography-h6">Discover</h6>
                            </div>
                            <div className="event__text-title">
                                <h1 className="typography-h1">Upcoming Events</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="album">
                    <div className="container">
                        <div className="album-left">
                            <div className="album-item">
                                <div className="album-item__image">
                                    <img src={album1} alt="album"/>
                                </div>
                                <div className="album-item__content">
                                    <h5 className="typography-h5 text-white">{ event[0]?.name }</h5>
                                    <h2 className="typography-h2 text-white">{ event[0]?.desc }</h2>
                                </div>
                            </div>
                        </div>

                        <div className="album-right">
                            <div className="album-item">
                                <div className="album-item__image">
                                    <img src={album2} alt="album"/>
                                </div>
                                
                                <div className="album-item__content">
                                    <h5 className="typography-h6 text-white">{ event[1]?.name }</h5>
                                    <h3 className="typography-h3 text-white">{ event[1]?.desc }</h3>
                                </div>
                            </div>

                            <div className="album-item">
                                <div className="album-item__image">
                                    <img src={album3} alt="album"/>
                                </div>
                                
                                <div className="album-item__content">
                                    <h5 className="typography-h6 text-white">{ event[2]?.name }</h5>
                                    <h3 className="typography-h3 text-white">{ event[2]?.desc }</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

              
            </main>
        </div>
    )
}