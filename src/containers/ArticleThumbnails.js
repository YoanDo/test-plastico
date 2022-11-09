import React from 'react'
import { useSelector } from 'react-redux'
import { getAllPosts } from '../redux/selectors/posts'
import getSanityImageUrl from '../helpers/getSanityImageUrl'
import ArticleCard from '../components/ArticleCard'
import truncateText from '../helpers/truncateText'
import { Col, Container, Row } from 'reactstrap'


const ArticleThumbnails = () => {
  const posts = useSelector((state) => getAllPosts(state))

  if (!posts.length) return <>loading</>

  return (
    <Container>
      <Row>
        {posts.map((post) => {
          const { title_fr, body_fr, _createdAt: creationDate, _id: id } = post
          // todo ajouter fallback
          const thumbnailUrl = getSanityImageUrl(post.illustration).width(400).url() || "null"

          // * gerer la langue 
          const description = body_fr[0]?.children?.[0]?.text

          if (!title_fr ||
            !creationDate ||
            !thumbnailUrl ||
            !description) return null

          return (
            <Col md="4" key={id} className="my-2">
              <ArticleCard
                title={title_fr}
                creationDate={creationDate}
                imageUrl={thumbnailUrl}
                description={truncateText(description, 120)}
              />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}




ArticleThumbnails.propTypes = {

}

export default ArticleThumbnails