import styled from "styled-components";
import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";

const ProfileWrapper = styled.div`
  position: absolute;
  width: 370px;
  height: 56px;
  top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  div:hover {
    color: #000;
  }
`
const ProfileContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #48484A;
  cursor: pointer;
`

const ProfileName = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  text-align: center;
`

function Profile() {

  return(
    <>
    <ProfileWrapper>
      <ProfileContainer>
        <IoPersonCircleSharp size={32}/>
        <ProfileName>윤지원</ProfileName>
      </ProfileContainer>
      <ProfileContainer>
        <IoPersonCircleSharp size={32}/>
        <ProfileName>운동계정</ProfileName>
      </ProfileContainer>
      <ProfileContainer>
        <IoPersonCircleSharp size={32}/>
        <ProfileName>공부계정</ProfileName>
      </ProfileContainer>
    </ProfileWrapper>
    </>
  )
}

export default Profile;