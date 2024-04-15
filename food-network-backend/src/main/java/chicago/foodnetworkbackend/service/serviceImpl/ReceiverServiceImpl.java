package chicago.foodnetworkbackend.service.serviceImpl;

import chicago.foodnetworkbackend.dto.Direction;
import chicago.foodnetworkbackend.dto.ReceiverDto;
import chicago.foodnetworkbackend.entity.Receiver;
import chicago.foodnetworkbackend.repository.ReceiverRepository;
import chicago.foodnetworkbackend.service.ReceiverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ReceiverServiceImpl implements ReceiverService {

    @Autowired
    private ReceiverRepository repository;

    @Override
    public Long createReceiver(ReceiverDto receiverDto) {
        return repository.save(toReceiver(receiverDto)).getReceiverId();
    }

    @Override
    public ReceiverDto getReceiverById(Long id) {
        Optional<Receiver> receiver=repository.findById(id);
        return receiver.map(this::toReceiverDto).orElse(null);
    }

    @Override
    public void updateReceiver(ReceiverDto receiverDto) {
        Optional<Receiver> receiver=repository.findById(receiverDto.getReceiverId());
        repository.save(toReceiver(receiverDto));
    }

    @Override
    public void updateStatus(Long id,boolean status, Double latitude, Double longitude) {
        Optional<Receiver> receiver=repository.findById(id);
        if(receiver.isPresent())
        {
            Receiver newReceiver=receiver.get();
            newReceiver.setStatus(status);
            newReceiver.setLatitude(latitude);
            newReceiver.setLongitude(longitude);
            repository.save(newReceiver);
        }
    }

    @Override
    public List<ReceiverDto> getFilteredReceivers(Double latitude, Double longitude, String foodType, String receiverType) {
        List<Receiver> receiverList;
        List<ReceiverDto> finalList=new ArrayList<>();
        if(!foodType.isEmpty() && !receiverType.isEmpty())
            receiverList=repository.findByStatusAndFoodTypeAndReceiverType(true,foodType,receiverType);
        else if(!foodType.isEmpty())
            receiverList=repository.findByStatusAndFoodType(true,foodType);
        else if(!receiverType.isEmpty())
            receiverList=repository.findByStatusAndReceiverType(true,receiverType);
        else
            receiverList=repository.findByStatus(true);

        Map<Long, Direction> calculatedDistance=new HashMap<>();

        receiverList.forEach(data->{
            calculatedDistance.put(data.getReceiverId(), Direction.builder()
                            .latitude(latitude-data.getLatitude())
                            .longitude(longitude-data.getLongitude())
                    .build());
        });

        System.out.println("Calculated Data");
        calculatedDistance.forEach((d1,d2)->{
            System.out.println("Id:"+d1+"latitude: "+d2.getLatitude()+" longitude: "+d2.getLongitude());
        });

        // Create a list of map entries
        List<Map.Entry<Long, Direction>> entryList = new ArrayList<>(calculatedDistance.entrySet());

        // Sort the list using a custom comparator
        entryList.sort(new Comparator<Map.Entry<Long, Direction>>() {
            @Override
            public int compare(Map.Entry<Long, Direction> o1, Map.Entry<Long, Direction> o2) {
                int lat = o1.getValue().getLatitude().compareTo(o2.getValue().getLatitude());
                System.out.println("lat: " + lat);
                if (lat != 0)
                    return lat < 0 ? 1 : -1;
                int lon=o1.getValue().getLongitude().compareTo(o2.getValue().getLongitude());
                if(lon!=0)
                    return lon<0?1:-1;
                return lon;
            }
        });

        // Create a LinkedHashMap to maintain the order of elements
        Map<Long, Direction> sortedCalculatedDistance = new LinkedHashMap<>();
        for (Map.Entry<Long, Direction> entry : entryList) {
            sortedCalculatedDistance.put(entry.getKey(), entry.getValue());
        }

        System.out.println("Sorted Calculated Data");
        sortedCalculatedDistance.forEach((d1,d2)->{
            System.out.println("Id:"+d1+"latitude: "+d2.getLatitude()+" longitude: "+d2.getLongitude());
        });

        Set<Long> ids=sortedCalculatedDistance.keySet();

        System.out.println("Sorted Id");
        ids.forEach((id)->{
            System.out.println("Id:"+id);
        });

        ids.forEach((id)->{
            receiverList.forEach(data->{
                if(data.getReceiverId().equals(id)){
                    finalList.add(toReceiverDto(data));
                }
            });
        });


        System.out.println("Final data");
        finalList.forEach((data)->{
            System.out.println("Id:"+data.getReceiverId()+"latitude: "+data.getLatitude()+" longitude: "+data.getLongitude());
        });

        return finalList;
    }

    private Receiver toReceiver(ReceiverDto receiverDto){
        return Receiver.builder()
                .receiverId(receiverDto.getReceiverId())
                .address(receiverDto.getAddress())
                .receiverType(receiverDto.getReceiverType())
                .latitude(receiverDto.getLatitude())
                .longitude(receiverDto.getLongitude())
                .email(receiverDto.getEmail())
                .orgName(receiverDto.getOrgName())
                .password(receiverDto.getPassword())
                .miscellaneous(receiverDto.getMiscellaneous())
                .foodType(receiverDto.getFoodType())
                .firstName(receiverDto.getFirstName())
                .lastName(receiverDto.getLastName())
                .build();
    }

    private ReceiverDto toReceiverDto(Receiver receiver){
        return ReceiverDto.builder()
                .receiverId(receiver.getReceiverId())
                .firstName(receiver.getFirstName())
                .lastName(receiver.getLastName())
                .email(receiver.getEmail())
                .password(receiver.getPassword())
                .address(receiver.getAddress())
                .latitude(receiver.getLatitude())
                .longitude(receiver.getLongitude())
                .miscellaneous(receiver.getMiscellaneous())
                .orgName(receiver.getOrgName())
                .receiverType(receiver.getReceiverType())
                .foodType(receiver.getFoodType())
                .build();
    }
}
