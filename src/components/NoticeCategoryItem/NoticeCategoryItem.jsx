// import { Item, Image } from "./NoticeCategoryItem.styled";

export const NoticeCategoryItem = ({ data, openModal = () => {} }) => {
  // const openModal = data => {
  //   setCurrentCategory(data);
  // }

  // const closeModal = () => {
  //   setCurrentCategory(null);
  // }
  // const {
  //   title,
  //   category,
  //   name,
  //   birthdate,
  //   breed,
  //   sex,
  //   location,
  //   comments,
  //   imgURL,
  //   owner } = data;

  return (
    <>
      {/* <Item
        key={id}
        onClick={() => {
          openModal({ src: largeImageURL, alt: tags })
        }}>
        <Image
          src={webformatURL}
          alt={tags}
        />
      </Item> */}
    </>
  );
};
// return (
//   <>
//     <List>
//       {movies.map(({ id, title, poster_path }) => (
//         <Item key={id}>
//           <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
//             <Wrap>
//               <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
//               {title}
//             </Wrap>
//           </LinkStyled>
//         </Item>
//       ))}
//     </List>
//   </>
// )
