interface MapProps {
    mapLink?: string;
    mapText?: string;
    scheduleLink?: string;
    scheduleText?: string;

}

  // Map component contains preview with map link and schedule with link.
  
  const Map = ({mapLink, mapText, scheduleLink, scheduleText} : MapProps) => {
    return (
    <div className="map">
      <h3><a href={mapLink || '#'}>{mapText || ''}</a></h3>
      <a href={scheduleLink || '#'}>{scheduleText || ''}</a>
    </div>
    )
  }
  
  export default Map

