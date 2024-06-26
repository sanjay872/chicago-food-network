package chicago.foodnetworkbackend.utils;

import chicago.foodnetworkbackend.dto.Direction;

import java.util.Comparator;

public class ReceiverSortComparator implements Comparator<Direction> {

    @Override
    public int compare(Direction o1, Direction o2) {
        int xComp=o1.getLatitude().compareTo(o2.getLatitude());
        if(xComp!=0)
            return xComp<0?-1:1;
        int yComp=o1.getLongitude().compareTo(o2.getLongitude());
        if(yComp!=0)
            return yComp<0?-1:1;
        return yComp;
    }
}
