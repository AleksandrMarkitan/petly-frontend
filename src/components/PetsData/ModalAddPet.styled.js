import styled from 'styled-components';

// export const List = styled.ul`
//   margin: 40px 0 0;
//   display: flex;
//   flex-direction: column;
//   gap: 48px;

//   @media (min-width: 768px) {
//     margin: 72px 0 0;
//     flex-direction: row;
//     flex-wrap: wrap;
//     row-gap: 72px;
//     column-gap: 32px;
//   }
// `;
export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 16px;
`;

export const BoxPet = styled.section`
  width: 100%;
`;

export const BoxTitlePet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;
// export const AddTitle = styled.p`
//   margin-right: 15px;
//   font-weight: ${(p) => p.theme.fontWeight.fw500};
//   font-size: ${(p) => p.theme.fontSize.fs20};
// `;
// export const BtnBox = styled.div`
//   display: inline-flex;
//   align-items: center;
//   @media (min-width: 768px) {
//   }
//   @media (min-width: 1280px) {
//     display: inline-flex;
//   }
// `;
