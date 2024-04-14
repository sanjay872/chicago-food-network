package chicago.foodnetworkbackend.service;

import chicago.foodnetworkbackend.dto.ReceiverDto;

public interface ReceiverService {
    Long createReceiver(ReceiverDto receiverDto);

    ReceiverDto getReceiverById(Long id);

    void updateReceiver(ReceiverDto receiverDto);
}
