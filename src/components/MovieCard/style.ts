import styled from "styled-components";

export const MovieCard = styled.div`
  width: 200px;
  max-height: max-content;
  height: max-content;
  border: 2px solid var(--black);
  text-align: center;
  font-family: var(--roboto);
  background-color: var(--lightGrey);

  > h4 {
    text-align: center;
    margin: 5px 0;
    font-size: 12px;
    height: 30px;
  }

  > p {
    margin: 5px 0;
    font-size: 12px;
  }

  > button {
    width: 100%;

    background-color: var(--lightBlue);
    color: var(--white);
    border-radius: 2px;
    border: 3px solid transparent;
    outline: none;
    padding: 7px;
  }
`;

interface BackgroundImageProps {
  image: string;
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  height: max-content;

  background-image: ${(props) =>
    `url(https://image.tmdb.org/t/p/w200${props.image})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  flex-direction: column;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: auto;
    border: 1px solid transparent;
    outline: none;
    background-color: transparent;
  }

  > p {
    color: var(--white);
    text-align: center;
    margin-top: 180px;
    height: 100%;
  }
`;

export const RatedNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    font-size: 15px;
    margin: 0 5px;
  }
  > div {
    font-size: 12px;
    margin: 0 5px;
    height: 40px;
    width: 140px;
    overflow: auto;
    ::-webkit-scrollbar {
      width: 5px;
      background-color: var(--grey);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--black);
      border-radius: 50px;
    }

    span {
      margin: 2px;
      display: inline-block;
    }
  }
`;
