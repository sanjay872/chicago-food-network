package chicago.foodnetworkbackend.service.serviceImpl;

import chicago.foodnetworkbackend.dto.ReceiverDto;
import chicago.foodnetworkbackend.repository.ReceiverRepository;
import chicago.foodnetworkbackend.service.ReceiverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReceiverServiceImpl implements ReceiverService {

    @Autowired
    private ReceiverRepository repository;

    @Override
    public Long createReceiver(ReceiverDto receiverDto) {
        return null;
    }
}
