import { createFileRoute } from "@tanstack/react-router";
import { ForwardedRef, forwardRef, useEffect, useMemo } from "react";
import { MapContainer, Marker, Polyline, TileLayer } from "react-leaflet";
import {
  Map,
  LatLngExpression,
} from "leaflet";
import MapHeader from "@/components/MapHeader";
import { useQuery } from "@tanstack/react-query";
import { routeApi } from "@/api/backendApi";

export const Route = createFileRoute("/waypoints/demo")({
  component: WaypointDemo,
});

function WaypointDemo() {
  const {data, error} = useQuery({
    queryKey: ["waypoints", "demo"],
    queryFn: () => routeApi.getAllRoutes()
  });

  useEffect(() => {
    console.log(data);
    if (error) {
      console.error("Error while fetching waypoints", error);
    }
  }, [data]);

  const waypoints = useMemo(() => data?.points ?? [], [data]);
  const polyline: LatLngExpression[] = useMemo(() => waypoints.map((waypoint) => [
    waypoint.lat,
    waypoint.lon,
  ]) as LatLngExpression[], [waypoints]);

  return (
    <div className="relative">
      <MapHeader />
      <WaypointMap>
        {waypoints.map((waypoint, index) => (
          <Marker
            key={index}
            position={[waypoint.lat, waypoint.lon]}
          />
        ))}
        <Polyline pathOptions={{ color: "blue" }} positions={polyline} />
      </WaypointMap>
    </div>
  );
}

interface MapProps extends React.PropsWithChildren { }

const WaypointMap = forwardRef(
  ({ children }: MapProps, ref: ForwardedRef<Map>) => {
    return (
      <MapContainer
        ref={ref}
        className="z-0"
        zoomControl={false}
        style={{ width: "100%", height: "100vh" }}
        center={[54.792277136221905, 9.43580607453268]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children}
      </MapContainer>
    );
  },
);
