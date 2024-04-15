package chicago.foodnetworkbackend.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class Direction {
    private Double latitude;
    private Double longitude;

//    @Override
//    public int compareTo(Direction o) {
//        int lat=this.latitude.compareTo(o.getLatitude());
//        System.out.println("lat: "+lat);
//        if(lat!=0)
//            return lat<0?1:-1;
//        return lat;
//        int lon=this.longitude.compareTo(o.getLongitude());
//        if(lon!=0)
//            return lon<0?-1:1;
//        return lon;
    //}
}
