import TVItem from "./TVProgrammItem"

interface TVProps {
    link?: string;
    title?: string;
    tvList?: [TVItem, TVItem, TVItem]
  }
  
  // TV Programm component contains 3 tv programms with title link, description, show time and channel.
  
  const TVProgramm = ({tvList, link, title} : TVProps) => {
    return (
        <div className="tv-programm">
            <a href={link || '#'}><h3>{title || ''}</h3></a>
            <ul>
                {tvList?.map((tvItem, index) => (
                    <li key={index}>
                        <a href={tvItem.link || '#'}> {tvItem.time.toLocaleDateString() || ''} {tvItem.description || ''} {tvItem.channel || ''}</a> 
                    </li>
                ))}
            </ul>
        </div>

    )
  }
  
  export default TVProgramm