package chicago.foodnetworkbackend.controller;

import chicago.foodnetworkbackend.dto.ReceiverDto;
import chicago.foodnetworkbackend.service.ReceiverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/re")
@CrossOrigin(origins = "*")
public class ReceiverController {
    @Autowired
    private ReceiverService service;

    @PostMapping
    public ResponseEntity<Long> createReceiver(@RequestBody ReceiverDto receiverDto){
        return new ResponseEntity<>(service.createReceiver(receiverDto), HttpStatus.CREATED);
    }
}
