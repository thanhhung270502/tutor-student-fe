function Books(props) {   
    return (
        <div className="container">
            <h1>Hello</h1>
            {props.books.map((book) => {
                return (
                    <div key={book.id} >
                        <h4>{book.title}</h4>
                        <p>{book.body}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Books;