const Book = (props) => {
    const { image, title, author } = props;
    return (
      <article className="book">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h3>{author}</h3>
      </article>
    );
}

export default Book