import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navigate = ({ text, padding, profileImg }) => {
  const navigate = useNavigate();
  return (
    <>
      <Container padding={padding ? true : false}>
        <button onClick={() => navigate(-1)}>
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.03033 13.5303C7.73744 13.8232 7.26256 13.8232 6.96967 13.5303L0.96967 7.53033C0.676777 7.23744 0.676777 6.76256 0.96967 6.46967L6.96967 0.46967C7.26256 0.176777 7.73744 0.176777 8.03033 0.46967C8.32322 0.762563 8.32322 1.23744 8.03033 1.53033L2.56066 7L8.03033 12.4697C8.32322 12.7626 8.32322 13.2374 8.03033 13.5303Z"
              fill="#1C1B1F"
            />
          </svg>
        </button>
        {profileImg && <img src={profileImg} alt="" />}
        <Title>{text}</Title>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem ${(props) => (props.padding ? "1rem" : "0")};

  button {
    padding: 0;
    margin-right: 0.5rem;
  }
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
`;

export default Navigate;
