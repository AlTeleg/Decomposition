interface VideoProps {
    imgSrc?: string;
    link?: string;
    title?: string;
    description?: string;
}

// Video component contains video previews with title and description.
  
const Video = ({link, imgSrc, description, title} : VideoProps) => {
    return (
    <div className="video">
      <img src={imgSrc || '#'} alt={'img video show' || ''} />
      <a href={link || '#'}><h3>{title || ''}</h3></a>
      <p>{description || ''}</p>
    </div>
    )
  }

export default Video