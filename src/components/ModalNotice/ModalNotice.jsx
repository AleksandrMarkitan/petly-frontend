import {
  Box,
  BoxBtns,
  BoxImg,
  BoxTitleTable,
  Btn,
  Category,
  Comments,
  Img,
  Table,
  Title,
} from "./ModalNotice.styled";

export const ModalNotice = () => {
  return (
    <>
      <Box>
        <BoxImg>
          <Img src="" alt="" />
        </BoxImg>

        <BoxTitleTable>
          <Title>Сute dog looking for a home</Title>
          <Table>Table</Table>
        </BoxTitleTable>
      </Box>

      <Category>In good hands</Category>

      <Comments>
        <b>Comments: </b>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur Lorem ipsum dolor sit amet, consectetur Lorem
      </Comments>

      <BoxBtns>
        <Btn type="button">Contact</Btn>
        <Btn type="button">Add to </Btn>
      </BoxBtns>
    </>
  );
};
