import PopularItem from "./PopularItem";

interface PopularProps {
    popularLink?: string;
    popularTitle?: string;
    popularList?: [PopularItem, PopularItem, PopularItem]
  }
  
  // Popular component contains 3 popular previews with headings and full piece of news links.
  
  const Popular = ({popularList, popularLink, popularTitle} : PopularProps) => {
    return (
        <div className="popular">  
            <a href={popularLink || '#'}><h3>{popularTitle || ''}</h3></a>
            <ul>
                {popularList?.map((popularItem, index) => (
                    <li key={index}>
                        <a href={popularItem.link || '#'}> <h3>{popularItem.heading || ''}</h3> - {popularItem.description || ''}</a> 
                    </li>
                ))}
            </ul>
        </div>

    )
  }
  
  export default Popular