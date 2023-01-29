import { Field } from 'formik';
import { Label, Error } from '../ModalAddPet.styled';
import { CommentWrap } from './CommentField.styled';

export const CommentField = ({ touched, errors, name, validate }) => {
  return (
    <CommentWrap>
      <Label>
        <div>Comments</div>
        <Field
          as="textarea"
          placeholder="Type comment"
          name={name}
          validate={validate}
        />
        {touched.comments && errors.comments && (
          <Error>{errors.comments}</Error>
        )}
      </Label>
    </CommentWrap>
  );
};

// CommentWrap
