package chicago.foodnetworkbackend.service;

import chicago.foodnetworkbackend.dto.ReceiverDto;

import java.util.List;

public interface ReceiverService {
    Long createReceiver(ReceiverDto receiverDto);

    ReceiverDto getReceiverById(Long id);

    void updateReceiver(ReceiverDto receiverDto);

    void updateStatus(Long id,boolean status, Double latitude, Double longitude);

    List<ReceiverDto> getFilteredReceivers(Double latitude, Double longitude, String foodType, String receiverType);
}
