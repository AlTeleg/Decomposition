import { ReactElement } from "react";

interface searchLinkListItem {
  link: string;
  name: string;
}

interface SearchProps {
    svgLink?: string;
    mapText?: string;
    searchBar?: ReactElement;
    searchLinkList?: [searchLinkListItem, searchLinkListItem, searchLinkListItem, searchLinkListItem, searchLinkListItem, searchLinkListItem, searchLinkListItem];
}

  // Search component contains search bar, list of top links and logo.
  
  const Search = ({svgLink, searchBar, searchLinkList} : SearchProps) => {
    return (
    <div className="search">
      <svg xmlns={svgLink || '#'}></svg>
      <ul>
            {searchLinkList?.map((searchLinkListItem, index) => (
                <li key={index}>
                    <a href={searchLinkListItem.link || '#'}>{searchLinkListItem.name || ''}</a> 
                </li>
            ))}
        </ul>
      {searchBar}
    </div>
    )
  }
  
  export default Search
