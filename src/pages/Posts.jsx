import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import Post from "../components/Post";
import { postApi } from "../shared/api";
import { useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";


const Posts = () => {
  const navigate = useNavigate();
  const area_ref = useRef();
  const [areaSelected, setAreaSelected] = useState("ALL");
  const { ref, inView } = useInView();



  const getPosts = async (pageParam = 0) => {
    try {
      const res = await postApi.getPosts(pageParam, areaSelected)
      const data= res.posts.content;
      const last = res.pageble.last;
      return { data, nextPage: pageParam + 1, last };
    } catch (err) {
      console.log(err);
      alert(err);
    }
  }


  const { data, fetchNextPage, isFetchingNextPage, refetch } = useInfiniteQuery(
    ["postList"],
    ({ pageParam = 0 }) => getPosts(pageParam),
    {
      getNextPageParam: (lastPage) =>
        !lastPage.last ? lastPage.nextPage : undefined,
    }
  );


  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  

  useEffect(() => {
    refetch();
  }, [areaSelected, data]);


  const handleArea = () => {
    setAreaSelected(area_ref.current.value);
  };

  return (
    <>
    <MainDiv>
      <Areabar>
        <select onChange={handleArea} ref={area_ref}>
          <option value="ALL">전국</option>
          <option value="GYEONGGI">서울, 경기, 인천</option>
          <option value="GANGWON">강원</option>
          <option value="GYEONBUK">대구, 경북</option>
          <option value="GYEONGNAM">부산, 울산, 경남 </option>
          <option value="JEONBUK">전북</option>
          <option value="JEONNAM">광주, 전남</option>
          <option value="CHUNGBUK">충북</option>
          <option value="CHUNGNAM">충남</option>
          <option value="JEJU">제주</option>
        </select>
      </Areabar>
      {data &&
          data.pages.map((page, idx) => {
            return (
              <React.Fragment key={idx}>
                {page.data.map((post) => (
                  <PostContainer
                    key={post.id}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(`/posts/${post.id}`);
                    }}
                  >
                    <Post data={post} />
                  </PostContainer>
                ))}
              </React.Fragment>
            );
          })}
        {isFetchingNextPage ? <p>스피너</p> : <div ref={ref} />}
      </MainDiv>
      <PostBtn>
          <Link to="/post">
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_225_2066)">
                            <rect x="5" y="5" width="56" height="56" rx="28" fill="#007AFF" />
                            <path d="M23.6625 42.7501L27.905 42.7502L43.4613 27.1938L39.2187 22.9512L23.6624 38.5075L23.6625 42.7501Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6884 22.4208C38.9813 22.1279 39.4561 22.1279 39.749 22.4208L43.9917 26.6635C44.1323 26.8041 44.2113 26.9949 44.2113 27.1938C44.2113 27.3927 44.1323 27.5835 43.9917 27.7241L28.4353 43.2805C28.2947 43.4211 28.1039 43.5002 27.905 43.5002L23.6625 43.5001C23.2483 43.5 22.9125 43.1643 22.9125 42.7501L22.9124 38.5075C22.9123 38.3086 22.9914 38.1178 23.132 37.9772L38.6884 22.4208ZM39.2187 24.0118L24.4124 38.8182L24.4125 42.0001L27.5943 42.0001L42.4007 27.1938L39.2187 24.0118Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.4457 26.6635C34.7386 26.3706 35.2135 26.3706 35.5064 26.6635L39.749 30.9062C40.0419 31.1991 40.0419 31.6739 39.749 31.9668C39.4561 32.2597 38.9813 32.2597 38.6884 31.9668L34.4457 27.7242C34.1528 27.4313 34.1528 26.9564 34.4457 26.6635Z" fill="white" />
                        </g>
                        <defs>
                            <filter id="filter0_d_225_2066" x="0" y="0" width="70" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="2" dy="2" />
                                <feGaussianBlur stdDeviation="3.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_225_2066" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_225_2066" result="shape" />
                            </filter>
                        </defs>
                    </svg>
          </Link>
        </PostBtn>
    </>
  )

}


export default Posts;


const MainDiv = styled.div`
  width: 100%;
`

const Areabar = styled.div`
  
`

const PostContainer = styled.div`
`



const PostBtn = styled.div`
  cursor: pointer;
   position: fixed;
  bottom: 1rem;
  right: 1rem;
  `