import EtherItem from "./EtherItem";

interface EtherProps {
  etherLink?: string;
  etherTitle?: string;
  etherList?: [EtherItem, EtherItem, EtherItem]
  }
  
  // Ether component contains 3 ether previews with description, channel, img and ether link.
  
  const Ether = ({etherList, etherLink, etherTitle} : EtherProps) => {
    return (
        <div className="ether">
            <a href={etherLink || '#'}><h3>{etherTitle || ''}</h3></a>  
            <ul>
                {etherList?.map((etherItem, index) => (
                    <li key={index}>
                        <a href={etherItem.link}>{etherItem.imgElement}{etherItem.description}</a>
                    </li>
                ))}
            </ul>
        </div>

    )
  }
  
  export default Ether