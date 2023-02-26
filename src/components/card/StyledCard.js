import styled from "styled-components";
import img from "../../assets/img/image-equilibrium.jpg";
import {
  borderRadius,
  colors,
  fontSize,
  fontWidth,
  responsiveWidths,
} from "../../assets/style/variables";

// main card sttyles
export const Card = styled.section`
  width: 100%;
  max-width: 300px;
  height: 500px;
  background-color: ${colors.VeryDarkBlueCardBG};
  padding: 20px;
  border-radius: ${borderRadius.primary};

  .card__img {
    height: 53%;
    width: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: ${borderRadius.primary};
    overflow: hidden;

    &:hover {
      .card__visible {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
        background-color: ${colors.CyanHover};
      }
    }
  }

  .card__visible {
    visibility: hidden;
    cursor: pointer;
    opacity: 0;
    transform: translateY(100px);
    transition: 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .card__text-cont {
    margin: 20px 0;
    h3 {
      font-weight: ${fontWidth.Semibold};
      color: ${colors.White};
      font-size: ${fontSize.large};
      margin: 0 0 15px 0;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        color: ${colors.Cyan};
      }
    }
    p {
      font-size: ${fontSize.medium};
      color: ${colors.SoftBlue};
      font-weight: ${fontWidth.light};
    }
  }

  .card__info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .card__info-box {
      display: flex;
      justify-content: center;
      gap: 8px;
    }
    .left {
      color: ${colors.Cyan};
      font-size: ${fontSize.small};
    }
    .right {
      color: ${colors.SoftBlue};
      font-size: ${fontSize.small};
    }
  }
  .card__footer {
    border-top: 1px solid ${colors.VeryDarkBlueLine};
    margin: 20px 0;
    display: flex;
    align-items: center;
    padding: 20px 0;
    margin: 20px 0 0 0;
    gap: 15px;

    .avatar {
      border: 1px solid ${colors.White};
      border-radius: 50%;
      height: 30px;
      width: 30px;

      img {
        width: 100%;
      }
    }
    p {
      font-size: ${fontSize.small};
      color: ${colors.SoftBlue};
      span {
        color: ${colors.White};
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          color: ${colors.Cyan};
        }
      }
    }
  }

  // responsive
  @media (max-width: ${responsiveWidths.mobile}) {
    height: 80vh;
    .card__text-cont {
      margin: 10px 0;
    }

    .card__footer {
      padding: 10px 0;
      margin: 5px 0 0 0;
    }
  }
`;

// box shadow style
export const BoxShadow = styled.div`
  border-radius: ${borderRadius.primary};
  box-shadow: 0 18px 2px ${(props) => props.size || "15px"}${(props) => props.color};
`;
