import { LatLngTuple } from 'leaflet';

/**
 * Converte um GeoJSON MultiPolygon em um array de LatLngTuple adequado para o Leaflet.js
 * @param multiPolygon - As coordenadas do GeoJSON MultiPolygon
 * @returns Array de LatLngTuple[][] adequado para o Leaflet.js
 */
export function convertMultiPolygonToLatLngTuples(multiPolygon: number[][][][]): LatLngTuple[][][] {
  return multiPolygon.map((polygon: number[][][]) =>
    polygon.map((ring: number[][]) =>
      ring.map((coord: number[]) => [coord[1], coord[0]] as LatLngTuple)
    )
  );
}
