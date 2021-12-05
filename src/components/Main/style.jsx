import styled from "styled-components";


export const URLShareButton = styled.button`
    width: 30px;
    height: 30px;
    color: black;
    border-radius: 24px;
    border: 0px;
    font-weight: 800;
    font-size: 18px;
    cursor: pointer;
    &:hover {
        background-color: black;
        color: white;
    }
    @media screen and (max-width: 500px) {
      border-radius: none;
      border: none;
      font-size: 8px;
      background-color: white;
      width: 15px;
      height: 15px;
      &:hover {
        background-color: white;
        color: black;
    }
`;

export const MainLabel = styled.label``;
export const StartTimeSelect = styled.select`
  width: 100px;
  height: 40px;
  text-align: center;
  color: #6A6A6A;
  margin: 0px 10px;
  font-size: 18px;
  border-radius: 20px;
  border: #707070 2px solid;
`;
export const EndTimeSelect = styled.select`
  width: 100px;
  height: 40px;
  text-align: center;
  color: #6A6A6A;
  margin: 0px 10px;
  font-size: 18px;
  border-radius: 20px;
  border: #707070 2px solid;
  p {
    font-size: 20px;
    color: black;
  }
`;


export const guaguebar1 = styled.div`
    display: flex;
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 4px;
    .done {
        background: #6D8ACE;
        width: 33%;
        height: 4px;
    }
    .undo {
        background: #CECECE;
        width: 67%;
        height: 4px;
    }
`;
export const guaguebar2 = styled.div`
    display: flex;
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 4px;
    .done {
        background: #6D8ACE;
        width: 66%;
        height: 4px;
    }
    .undo {
        background: #CECECE;
        width: 34%;
        height: 4px;
    }
`;

export const guaguebar3 = styled.div`
    display: flex;
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 4px;
    .done {
        background: #6D8ACE;
        width: 100%;
        height: 4px;
    }

`;

export const Section = styled.div`
    display: flex;
    width: 100%;
    @media screen and (max-width: 500px) {
      display: flex;
      height: 100%;
      flex-direction: column;
      background-color: #CDE8FC;
    }
`;

export const MainSection1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    z-index: 1;
    width: 100%;
    height: 100vh;    
    background: #CDE8FC;
    box-shadow: 1px 1px 1px 1px gray;
    .section1 { 
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;    
      font-size: 10px;
      color: black;
      p {
          color: #6A6A6A;
          font-size: 35px;
      }
      span {
          color: white;
          font-family: EliceDigitalBaeum_Bold;
      }
      h1 {
          color: #6A6A6A;
          font-size: 20px;
          margin-top: 3px;
      }
    }

    .section2 {
        p {
            color: #6A6A6A;
            font-size: 25px;
        }
    }
    .section3 {
      p {
          color: #6A6A6A;
          font-size: 25px;
      }
    }
    @media screen and (max-width: 500px) {
      display: flex;
      height: 45vh;
      box-shadow: none;
      .section1 { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;    
        color: black;
        p {
            color: #6A6A6A;
            font-size: 30px;
        }
        span {
            color: white;
            font-family: EliceDigitalBaeum_Bold;
        }
        h1 {
            color: #6A6A6A;
            font-size: 16px;
            margin-top: 3px;
        }
      }
  
      .section2 {
          p {
              color: #6A6A6A;
              font-size: 20px;
          }
      }
      .section3 {
        p {
            color: #6A6A6A;
            font-size: 20px;
        }
      }
    }
`;



export const MainSection2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;        
    background: white;      
    width: 100%;
    height: 100vh;
    .section1 {
        display: flex;
        justify-content: center;
        align-items: center;    
        height: 90vh;
    }
    .section2 {
        display: flex;
        justify-content: center;
        align-items: center;    
        height: 90vh;
    }
    .section3 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;    
      height: 90vh;
      p {
        padding-right: 130px;
        font-size: 16px;
        color: #6A6A6A;
      }
      span {
        padding-left: 133px;
        font-size: 16px;
        color: #6A6A6A;
      }
      .picker {
        display: flex;
        align-items: center;    
        margin: 20px 0px;
      }
    }
    @media screen and (max-width: 500px) {
      display: flex;
      height: 55vh;
      z-index: 2;
      border-radius: 20px 20px 0px 0px;
      box-shadow: 0px -4px 4px 0px gray;
      .section1 {
        display: flex;
        justify-content: center;
        align-items: center;    
        height: 100vh;
        
        
      }
      
    }
`;

export const MainNameForm = styled.div`
    p {
        font-size: 15px;
    }
`;

export const MainNameInput = styled.input`
    text-align: center; 
    padding: 10px 50px;
    margin: 8px 20px;
    border-radius: 8px;
    border: #707070 1px solid
`;

export const MainFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;    
    width: 100%;
    height: 12vh;
    border-top: #CECECE 2px solid;
`;

export const MainFooterBtn1 = styled.div`
    .footerName2 {  
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 20px;
        height: 10vh;
        margin-left: 25px;

        p {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 108px;
            height: 25px;
            padding-top: 2.5px;
            margin-right: 5px;
            color: white;
            font-size: 12px;
            background-color: #CECECE;
            border-radius: 20px;

            &:hover {
                background-color: #000000;
                border: #CECECE 1px solid;
            }
        }   
    }
`;
    
export const MainFooterBtn2 = styled.div`
    .footerName1 {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 20px;
        height: 10vh;
        
        p {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 108px;
            height: 25px;
            padding-top: 2.5px;
            margin-right: 5px;
            color: white;
            font-size: 12px;
            background-color: #CECECE;
            border-radius: 20px;

            &:hover {
                background-color: #000000;
                border: #CECECE 1px solid;
            }
        }
    }
    .footerName2 {  
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 20px;
        height: 10vh;
        
        p {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 108px;
            height: 25px;
            padding-top: 2.5px;
            margin-right: 5px;
            color: white;
            font-size: 12px;
            background-color: #CECECE;
            border-radius: 20px;

            &:hover {
                background-color: #000000;
                border: #CECECE 1px solid;
            }
        }   
    }
`;

export const footer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: #CECECE 2px solid;
    width: 100%;
    height: 30px;
    span {
        font-size: 12px;
        color: #656565;
    }
    @media screen and (max-width: 500px) {
      span {
        font-size: 8px;
        color: #656565;
      }
    }
`;

export const MainInput = styled.input``;


export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99;
`;

export const ModalBox = styled.div`
  transform: translate(-50%, -50%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  background-color: white;
  width: 30%;
  min-width: 23rem;
  border-radius: 20px;
  height: 13rem;
  border: #6D8ACE 3px solid;
  @media screen and (max-width: 500px) {
    width: 20rem;
    height: 10rem;
  }
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #6A6A6A;
    font-size: 12px;
  }
`;
export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #6A6A6A;
    font-size: 12px;
  }
  h1 {
    color: #6A6A6A;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
    margin-top: 10px;
  }
`;

export const CloseModalBtn = styled.div`
  margin-left: 250px;
  padding-top: 20px;
  width: 200px;
  height: -webkit-fill-available;
  cursor: pointer;
  p {
    text-decoration: underline;
    color: #E38A8A;
  }
  & > svg {
    height: 37.67px;
    font-size: 30.5px;
    margin: 17px 0px;
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    margin: -5px 0px 0px 190px;
    p {
      font-size: 10px;
    }
  }
`;
export const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  p {
    margin: 0px 5px;
  }
  @media screen and (max-width: 500px) {
    margin: 10px;
    & > p {
      margin: 0px 3px;
      font-size: 10px;
    }
  }
  
`;
export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    margin-top: 5px;
  }
}   
`;
export const ShareBtn = styled.div`
  margin-right: 1.5rem;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 25px;
    padding-top: 2.5px;
    margin-right: 50px;
    color: white;
    font-size: 12px;
    background-color: #CECECE;
    border-radius: 20px;

    &:hover {
        background-color: #000000;
    }
`;
export const ConfirmBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  text-decoration: none;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 25px;
    padding-top: 2.5px;
    margin-right: 5px;
    color: white;
    font-size: 12px;
    background-color: #CECECE;
    border-radius: 20px;
    text-decoration: none;

    &:hover {
        background-color: #000000;
    }
`;


export const ShowPopupBox = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  background-color: #A7A7A7;
  color: white;
  font-size: 15px;
  border-radius: 40px;
  width: 10rem;
  height: 3rem;
`;
