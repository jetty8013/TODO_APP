import styled from "styled-components";
import React,{ useRef,useEffect,useState } from "react";
import { useDispatch } from "react-redux";


const CalendarWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 358px;
  height: 336px;
  top: 156px;
`
const MonthlyBar = styled.div`
  position: absolute;
  width: 100%;
  height: 15px;
  top: 16px;
`
const MonthlyTitle = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  font-variation-settings: 'slnt' 0;
`
const WeeklyBar = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 298px;
  height: 13px;
  top: 55px;
`
const WeeklyTitle = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`
const DailyContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 336px;
  left: 13px;
  height: 236px;
  top: 84px;
  cursor: pointer;
`
const DailyBox = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  margin-right: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DailyIcons = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 12px;
  background: #48484A;
`
const DailyTitle = styled.span`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  margin-top: 2px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`

function Calendar() {
  const dailyRef = useRef([]);
  const [isDaily, setDaily] = useState({
    yy: new Date().getFullYear(),
    mm: new Date().getMonth(),
    dd: new Date().getDate(),
  });

  const dispatch = useDispatch();

  const creatWeeklyTitle = ['일','월','화','수','목','금','토'].map((el,idx) => {
    return (
      <WeeklyTitle key={idx}>{el}</WeeklyTitle>
    )
  })

  const lastDay = new Date(isDaily.yy,(isDaily.mm+1),0).getDate();
  const creatDailyIcon = new Array(lastDay).fill(0).map((el,idx) => {
    return (
      <DailyBox key={idx} onClick={() => dailyClick(idx)}>
        <DailyIcons ref={ref => (dailyRef.current[idx] = ref)} />
        <DailyTitle>{idx+1}</DailyTitle>
      </DailyBox>
    )
  })

  useEffect(() => {
    dailyRef.current[isDaily.dd-1].style.backgroundColor = '#9747FF'
  },[isDaily.dd])

  const dailyClick = (idx) => {
    if(idx+1 !== isDaily.dd){
      dispatch({type: 'UPDATE_DAY',payload: idx+1})
      dailyRef.current[isDaily.dd-1].style.backgroundColor = '#48484A'
      setDaily((prevState) => {
        return {...prevState, dd: idx+1}
      })
    }
  }

  return(
    <>
      <CalendarWrapper>
        <MonthlyBar><MonthlyTitle>{isDaily.yy}년 {isDaily.mm+1 < 10?'0'+(isDaily.mm+1):isDaily.mm+1}월</MonthlyTitle></MonthlyBar>
        <WeeklyBar>{creatWeeklyTitle}</WeeklyBar>
        <DailyContainer>{creatDailyIcon}</DailyContainer>
      </CalendarWrapper>
    </>
  )
}

export default Calendar;