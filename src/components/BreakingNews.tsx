import NewsItem from "./NewsItem"

interface BreakingNewsProps {
  link1?: string;
  title1?: string;
  link2?: string;
  title2?: string;
  link3?: string;
  title3?: string;
  breakingNews?: [NewsItem?, NewsItem?, NewsItem?, NewsItem?, NewsItem?]
  time?: Date;
  }
  
  // Breaking news component contains 5 news previews with text, icon and full piece of news link.
  
  const BreakingNews = ({breakingNews, link1, link2, link3, time, title1, title2, title3} : BreakingNewsProps) => {
    return (
      <div className="breaking-news">
        <a className="breaking-news_title" href={link1}>{title1}</a>
        <a className="breaking-news_title" href={link2}>{title2}</a>
        <a className="breaking-news_title" href={link3}>{title3}</a>
        <p>{time?.toLocaleDateString() || ''}</p>
        <ul>
          {breakingNews?.map((newsItem, index) => (
            <li key={index}>
              <a href={newsItem?.newsLink || '#'}>{newsItem?.newsText || ''}</a>
              <img src={newsItem?.newsIcon} alt="News Icon"/>
            </li>
          ))}
        </ul>
      </div>

    )
  }
  
  export default BreakingNews

