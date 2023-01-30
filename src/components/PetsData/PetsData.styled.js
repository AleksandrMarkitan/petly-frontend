import styled from 'styled-components';

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 16px;
`;

export const BoxPet = styled.section`
  margin: 0 32px;
`;

export const BoxTitlePet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  @media (min-width: 768px) {
    margin-right: 32px; //add
  }
  @media (min-width: 1280px) {
    margin-right: 0px; //add
  }
`;
export const AddTitle = styled.p`
  margin-right: 15px;
  font-weight: ${p => p.theme.fontWeight.fw500};
  font-size: ${p => p.theme.fontSize.fs20};
`;
export const BtnBox = styled.div`
  display: inline-flex;
  align-items: center;
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    display: inline-flex;
  }
`;

export const BoxMessage = styled.div`
  display: flex;
  justify-content: center;
  padding-left: 45px;
  padding-right: 45px;
`;

export const Message = styled.h3`
  padding-top: 10px;
  display: inline-flex;
  font-weight: ${p => p.theme.fontWeight.fw500};
  font-size: ${p => p.theme.fontSize.fs16};
  @media (min-width: 768px) {
    padding-top: 50px;
    font-size: ${p => p.theme.fontSize.fs24};
  }
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
`;
