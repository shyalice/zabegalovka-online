import React from "react"
import "../../styles/_promotion.scss";

export const Promotions = () =>{
    return(
        <section>
            <h2>Promotion!!!</h2>
            <div className="promotion-block">
                <div className="promotion-card">
                    <h3>Promotion_1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit impedit sunt itaque saepe, quos facilis excepturi quasi odit perspiciatis aperiam, repellendus porro expedita maxime. Possimus unde ut impedit excepturi.</p>
                    <a href="#Promotion_1">More</a>
                </div>
                <div className="promotion-card">
                    <h3>Promotion_2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit impedit sunt itaque saepe, quos facilis excepturi quasi odit perspiciatis aperiam, repellendus porro expedita maxime. Possimus unde ut impedit excepturi.</p>
                    <a href="#Promotion_2">More</a>
                </div>
                <div className="promotion-card">
                    <h3>Promotion_3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reprehenderit impedit sunt itaque saepe, quos facilis excepturi quasi odit perspiciatis aperiam, repellendus porro expedita maxime. Possimus unde ut impedit excepturi.</p>
                    <a href="#Promotion_3">More</a>
                </div>
            </div>
        </section>
    );
}