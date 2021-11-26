import styled from "styled-components";



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
    & > p{
        
    }
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
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  background-color: white;
  width: 25rem;
  max-width: 35rem;
  border-radius: 20px;
  height: 13rem;
  border: #6D8ACE 3px solid;

`;
export const ModalHeader = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: flex-end;
  width: 50%;
  
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
`;

export const CloseModalBtn = styled.div`
  margin-left: 50px;
  width: 200px;
  height: -webkit-fill-available;
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
`;
export const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  p {
    margin: 0px 5px;
  }
`;
export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const ShareBtn = styled.div`
  margin-right: 1.5rem;
`;
export const ConfirmBtn = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: flex-end;
  width: 100%;
`;
