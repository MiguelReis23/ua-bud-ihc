import NotFound from "../../not-found"
import ArticleData from "../articles.json"
import React from "react"


export default function TicketID({params}:{params: {articleId: string}}) {

    const ID = Number(params.articleId)
    const articleID = ArticleData.find(article => article.id === ID)
    
    if (!articleID) {
        return NotFound()
    }

    return (
    <>
    <h1>ID: {articleID.id}</h1>
    <p>Title: {articleID.title}</p>
    </>
    )
}