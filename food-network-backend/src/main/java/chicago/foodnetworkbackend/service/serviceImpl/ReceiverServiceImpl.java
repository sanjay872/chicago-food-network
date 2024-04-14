package chicago.foodnetworkbackend.service.serviceImpl;

import chicago.foodnetworkbackend.dto.ReceiverDto;
import chicago.foodnetworkbackend.entity.Receiver;
import chicago.foodnetworkbackend.repository.ReceiverRepository;
import chicago.foodnetworkbackend.service.ReceiverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

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
