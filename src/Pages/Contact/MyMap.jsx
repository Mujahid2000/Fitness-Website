
import { Map, Marker } from "pigeon-maps"

export function MyMap() {
  return (
    <div className="mt-10">
        <Map height={500} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
      <Marker width={70} anchor={[50.879, 4.6997]} />
    </Map>
    </div>
  )
}