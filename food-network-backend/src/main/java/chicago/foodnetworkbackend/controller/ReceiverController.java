package chicago.foodnetworkbackend.controller;

import chicago.foodnetworkbackend.dto.ReceiverDto;
import chicago.foodnetworkbackend.service.ReceiverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/re")
@CrossOrigin(origins = "*")
public class ReceiverController {
    @Autowired
    private ReceiverService service;

    @PostMapping
    public Long createReceiver(@RequestBody ReceiverDto receiverDto){
        return service.createReceiver(receiverDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReceiverDto> getReceiverById(@PathVariable("id") Long id){
        return new ResponseEntity<>(service.getReceiverById(id),HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity updateReceiver(@RequestBody ReceiverDto receiverDto){
        service.updateReceiver(receiverDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/status")
    public ResponseEntity updateStatus(
                                        @RequestParam("id") Long id,
                                        @RequestParam("status") boolean status,
                                        @RequestParam(value = "lat",defaultValue = "0") Double latitude,
                                        @RequestParam(value = "lon",defaultValue = "0") Double longitude){
        service.updateStatus(id,status,latitude,longitude);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/filter")
    public ResponseEntity<List<ReceiverDto>> filteredReceiver(@RequestParam(value = "lat") Double latitude,
                                                              @RequestParam(value = "lon") Double longitude,
                                                              @RequestParam(value = "foodType",defaultValue ="") String foodType,
                                                              @RequestParam(value = "receiverType",defaultValue = "") String receiverType){
        return new ResponseEntity<>(service.getFilteredReceivers(latitude,longitude,foodType,receiverType),HttpStatus.OK);
    }
}
