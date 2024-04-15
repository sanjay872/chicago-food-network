package chicago.foodnetworkbackend.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class Direction implements Comparable<Direction> {
    private Double latitude;
    private Double longitude;

    @Override
    public int compareTo(Direction o) {
        int lat=this.latitude.compareTo(o.getLatitude());
        if(lat!=0)
            return lat;
        return this.longitude.compareTo(o.getLongitude());
    }
}
