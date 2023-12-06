interface AdvertisementProps {
  advHref?: string;
  imgSrc?: string;
  imgAlt?: string;
}

// Advertisement component contains img and link of product or service.

const Advertisement = ({advHref, imgSrc, imgAlt} : AdvertisementProps) => {
  return (
    <div className="advertisement">
      <a href={advHref || '#'}><img src={imgSrc || ''} alt={imgAlt || 'img'}></img></a>
    </div>

  )
}

export default Advertisement