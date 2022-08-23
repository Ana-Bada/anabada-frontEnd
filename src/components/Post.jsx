import React from "react";
import styled from "styled-components";


const Post = ({ data }) => {

    return (
        <>
            <PostInfoBox>
                <ImageBox>
                    <img src={data.thumbnailUrl} alt="thumbnailimage" />
                    <div>
                    {data.liked === true ? (
                        <>
                            <span>{data.likeCount}</span>
                            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 6.5C0.25 3.04824 3.04822 0.25 6.5 0.25C8.26772 0.25 9.86389 0.984376 11 2.16271C12.1361 0.984376 13.7323 0.25 15.5 0.25C18.9518 0.25 21.75 3.04824 21.75 6.5C21.75 9.53809 19.9668 12.3433 17.8454 14.4856C15.7168 16.6353 13.1191 18.2492 11.2365 18.8748C11.083 18.9259 10.917 18.9259 10.7635 18.8748C8.88091 18.2492 6.28321 16.6353 4.15457 14.4856C2.03322 12.3433 0.25 9.53809 0.25 6.5ZM6.5 1.75C3.87665 1.75 1.75 3.87666 1.75 6.5C1.75 8.96191 3.21678 11.4067 5.22043 13.4302C7.12163 15.3502 9.39099 16.7727 11 17.3682C12.609 16.7727 14.8784 15.3502 16.7796 13.4302C18.7832 11.4067 20.25 8.96191 20.25 6.5C20.25 3.87666 18.1233 1.75 15.5 1.75C13.8941 1.75 12.4741 2.54621 11.6132 3.76872C11.4727 3.96821 11.244 4.0869 11 4.0869C10.756 4.0869 10.5273 3.96821 10.3868 3.76872C9.52589 2.54621 8.10588 1.75 6.5 1.75Z" fill="white" />
                            </svg>
                        </>):(<>
                            <p>{data.likeCount}</p>
                            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 6.5C0.25 3.04824 3.04822 0.25 6.5 0.25C8.26772 0.25 9.86389 0.984376 11 2.16271C12.1361 0.984376 13.7323 0.25 15.5 0.25C18.9518 0.25 21.75 3.04824 21.75 6.5C21.75 9.53809 19.9668 12.3433 17.8454 14.4856C15.7168 16.6353 13.1191 18.2492 11.2365 18.8748C11.083 18.9259 10.917 18.9259 10.7635 18.8748C8.88091 18.2492 6.28321 16.6353 4.15457 14.4856C2.03322 12.3433 0.25 9.53809 0.25 6.5ZM6.5 1.75C3.87665 1.75 1.75 3.87666 1.75 6.5C1.75 8.96191 3.21678 11.4067 5.22043 13.4302C7.12163 15.3502 9.39099 16.7727 11 17.3682C12.609 16.7727 14.8784 15.3502 16.7796 13.4302C18.7832 11.4067 20.25 8.96191 20.25 6.5C20.25 3.87666 18.1233 1.75 15.5 1.75C13.8941 1.75 12.4741 2.54621 11.6132 3.76872C11.4727 3.96821 11.244 4.0869 11 4.0869C10.756 4.0869 10.5273 3.96821 10.3868 3.76872C9.52589 2.54621 8.10588 1.75 6.5 1.75Z" fill="white" />
                            </svg>
                        </>
                        )

                        }
                    </div>
                </ImageBox>
                <PostInfo>
                    <h2>{data.title}</h2>
                    <UserInfo>
                        <img src={data.profileImg} alt="" />
                        <h3>{data.nickname}</h3>
                    </UserInfo>
                </PostInfo>
            </PostInfoBox>


        </>
    )

}


export default Post;


const PostInfoBox = styled.div`
    display: inline-block;  
    border-radius: 0.8125rem;
    margin-bottom: 1.25rem;

`

const ImageBox = styled.div`
    display: flex;
    position: relative;

    div{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: transparent;
        bottom: 1.630625rem;
        right: 0.755625rem;
    }
    span{
        font-size: 0.75rem;
        font-weight: 600;
        color:#FF2D55;
    }
    
    p{
        font-size: 0.75rem;
        font-weight: 600;
        color:#FFFFFF;
    }

   img{
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    border-radius: 0.8125rem;
    margin-bottom: 0.875rem;
    width: 100%;
   }
`

const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    h2{
        font-size: 0.9375rem;
        font-weight: 600;
        text-align: left;
    }
   
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
     img{
        height: 1.375rem;
        width: 1.375rem;
        border-radius: 1rem;
        margin-right: 0.375rem;
    }
     h3{
        font-size: 0.75rem;
        font-weight: 300;

    }

`


