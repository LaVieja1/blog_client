import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { arrayBufferToBase64 } from "../helpers/functions";

const Post = ({ data }) => {
    return (
        <>
            <Card as={Link} to={`/posts/${data._id}`} className="h-100">
                <Card.Img
                    src={`data:image/png;base64,${arrayBufferToBase64(
                        data.image
                    )}`}
                    width="100px"
                ></Card.Img>
                <Card.Body>
                    <Card.Title className="text-center">{data.title}</Card.Title>
                    <Card.Text className="text-truncate">{data.text}</Card.Text>
                    <Card.Text className="mb-2 text-muted">
                        Por {data.author} | {data.date_formatted}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Post;