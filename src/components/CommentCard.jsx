import { Card, Container } from "react-bootstrap";

const Comment = ({ comment }) => {
    return (
        <>
            <Container
                style={{
                    maxWidth: '25rem',
                    background: '#343a40',
                    borderRadius: '5px',
                }}
                className="mx-auto my-3 mw-50 p-3"
            >
                <div
                    style={{ borderButtom: '1px solid #343a40' }}
                    className="d-flex justify-content-between"
                >
                    <h6>{comment.user}</h6>
                    <span className="text-muted">
                        {comment.date_formatted ? comment.date_formatted : 'Justo ahora'}
                    </span>
                </div>
                <p className="card-text text-start mt-2">{comment.text}</p>
            </Container>
        </>
    );
}

export default Comment;