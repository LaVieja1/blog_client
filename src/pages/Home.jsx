import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "../components/Loading";
import Post from "../components/PostCard";
import PostMain from "../components/PostCardMain";
import postService from "../services/postService";

const Home = () => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        postService.getPosts().then((posts) => {
            setPosts(posts);
        });
    }, []);

    return (
        <>
            {posts ? (
                <Container style={{ flex: '1' }}>
                    <div className="py-4">
                        <PostMain post={posts[0]} />
                    </div>
                    <Row xs={1} md={3} className="g-4 pb-5">
                        {posts.slice(1).map((post) => (
                            <Col key={post.id}>
                                <Post data={post} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default Home;