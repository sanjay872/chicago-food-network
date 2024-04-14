package chicago.foodnetworkbackend.controller;

import chicago.foodnetworkbackend.dto.DonorDto;
import chicago.foodnetworkbackend.service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/donor")
@CrossOrigin(origins = "*")
public class DonorController {

    @Autowired
    private DonorService service;

    @PostMapping
    public ResponseEntity<Long> createDonor(@RequestBody DonorDto donor){
        return new ResponseEntity<>(service.createDonor(donor), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DonorDto> getDonorById(@PathVariable("id") long id){
        return new ResponseEntity<>(service.getDonorById(id),HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity updateDonor(@RequestBody DonorDto donor){
        service.updateDonor(donor);
        return new ResponseEntity(HttpStatus.OK);
    }
}
