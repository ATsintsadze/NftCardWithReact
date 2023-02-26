import React from "react";
import { EtheriumIcon, ClockIcon, ViewIcon } from "../../assets/svg";
import { BoxShadow, Card as StyledCard } from "./StyledCard";
import image from "../../assets/img/image-avatar.png";

function Card() {
  return (
    <BoxShadow size="30px" color="#0c182a">
      <BoxShadow color="#0c1729">
        <StyledCard>
          <div className="card__img">
            <div className="card__visible">
              <div className="card__visible-icon">
                <ViewIcon />
              </div>
            </div>
          </div>
          <div className="card__text-cont">
            <h3>Equilibrium #3429</h3>
            <p>Our Equilibrium collectrion promotes balance and calm</p>
          </div>
          <div className="card__info-row">
            <div className="card__info-box left">
              <EtheriumIcon />
              <span>0.041 ETH</span>
            </div>
            <div className="card__info-box right">
              <ClockIcon />
              <span>3 days left</span>
            </div>
          </div>
          <div className="card__footer">
            <div className="avatar">
              <img src={image} alt="avatar" />
            </div>
            <p>
              With love for <span>React!</span>
            </p>
          </div>
        </StyledCard>
      </BoxShadow>
    </BoxShadow>
  );
}

export default Card;
